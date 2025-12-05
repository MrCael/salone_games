import React from "react";
import Button from "react-bootstrap/Button";

import { BrowserRouter, NavLink, Route, Routes, useLocation } from "react-router-dom";
import { About } from "./about/about";

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
                <Button className="float-end menu-button"><i className="bi bi-box-arrow-in-right"></i>&nbsp;Sign In</Button>
                <NavLink className="btn btn-primary float-end menu-button" to="/about"><i class="bi bi-people"></i>&nbsp;About</NavLink>
            </header>
            <Routes>
                <Route path="/" element={<></>} exact />
                <Route path="/about" element={<About />} />
            </Routes>
            <footer></footer>
        </BrowserRouter>
    )
}