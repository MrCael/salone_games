import React from "react";
import Button from "react-bootstrap/Button";

import { NavLink } from "react-router-dom";

export function Login() {
    return (
        <main className="d-flex flex-grow-1 justify-content-center align-items-center">
            <div className="card w-auto h-auto flag-white-centered">
                <div className="card-body">
                    <p>Username:</p>
                    <input type="text" className="form-control" style={{ width: "300px" }} />
                    <p>Password:</p>
                    <input type="password" className="form-control" />
                    <Button className="form-control margin-top-10">Sign In</Button>
                    <p className="margin-top-10">Don't have an account? Create one <NavLink to="/user/create">here!</NavLink></p>
                </div>
            </div>
        </main>
    );
}