import React from "react";
import Button from "react-bootstrap/Button";

import { useState } from "react";

function UserData({ setCurrentPage }) {
    function nextPage() {
        setCurrentPage("contactInfo");
    }

    return (
        <>
            <p>Choose a Username:</p>
            <input type="text" id="username" className="form-control" />
            <p>Choose a Password:</p>
            <input type="password" id="password" className="form-control" />
            <p>Confirm Password:</p>
            <input type="password" id="confirm-password" className="form-control" />
            <Button className="form-control margin-top-10" onClick={nextPage}>Continue</Button>
        </>
    );
}

function ContactInfo({ setCurrentPage }) {
    function nextPage() {
        setCurrentPage("confirmEmail");
    }

    return (
        <>
            <p>Email:</p>
            <input type="text" id="email" className="form-control" />
            <p>Phone:</p>
            <input type="text" id="phone" className="form-control" />
            <p className="margin-top-10">Notification Preferences:</p>
            <p>
                <label><input type="checkbox" id="email_notifications" />Email</label>
            </p>
            <p>
                <label><input type="checkbox" id="text_notifications" />SMS</label>
            </p>
            <Button className="form-control margin-top-10" onClick={nextPage}>Continue</Button>
        </>
    );
}

function ConfirmEmail() {
    return (
        <div className="text-center">
            <h2>Verify Your Email</h2>
            <p>Please enter the code sent to placeholder@email.com within 10 minutes to confirm your email</p>
            <input type="text" id="confirm_email" className="form-control margin-top-10 w-50 mx-auto" />
            <Button className="form-control margin-top-10 w-50">Confirm</Button>
        </div>
    );
}

export function CreateUser() {
    const [currentPage, setCurrentPage] = useState("userData");

    return (
        <main className="d-flex flex-grow-1 justify-content-center align-items-center translucent-background">
            <div className="card w-auto h-auto flag-white-centered">
                <div className="card-body">
                    {currentPage == "userData" && <UserData setCurrentPage={setCurrentPage} />}
                    {currentPage == "contactInfo" && <ContactInfo setCurrentPage={setCurrentPage} />}
                    {currentPage == "confirmEmail" && <ConfirmEmail />}
                </div>
            </div>
        </main>
    );
}