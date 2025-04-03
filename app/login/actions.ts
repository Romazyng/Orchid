// 'use server'

// import { revalidatePath } from 'next/cache'
// import { redirect } from 'next/navigation'

// import { createClient } from '@/utils/supabase/server'

// export async function login(formData: FormData) {
//   const supabase = await createClient()

//   // type-casting here for convenience
//   // in practice, you should validate your inputs
//   const data = {
//     email: formData.get('email') as string,
//     password: formData.get('password') as string,
//   }

//   const { error } = await supabase.auth.signInWithPassword(data)

//   if (error) {
//     redirect('/login?message=Could not authenticate user')
//   }

//   revalidatePath('/', 'layout')
//   redirect('/generator')
// }

// export async function signup(formData: FormData) {
//   const supabase = await createClient()

//   // type-casting here for convenience
//   // in practice, you should validate your inputs
//   const data = {
//     email: formData.get('email') as string,
//     password: formData.get('password') as string,
//   }

//   const { error } = await supabase.auth.signUp(data)

//   if (error) {
//     redirect('/login?message=Error signing up')
//   }

//   revalidatePath('/', 'layout')
//   redirect('/login')
// }

'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'
import { Provider } from '@supabase/supabase-js';
import { getURL } from '@/utils/helpers';

export async function emailLogin(formData: FormData) {
  const supabase = await createClient()

  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { error } = await supabase.auth.signInWithPassword({
    email: data.email,
    password: data.password,
  })

  if (error) {
    redirect('/login?message=Could not authenticate user')
  }

  revalidatePath('/', 'layout')
  redirect('/generator')
}

export async function signup(formData: FormData) {
  const supabase = await createClient()

  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  const name = formData.get('name') as string;

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { name } 
    }
  });
  console.log('SIGNUP DATA:', { email, password, name })

  if (error) {
    redirect(`/login?message=Error signing up: ${error.message}`)
  }

  revalidatePath('/', 'layout')
  redirect('/login?showNotification=true');
}


export async function signOut() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect('/login');
}

export async function oAuthSignIn(provider: Provider) {
  if (!provider) {
    return redirect('/login?message=No provider selected')
  }

  const supabase = await createClient()
  const redirectUrl = getURL('auth/callback')
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo: redirectUrl,
    }
  })

  if (error) {
    redirect('/login?message=Could not authenticate user')
  }

  return redirect(data.url)
}
