import os
import numpy as np
import tensorflow as tf
from tensorflow import keras
from tensorflow.keras.preprocessing.sequence import pad_sequences
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import requests
import json

# URL-ы для загрузки модели и токенизатора
MODEL_URL = "https://drive.google.com/uc?id=1QegrUSmoZMKN5BJfmVKZO4_BVLtypkzq&export=download"
TOKENIZER_URL = "https://drive.google.com/uc?id=1qz2y9G4gx0y7Gu05ShSV5azI45yvWdeV&export=download"

# Путь для временного хранения файлов
MODEL_PATH = "/tmp/model.h5"
TOKENIZER_PATH = "/tmp/tokenizer.json"

# Загрузка модели и токенизатора
def download_file(url, local_path):
    response = requests.get(url, stream=True)
    if response.status_code == 200:
        with open(local_path, "wb") as file:
            for chunk in response.iter_content(chunk_size=8192):
                file.write(chunk)
    else:
        raise RuntimeError(f"Не удалось загрузить файл: {url}, статус: {response.status_code}")

# Загрузка модели
if not os.path.exists(MODEL_PATH):
    print("Загрузка модели...")
    download_file(MODEL_URL, MODEL_PATH)
model = keras.models.load_model(MODEL_PATH)

# Загрузка токенизатора
if not os.path.exists(TOKENIZER_PATH):
    print("Загрузка токенизатора...")
    download_file(TOKENIZER_URL, TOKENIZER_PATH)
with open(TOKENIZER_PATH, "r") as file:
    tokenizer_data = json.load(file)
tokenizer = keras.preprocessing.text.tokenizer_from_json(tokenizer_data)

# Параметры модели
MAX_SEQUENCE_LENGTH = 30  # Укажите максимальную длину последовательности, используемую при обучении

# Определение FastAPI приложения
app = FastAPI()

# Добавление CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Замените "*" на список разрешенных доменов для безопасности
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Определение модели запроса
class QuestionRequest(BaseModel):
    question: str

# Генерация ответа
def generate_answer(model, tokenizer, question, max_sequence_length, num_words=50, temperature=0.3, top_k=5):
    token_list = tokenizer.texts_to_sequences([question])[0]
    token_list = pad_sequences([token_list], maxlen=max_sequence_length - 1, padding='pre')

    output_text = []
    unique_words = set()

    for _ in range(num_words):
        predicted = model.predict(token_list, verbose=0)[0]
        predicted = np.log(predicted) / temperature  # Применяем температуру
        exp_predicted = np.exp(predicted)
        predicted /= np.sum(exp_predicted)  # Нормализация
        predicted_words_indices = np.argsort(predicted)[-top_k:]  # Получаем индексы top_k слов

        # Случайный выбор из top_k
        chosen_word_index = np.random.choice(predicted_words_indices, p=predicted[predicted_words_indices] / np.sum(predicted[predicted_words_indices]))
        output_word = tokenizer.index_word[chosen_word_index]

        if output_word and output_word not in unique_words:
            output_text.append(output_word)
            unique_words.add(output_word)

        token_list = pad_sequences([token_list[0].tolist() + [chosen_word_index]], maxlen=max_sequence_length - 1, padding='pre')

        if output_word in ['.', '!', '?']:
            break

    return ' '.join(output_text)

# Определение маршрута для получения ответа
@app.post("/generator")
async def get_answer(request: QuestionRequest):
    answer = generate_answer(model, tokenizer, request.question, MAX_SEQUENCE_LENGTH)
    return {"answer": answer}
