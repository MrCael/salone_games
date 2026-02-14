import React from "react";
import Button from "react-bootstrap/Button";

import { useState } from "react";

export function UserData({ user, setUser, setCurrentPage }) {    
    const [userName, setUserName] = useState("");
    const [showUserNameError, setShowUserNameError] = useState(false);
    const [password, setPassword] = useState("");
    const [showPasswordError, setShowPasswordError] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showConfirmPasswordError, setShowConfirmPasswordError] = useState(false);

    function nextPage() {
        if (password == confirmPassword && password != "" && userName != "") {
            setUser({ ...user, userName: userName, password: password });
            setCurrentPage("contactInfo");
        } else {
            setShowUserNameError(userName == "");
            setShowPasswordError(password == "");
            setShowConfirmPasswordError(confirmPassword == "");
        }
    }

    return (
        <>
            <p>Choose a Username:</p>
            <input type="text" id="username" className="form-control" onChange={(e) => setUserName(e.target.value)} />
            {showUserNameError && <p className="text-danger">This field is required</p>}
            <p>Choose a Password:</p>
            <input type="password" id="password" className="form-control" onChange={(e) => setPassword(e.target.value)} />
            {showPasswordError && <p className="text-danger">This field is required</p>}
            <p>Confirm Password:</p>
            <input type="password" id="confirm-password" className="form-control" onChange={(e) => setConfirmPassword(e.target.value)} />
            {showConfirmPasswordError && <p className="text-danger">This field is required</p>}
            {confirmPassword != "" && password != confirmPassword && <p className="text-danger">Passwords do not match</p>}
            <Button className="form-control margin-top-10" onClick={nextPage}>Continue</Button>
        </>
    );
}