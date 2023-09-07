import React from 'react';
import {
  useLoaderData,
  useNavigate,
  Form,
  redirect,
  useActionData,
} from 'react-router-dom';

import '../App.css';
import { loginUser } from '../apis';
import requireAuth from '../util';

export function loader({ request }) {
  return new URL(request.url).searchParams.get('message');
}

export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get('email');
  const password = formData.get('password');
  try {
    const data = await loginUser({ email, password });
    localStorage.setItem('loggedIn', true);
    loginUser({ email, password });
  } catch (error) {
    return error.message;
  }

  return redirect('/host', { replace: true });
}

export default function Login() {
  const [status, setStatus] = React.useState('idle');
  const message = useLoaderData();
  const errorMessage = useActionData();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setStatus('submitting');
    setError(null);
    loginUser(loginFormData)
      .then((data) => {
        navigate('/host', { replace: true });
      })
      .catch((err) => setError(err))
      .finally(() => setStatus('idle'));
  }

  return (
    <div className="login-container">
      <h1>Sign in to your account</h1>
      {message && <h4>{message}</h4>}
      <Form method="post" className="login-form" replace>
        <input name="email" type="email" placeholder="Email address" />
        <input name="password" type="password" placeholder="Password" />
        {errorMessage && <h4>{errorMessage}</h4>}
        <button disabled={status === 'submitting'}>
          {status === 'submitting' ? 'Logging in...' : 'Login'}
        </button>
      </Form>
      <h3 className="create-one">
        Don't have an account? <a href="#">Create one now</a>
      </h3>
    </div>
  );
}
