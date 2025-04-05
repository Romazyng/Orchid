import { createClient } from './server';
import { cookies } from 'next/headers';

type Cookies = Pick<Awaited<ReturnType<typeof cookies>>, "get">

export async function getUser(cookie: Cookies) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  return user;
}