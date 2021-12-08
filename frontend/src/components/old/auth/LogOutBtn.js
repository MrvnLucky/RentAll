import axios from "axios";
import React, { useContext } from "react";
import AuthContext from "../../../context/AuthContext";
import { useNavigate } from "react-router";

export default function LogOutBtn() {
  const { getLoggedIn } = useContext(AuthContext);

  const navigate = useNavigate();
  async function logOut() {
    await axios.get("http://localhost:5000/auth/logout");
    await getLoggedIn();

    navigate("/", { replace: true });
  }

  return <button onClick={logOut}>Log Out</button>;
}
