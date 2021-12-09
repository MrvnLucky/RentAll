import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Items from "./components/old/items/Items";
import AuthContext from "./context/AuthContext";
import './index.css'

export default function Router() {
  const { loggedIn } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <div className="main-app-wrapper">
        <Navbar />
        <div className="content-wrapper">
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
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
