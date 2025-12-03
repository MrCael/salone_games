import React from "react"
import { BrowserRouter, NavLink, Route, Routes, useLocation } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import "./app.css";

export default function App() {
    return (
        <BrowserRouter>
            <div>
                <header className="d-flex flex-row">
                    <img className="main-logo" src="logoipsum-242.png" alt="logo" />
                    <div className="sign-in-button"><i className="bi bi-box-arrow-in-right"></i>Sign In</div>
                </header>
                <Routes></Routes>
                <footer></footer>
            </div>
        </BrowserRouter>
    )
}