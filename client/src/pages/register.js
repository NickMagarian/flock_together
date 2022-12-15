import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { REGISTER_MUTATION } from '../utils/mutations'



function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [signup, { data, loading, error }] = useMutation(REGISTER_MUTATION);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  function handleSubmit(event) {
    event.preventDefault();

    // Sign up user
    signup({ variables: { email, password, name, address } });
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
      <label>
        Name:
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
      </label>
      <br />

      <button type="submit">Sign Up</button>
    </form>
  );
}

export default RegisterPage;
``
