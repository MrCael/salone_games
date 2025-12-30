import React from "react";
import Button from "react-bootstrap/Button";

import { useState } from "react";

export function ContactInfo({ user, setUser, setCurrentPage }) {
    const [email, setEmail] = useState("");
    const [showEmailError, setShowEmailError] = useState(false);
    const [showValidEmailError, setShowValidEmailError] = useState(false);
    const [phone, setPhone] = useState("");
    const [showPhoneError, setShowPhoneError] = useState(false);
    const [byEmail, setByEmail] = useState(false);
    const [byPhone, setByPhone] = useState(false);

    const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    function nextPage() {
        const emailIsValid = emailFormat.test(email);

        if (email != "" && emailIsValid && phone != "") {
            setUser({ ...user, email: email, phone: phone, byEmail: byEmail, byPhone: byPhone });
            setCurrentPage("confirmEmail");
        } else {
            if (email == "") {
                setShowEmailError(true);
            } else if (!emailIsValid) {
                setShowValidEmailError(true);
                setShowEmailError(false);
            } else {
                setShowEmailError(false);
                setShowValidEmailError(false);
            }

            if (phone == "") {
                setShowPhoneError(true);
            } else {
                setShowPhoneError(false);
            }
        }
    }

    return (
        <>
            <p>Email:</p>
            <input type="email" id="email" className="form-control" onChange={(e) => setEmail(e.target.value)} />
            {showEmailError && <p className="text-danger">This field is required</p>}
            {showValidEmailError && <p className="text-danger">Email is not valid</p>}
            <p>Phone:</p>
            <input type="text" id="phone" className="form-control" onChange={(e) => setPhone(e.target.value)} />
            {showPhoneError && <p className="text-danger">This field is required</p>}
            <p className="margin-top-10">Notification Preferences:</p>
            <p>
                <label><input type="checkbox" id="email_notifications" onChange={(e) => setByEmail(e.target.checked)} />Email</label>
            </p>
            <p>
                <label><input type="checkbox" id="text_notifications" onChange={(e) => setByPhone(e.target.checked)} />SMS</label>
            </p>
            <Button className="form-control margin-top-10" onClick={nextPage}>Continue</Button>
        </>
    );
}