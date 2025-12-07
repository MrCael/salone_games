import React from "react";
import Button from "react-bootstrap/Button";

import { useState } from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import { AuthState } from "./login/authState";
import { About } from "./about/about";
import { Login } from "./login/login";
import { CreateUser } from "./user/create/create";

import "bootstrap-icons/font/bootstrap-icons.css";
import './custom.scss';
import "./app.css";

export default function App() {
    const [activePage, setActivePage] = useState("/");
    const [authState, setAuthState] = useState(AuthState.Unauthenticated);

    return (
        <BrowserRouter>
            <header>
                <NavLink to="/" onClick={() => setActivePage("/")}>
                    <img className="main-logo" src="logoipsum-242.png" alt="logo" />
                </NavLink>
                {activePage != "/login" && authState == AuthState.Unauthenticated && <NavLink className="btn btn-primary float-end menu-button" to="/login" onClick={() => setActivePage("/login")}><i className="bi bi-box-arrow-in-right"></i>&nbsp;Sign In</NavLink>}
                {activePage != "/about" && <NavLink className="btn btn-primary float-end menu-button" to="/about" onClick={() => setActivePage("/about")}><i className="bi bi-people"></i>&nbsp;About</NavLink>}
            </header>
            <Routes>
                <Route path="/" element={<></>} exact />
                <Route path="/about" element={<About />} />
                <Route path="/user/create" element={<CreateUser />} />
                <Route path="/login" element={<Login />} />
            </Routes>
            <footer></footer>
        </BrowserRouter>
    )
}