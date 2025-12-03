import React from "react"
import { BrowserRouter, NavLink, Route, Routes, useLocation } from "react-router-dom";

import "./app.css";

export default function App() {
    return (
        <BrowserRouter>
            <div>
                <header>
                    <nav>
                        <menu></menu>
                    </nav>
                </header>
                <Routes></Routes>
                <footer></footer>
            </div>
        </BrowserRouter>
    )
}