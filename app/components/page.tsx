// 'use client';

// import { supabase } from '../lib/initSupabase';
// import { useState } from 'react';

// export default function AddUser() {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [status, setStatus] = useState('');

//   const handleAddUser = async () => {
//     if (!username || !email || !password) {
//       setStatus('Пожалуйста, укажите имя пользователя, email и пароль.');
//       return;
//     }

//     try {
//       // Вызов функции add_user через RPC
//       const { data, error } = await supabase
//         .rpc('add_user', {
//           new_username: username,
//           new_email: email,
//           new_password: password
//         });

//       if (error) {
//         setStatus(`Ошибка: ${error.message}`);
//       } else {
//         // Обрабатываем успешный ответ
//         if (data && data.length > 0) {
//           setStatus(`Пользователь добавлен! ID: ${data[0].id}`);
//         } else {
//           setStatus('Ошибка добавления пользователя.');
//         }
//       }
//     } catch (error) {
//       setStatus('Произошла ошибка.');
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//       <h1>Добавить нового пользователя</h1>
//       <p>{status}</p>
//       <input
//         type="text"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//         placeholder="Имя пользователя"
//       />
//       <input
//         type="email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         placeholder="Email"
//       />
//       <input
//         type="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         placeholder="Пароль"
//       />
//       <button onClick={handleAddUser}>Добавить</button>
//     </div>
//   );
// }

export default function Home() {
  return (
      <h1>Hello</h1>
  )
}