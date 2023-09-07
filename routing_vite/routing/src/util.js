import { redirect } from 'react-router-dom';

export default async function requireAuth() {
  const isLoggedIn = localStorage.getItem('loggedIn');

  if (!isLoggedIn) {
    throw redirect('/login?message=You must log in first!');
  }
}
