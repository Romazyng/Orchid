'use client'

import { supabase } from '../lib/initSupabase';
import { useState } from 'react';

// Тип данных для пользователя
type User = {
  id: number;
  username: string;
  email: string;
  password: string;
};

export default function AddUser() {
  const [username, setUsername] = useState<string>(''); // Имя нового пользователя
  const [email, setEmail] = useState<string>('');       // Email нового пользователя
  const [password, setPassword] = useState<string>(''); // Пароль нового пользователя
  const [status, setStatus] = useState<string>('');      // Статус операции

  const handleAddUser = async () => {
    if (!username || !email || !password) {
      setStatus('Пожалуйста, укажите имя пользователя, email и пароль.');
      return;
    }

    try {
      // Добавление нового пользователя в таблицу 'users'
      const { data, error } = await supabase
        .from('users')  // Название таблицы
        .insert([{ username, email, password }])
        .select();      // Добавлен метод select() для получения данных после вставки

      // Проверка на ошибку
      if (error) {
        setStatus(`Ошибка при добавлении пользователя: ${error.message}`);
      } else {
        // Проверка на успешное добавление данных
        if (data && data.length > 0) {
          setStatus(`Новый пользователь добавлен! ID: ${data[0]?.id}`);
        } else {
          setStatus('Ошибка: данные не были получены.');
        }
      }
    } catch (error) {
      setStatus('Произошла ошибка при добавлении пользователя.');
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Добавить нового пользователя</h1>

      {status && <p>{status}</p>}

      <div>
        <label>
          Имя пользователя:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Введите имя пользователя"
          />
        </label>
      </div>

      <div>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Введите email"
          />
        </label>
      </div>

      <div>
        <label>
          Пароль:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Введите пароль"
          />
        </label>
      </div>

      <button onClick={handleAddUser}>Добавить</button>
    </div>
  );
}
