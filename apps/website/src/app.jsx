import React from "react";
import Button from "react-bootstrap/Button";

import { BrowserRouter, NavLink, Route, Routes, useLocation } from "react-router-dom";

import "bootstrap-icons/font/bootstrap-icons.css";
import './custom.scss';
import "./app.css";

export default function App() {
    return (
        <BrowserRouter>
            <header>
                <img className="main-logo" src="logoipsum-242.png" alt="logo" />
                <Button className="sign-in-button float-end"><i className="bi bi-box-arrow-in-right"></i>&nbsp;Sign In</Button>
            </header>
            <Routes></Routes>
            <footer></footer>
        </BrowserRouter>
    )
}