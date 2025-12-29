import React from "react";

import { useState } from "react";

export function ContactInfo({ user, setUser, setCurrentPage }) {
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [byEmail, setByEmail] = useState(false);
    const [byPhone, setByPhone] = useState(false);

    function nextPage() {
        if (email != "" && phone != "") {
            setUser({ ...user, email: email, phone: phone, byEmail: byEmail, byPhone: byPhone });
            setCurrentPage("confirmEmail");
        } else {
            // display error
        }
    }

    return (
        <>
            <p>Email:</p>
            <input type="text" id="email" className="form-control" onChange={(e) => setEmail(e.target.value)} />
            <p>Phone:</p>
            <input type="text" id="phone" className="form-control" onChange={(e) => setPhone(e.target.value)} />
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