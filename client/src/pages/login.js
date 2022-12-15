import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import {LOGIN_MUTATION } from '../utils/mutations'

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, { data, loading, error }] = useQuery(LOGIN_MUTATION);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  function handleSubmit(event) {
    event.preventDefault();

    // Log in user
    login({ variables: { email, password } });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      </label>
      <br />
      <button type="submit">Log In</button>
    </form>
  );
}

export default LoginPage;
