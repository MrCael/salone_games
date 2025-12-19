import React from "react";
import Button from "react-bootstrap/Button";

import { useState } from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import { AuthState } from "./login/authState";
import { About } from "./about/about";
import { CreateUser } from "./user/create/create";
import { Login } from "./login/login";
import { UserProfile } from "./user/profile/profile";

import "bootstrap-icons/font/bootstrap-icons.css";
import './custom.scss';
import "./app.css";

export default function App() {
    const [activePage, setActivePage] = useState("/");
    const [authState, setAuthState] = useState(AuthState.Unauthenticated);

    function logOut() {
        setActivePage("/");
        setAuthState(AuthState.Unauthenticated);
    }

    return (
        <BrowserRouter>
            <header>
                <NavLink to="/" onClick={() => setActivePage("/")}>
                    <img className="main-logo" src="logoipsum-242.png" alt="logo" />
                </NavLink>
                {activePage != "/login" && authState == AuthState.Unauthenticated && <NavLink className="btn btn-primary float-end menu-button" to="/login" onClick={() => setActivePage("/login")}><i className="bi bi-box-arrow-in-right"></i>&nbsp;Sign In</NavLink>}
                {activePage != "/login" && authState == AuthState.Authenticated && <NavLink className="btn btn-primary float-end menu-button" to="/" onClick={logOut}><i className="bi bi-box-arrow-right"></i>&nbsp;Log Out</NavLink>}
                {activePage != "/about" && <NavLink className="btn btn-primary float-end menu-button" to="/about" onClick={() => setActivePage("/about")}><i className="bi bi-people"></i>&nbsp;About</NavLink>}
            </header>
            <Routes>
                <Route path="/" element={<></>} exact />
                <Route path="/about" element={<About />} />
                <Route path="/user/create" element={<CreateUser setActivePage={setActivePage} setAuthState={setAuthState} />} />
                <Route path="/login" element={<Login setActivePage={setActivePage} setAuthState={setAuthState} />} />
                <Route path="/user/profile" element={<UserProfile />} />
            </Routes>
            <footer></footer>
        </BrowserRouter>
    )
}