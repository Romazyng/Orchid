from fastapi import FastAPI, HTTPException, Request
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from transformers import GPT2Tokenizer, GPT2LMHeadModel
import torch
import logging
from pydantic import BaseModel
from typing import Optional
import time
from functools import lru_cache

# Настройка логирования
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Инициализация FastAPI
app = FastAPI()

# Настройка CORS (если фронтенд на другом домене)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Разрешить все домены (настройте для продакшена)
    allow_methods=["*"],
    allow_headers=["*"],
)

# Загрузка модели и токенизатора
tokenizer = GPT2Tokenizer.from_pretrained('sberbank-ai/rugpt3small_based_on_gpt2')
model = GPT2LMHeadModel.from_pretrained('sberbank-ai/rugpt3small_based_on_gpt2')
model.load_state_dict(torch.load('gpt2_news_generator_epoch_10.pt'))
device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')
model = model.to(device)
model.eval()


# Модель для валидации ввода
class GenerateRequest(BaseModel):
    prompt: str
    category: str
    max_length: Optional[int] = 100
    temperature: Optional[float] = 0.9
    top_k: Optional[int] = 50


# Кэширование результатов генерации
@lru_cache(maxsize=500)
def generate_text_cached(prompt: str, category: str, max_length: int, temperature: float, top_k: int) -> str:
    prompt_with_category = f"{category}: {prompt}"
    input_ids = tokenizer.encode(prompt_with_category, return_tensors='pt').to(device)

    with torch.no_grad():
        output = model.generate(
            input_ids,
            max_length=max_length,
            temperature=temperature,
            top_k=top_k,
            do_sample=True,
            pad_token_id=tokenizer.eos_token_id
        )

    generated_text = tokenizer.decode(output[0], skip_special_tokens=True)
    return generated_text


# Маршрут для генерации текста
@app.post("/generator")
async def generate(request: GenerateRequest):
    start_time = time.time()

    # Валидация ввода
    if not request.prompt or not request.category:
        logger.error("Пользователь не указал промпт или категорию")
        raise HTTPException(status_code=400, detail="Пожалуйста, укажите промпт и категорию")

    if len(request.prompt) > 500:
        logger.error("Промпт слишком длинный")
        raise HTTPException(status_code=400, detail="Промпт не должен превышать 500 символов")

    # Генерация текста
    try:
        generated_text = generate_text_cached(
            request.prompt, request.category, request.max_length, request.temperature, request.top_k
        )
        logger.info(f"Успешная генерация текста для категории: {request.category}")
    except Exception as e:
        logger.error(f"Ошибка при генерации текста: {e}")
        raise HTTPException(status_code=500, detail="Ошибка при генерации текста")

    # Логирование времени выполнения
    execution_time = time.time() - start_time
    logger.info(f"Время генерации: {execution_time:.2f} секунд")

    return JSONResponse(content={"generated_text": generated_text})


# Запуск сервера
if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=8000)