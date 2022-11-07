import React from 'react';
import {
  useLoaderData,
  Form,
  redirect,
  useActionData,
  useNavigation,
} from 'react-router-dom';

import '../App.css';
import { loginUser } from '../apis';

export function loader({ request }) {
  return new URL(request.url).searchParams.get('message');
}

export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get('email');
  const password = formData.get('password');
  const pathname =
    new URL(request.url).searchParams.get('redirectTo') || '/host';

  try {
    await loginUser({ email, password });
    localStorage.setItem('loggedIn', true);
  } catch (error) {
    return error.message;
  }

  return redirect(pathname);
}

export default function Login() {
  const navigation = useNavigation();
  const message = useLoaderData();
  const errorMessage = useActionData();

  return (
    <div className="login-container">
      <h1>Sign in to your account</h1>
      {message && <h4>{message}</h4>}
      <Form method="post" className="login-form" replace>
        <input name="email" type="email" placeholder="Email address" />
        <input name="password" type="password" placeholder="Password" />
        {errorMessage && <h4>{errorMessage}</h4>}
        <button disabled={navigation.state === 'submitting'}>
          {navigation.state === 'submitting' ? 'Logging in...' : 'Login'}
        </button>
      </Form>
      <h3 className="create-one">
        Don't have an account? <a href="#">Create one now</a>
      </h3>
    </div>
  );
}
