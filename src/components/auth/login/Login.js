import React, { useState } from "react";
import "./login.css";

export default function Login() {
  const [user, setUser] = useState({
    name: "",
    password: "",
  });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // aqui podemos enviar los datos al servidor para ser validados
    const datos = {
      email: email,
      password: password,
    };
  };

  return (
    <div className="formulario__container">
      <form className="formulario__form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="formulario__info">
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="formulario__buttonLogin">
          <button>Login</button>
        </div>
      </form>
    </div>
  );
}
