import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";

export function Login() {
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    login({ email, password });
  }

  return (
    <>
      <div>
        <h1>Login</h1>
        <input
          type="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          id="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />

        <button onClick={handleLogin}>Login</button>
      </div>
    </>
  );
}
