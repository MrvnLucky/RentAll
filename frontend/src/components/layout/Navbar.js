import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import LogOutBtn from "../old/auth/LogOutBtn";
import Header from "./Header";
import Login from "./Login";
import Logout from "./Logout";
import './header.css'

export default function Navbar() {
  const { loggedIn } = useContext(AuthContext);
  console.log(loggedIn);
  return (
    <>
      <Header />
      {loggedIn === false && (
        <>
          <Logout />
        </>
      )}
      {loggedIn === true && (
        <>
          <Login />
          <LogOutBtn />
        </>
      )}
    </>
  );
}
