import React, { useContext, useState } from "react";
import axios from "axios";
import AuthContext from "../../context/AuthContext";
import { useNavigate } from "react-router";

export default function Register() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVerify, setPasswordVerify] = useState("");

  const { getLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  async function register(e) {
    e.preventDefault();

    try {
      const registerData = {
        email,
        name,
        password,
        passwordVerify,
      };

      await axios.post("http://localhost:5000/auth/register", registerData, {
        withCredentials: true,
      });
      await getLoggedIn();

      navigate("/", { replace: true });
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={register}>
        <input
          type="email"
          placeholder="Your Email..."
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="name"
          placeholder="Your Name..."
          onChange={(e) => setName(e.target.value)}
          value={email}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <input
          type="password"
          placeholder="Verify password"
          onChange={(e) => setPasswordVerify(e.target.value)}
          value={passwordVerify}
        />
        <input type="submit" value="Submit"></input>
      </form>
    </div>
  );
}
