import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./components/auth/Register";
import Navbar from "./components/layout/Navbar";
import Login from "./components/auth/Login";
import Home from "./components/Home";
import Items from "./components/items/Items";
import AuthContext from "./context/AuthContext";

export default function Router() {
  const { loggedIn } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        {loggedIn === false && (
          <>
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/login" element={<Login />} />
          </>
        )}
        {loggedIn === true && (
          <>
            <Route exact path="/item" element={<Items />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}
