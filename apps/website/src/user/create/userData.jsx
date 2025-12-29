import React from "react";

import { useState } from "react";

export function UserData({ user, setUser, setCurrentPage }) {    
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    function nextPage() {
        if (password == confirmPassword) {
            setUser({ ...user, userName: userName, password: password });
            setCurrentPage("contactInfo");
        } else {
            // display error
        }
    }

    return (
        <>
            <p>Choose a Username:</p>
            <input type="text" id="username" className="form-control" onChange={(e) => setUserName(e.target.value)} />
            <p>Choose a Password:</p>
            <input type="password" id="password" className="form-control" onChange={(e) => setPassword(e.target.value)} />
            <p>Confirm Password:</p>
            <input type="password" id="confirm-password" className="form-control" onChange={(e) => setConfirmPassword(e.target.value)} />
            <Button className="form-control margin-top-10" onClick={nextPage}>Continue</Button>
        </>
    );
}