// // lib/useUser.ts
// import { useEffect, useState } from 'react';
// import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

// export function useUser() {
//   const [user, setUser] = useState<any>(null);
//   const [updating, setUpdating] = useState(true);

//   useEffect(() => {
//     const fetchUser = async () => {
//       const supabase = createClientComponentClient();
//       const { data: { user }, error } = await supabase.auth.getUser();

//       if (!error) {
//         setUser(user);
//       }

//       setUpdating(false);
//     };

//     fetchUser();
//   }, []);

//   return { user, updating };
// }