import React, { useState } from "react";
import { useLogin, useLogout } from "../../hooks/useAuth";

const Login: React.FC = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const { login, error } = useLogin();
  console.log(error);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { logout } = useLogout();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(formData);

      setIsLoggedIn(true);
    } catch (error) {
      setIsLoggedIn(false);
    }
  };

  const handleLogout = async () => {
    logout();
    setIsLoggedIn(false);

    // Call the logout endpoint with tokens
    await logout();
  };

  return (
    <>
      <h1>{isLoggedIn ? "Welcome" : "Login"}</h1>
      {isLoggedIn ? (
        <>
          <p>Successfully logged in!</p>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor='username'>Username</label>
              <input
                type='text'
                id='username'
                value={formData.username}
                onChange={(e) =>
                  setFormData({ ...formData, username: e.target.value })
                }
              />
            </div>
            <div>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                id='password'
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
            </div>
            <button type='submit' onClick={handleSubmit}>
              Login
            </button>
          </form>
          {error && <p>{error}</p>}
          {isLoggedIn && <p>Successfully logged in!</p>}
        </>
      )}
    </>
  );
};

export default Login;
