import React, { useState } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { logout } from "./../redux/actions/auth-actions/logoutAction";
import { useDispatch, useSelector } from "react-redux";
import Search from "./Search";
import Loader from "react-loader-spinner";
import "bootstrap-icons/font/bootstrap-icons.css";

import logo from "./../assets/pictures/logo.png";

function MainNavbar() {
  const { user, auth, loading } = useSelector((state) => state.userrr);

  const dispatch = useDispatch();
  let history = useHistory();

  const logoutUser = () => {
    dispatch(logout());
    history.push("/");
  };

  // to controll toggle and expand
  const [expanded, setExpanded] = useState(false);

  /* Dashboard link */
  let dashboard;
  if (auth.isAdmin || auth.isSeller) {
    dashboard = (
      <NavDropdown.Item>
        <Link className="dropdown-item" to="/dashboard">
          <i className="fa fa-tachometer" aria-hidden="true" />
          Dashboard
        </Link>
      </NavDropdown.Item>
    );
  }

  /* sign up link */
  let signUp;
  if (!auth.isCustomer && !loading) {
    signUp = (
      <Link
        to="/signup"
        className="nav-link help"
        style={{ color: "white", fontWeight: "bold", fontSize: "18px" }}
      >
        Daftar /
      </Link>
    );
  }

  /* login link */
  let login;
  if (!auth.isCustomer && !loading) {
    login = (
      <Link
        to="/login"
        className="nav-link help"
        style={{ color: "white", fontWeight: "bold", fontSize: "18px" }}
      >
        Login
      </Link>
    );
  }

  /* drop down menu */
  let userDropDown;
  if (loading) {
    userDropDown = (
      <Loader type="ThreeDots" color="#123" width={40} className="mr-5" />
    );
  } else if (user) {
    userDropDown = (
      <>
        <Link className="help" style={{ color: "white" }} to="/wish_list">
          <i
            className="bi bi-heart-fill help"
            style={{ color: "white", fontWeight: "", fontSize: "25px" }}
            aria-hidden="true"
          />
        </Link>
        <Link className="help" style={{ color: "white" }} to="/settings">
          <i
            className="bi bi-person-circle help"
            style={{ color: "white", fontWeight: "", fontSize: "25px" }}
            aria-hidden="true"
          />
        </Link>
        <span className="nav-link">
          <NavDropdown title={user.firstName} id="basic-nav-dropdown">
            {/* <NavDropdown.Item>
            <Link className="dropdown-item" to="/settings">
              <i className="fa fa-user-o" aria-hidden="true" />
              My Account
            </Link>
          </NavDropdown.Item> */}

            <NavDropdown.Item>
              <Link className="dropdown-item" to="/my_addresses">
                <i className="fa fa-address-book-o" aria-hidden="true" />
                My Addresses
              </Link>
            </NavDropdown.Item>

            {/* <NavDropdown.Item>
            <Link className="dropdown-item" to="/wish_list">
              <i className="fa fa-heart" aria-hidden="true" />
              Wish List
            </Link>
          </NavDropdown.Item> */}

            <NavDropdown.Item>
              <Link className="dropdown-item" to="/my_orders">
                <i className="fa fa-folder" aria-hidden="true" />
                My Orders
              </Link>
            </NavDropdown.Item>

            {dashboard}

            <NavDropdown.Divider />

            <NavDropdown.Item onClick={() => logoutUser()}>
              <i className="fa fa-sign-out" aria-hidden="true" />
              Log out
            </NavDropdown.Item>
          </NavDropdown>
        </span>
      </>
    );
  }

  return (
    <Navbar expand="xxl" className="main-navbar bg-home" expanded={expanded}>
      {/* <div>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="navbar-toggle"
          onClick={() => setExpanded(expanded ? false : "expanded")}
        />

        <Link to="/">
          <img
            src={logo}
            width="100"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Link>
      </div> */}
      <div class="row">
        <span class="col rentall navbar-brand mb-0 h1">
          <a href="/" style={{ color: "white" }}>
            RentAll
          </a>
        </span>
        <span class="col" style={{ marginTop: "auto", marginBottom: "auto" }}>
          <a
            href="/categories"
            className="help"
            style={{ color: "white", fontSize: "18px" }}
          >
            Kategori
          </a>
        </span>
      </div>

      <Search />

      <div className="navbar-login">
        {signUp} {login}
      </div>

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          {user && <div className="welcome">Hello, {user.firstName}</div>}
          {!user && <div className="welcome">Hello, visitor</div>}
          <div className="shop-by">Shop by</div>
          <ul>
            <li>
              <Link
                to="/categories"
                className="nav-link"
                onClick={() => setExpanded(false)}
              >
                All Categories
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="nav-link"
                onClick={() => setExpanded(false)}
              >
                All Products
              </Link>
            </li>
          </ul>
          {/* Help and settings */}
          <div className="shop-by">help & settings</div>
          <ul>
            <li>
              <Link
                to="/settings"
                className="nav-link"
                onClick={() => setExpanded(false)}
              >
                <i className="fa fa-user" aria-hidden="true"></i>
                Your Account
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="nav-link"
                onClick={() => setExpanded(false)}
              >
                <i className="fa fa-phone" aria-hidden="true"></i>
                Customer Service
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="nav-link"
                onClick={() => setExpanded(false)}
              >
                <i className="fa fa-globe" aria-hidden="true"></i>
                English
              </Link>
            </li>
            {user && (
              <li>
                <Link
                  to="/"
                  className="nav-link"
                  onClick={() => {
                    logoutUser();
                    setExpanded(false);
                  }}
                >
                  <i className="fa fa-sign-out" aria-hidden="true"></i>
                  Sign Out
                </Link>
              </li>
            )}
          </ul>
        </Nav>
      </Navbar.Collapse>

      {auth.isCustomer && (
        <Link to="/cart">
          <i
            className="bi bi-cart-fill help"
            style={{ color: "white", fontWeight: "bold", fontSize: "25px" }}
            aria-hidden="true"
          />
        </Link>
      )}

      {userDropDown}
    </Navbar>
  );
}

export default MainNavbar;
