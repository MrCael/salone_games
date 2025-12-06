import React from "react";
import Button from "react-bootstrap/Button";

import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import { About } from "./about/about";
import { Login } from "./login/login";
import { CreateUser } from "./user/create/create";

import "bootstrap-icons/font/bootstrap-icons.css";
import './custom.scss';
import "./app.css";

export default function App() {
    return (
        <BrowserRouter>
            <header>
                <NavLink to="/">
                    <img className="main-logo" src="logoipsum-242.png" alt="logo" />
                </NavLink>
                <NavLink className="btn btn-primary float-end menu-button" to="/login"><i className="bi bi-box-arrow-in-right"></i>&nbsp;Sign In</NavLink>
                <NavLink className="btn btn-primary float-end menu-button" to="/about"><i className="bi bi-people"></i>&nbsp;About</NavLink>
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