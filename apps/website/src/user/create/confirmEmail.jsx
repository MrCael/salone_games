import React from "react";
import Button from "react-bootstrap/Button";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthState } from "../../login/authState";

export function ConfirmEmail({ user, setUser, setActivePage, setAuthState }) {
    const [code, setCode] = useState("");
    const navigate = useNavigate();

    function nextPage() {
        setUser({ ...user, emailConfirmed: true });
        setActivePage("/user/profile");
        setAuthState(AuthState.Authenticated);
        navigate("/user/profile");
    }

    return (
        <div className="text-center">
            <h2>Verify Your Email</h2>
            <p>Please enter the code sent to placeholder@email.com within 10 minutes to confirm your email</p>
            <input type="text" id="confirm_email" className="form-control margin-top-10 w-50 mx-auto" onChange={(e) => setCode(e.target.value)} />
            <Button className="form-control margin-top-10 w-50" onClick={nextPage}>Confirm</Button>
        </div>
    );
}