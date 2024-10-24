import React from "react";

const Login = () => {
  const handleLogin = () => {
  
    window.location.href = `http://localhost:8080/api/auth/signin`;
  };
  return (
    <div className="login-page">
      <h2>Login</h2>
      <button onClick={handleLogin} className="oauth-button">
        Login with other
      </button>
    </div>
  );
};

export default Login;
