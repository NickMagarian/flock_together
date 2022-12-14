import React from "react";


const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      if (successful) {
        // redirect to home page
        
      } else {
        setError('Invalid username or password');
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        {error && <p>{error}</p>}
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <button type="submit">Login or Register</button>
      </form>
    );
  };

  export default LoginForm;