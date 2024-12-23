import os
import pandas as pd
import numpy as np
import tensorflow as tf
from tensorflow import keras
from tensorflow.keras.preprocessing.text import Tokenizer
from tensorflow.keras.preprocessing.sequence import pad_sequences
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

# Загрузка модели и токенизатора
model_path = 'model.h5'
tokenizer_path = 'tokenizer.json'

if os.path.exists(model_path):
    model = keras.models.load_model(model_path)
    tokenizer = keras.preprocessing.text.tokenizer_from_json(open(tokenizer_path).read())
    max_sequence_length = 30  # Укажите максимальную длину последовательности, используемую при обучении
else:
    raise RuntimeError("Модель не найдена!")

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
        chosen_word_index = np.random.choice(predicted_words_indices, p=predicted[predicted_words_indices]/np.sum(predicted[predicted_words_indices]))
        output_word = tokenizer.index_word[chosen_word_index]

        if output_word and output_word not in unique_words:
            output_text.append(output_word)
            unique_words.add(output_word)

        token_list = pad_sequences([token_list[0].tolist() + [chosen_word_index]], maxlen=max_sequence_length - 1, padding='pre')

        if output_word in ['.', '!', '?']:
            break

    return ' '.join(output_text)

# Определение маршрута для получения ответа
@app.post("https://orchid-ochre.vercel.app/generator")
async def get_answer(request: QuestionRequest):
    answer = generate_answer(model, tokenizer, request.question, max_sequence_length)
    return {"answer": answer}
