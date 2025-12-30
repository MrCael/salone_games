import React from "react";

import { useState } from "react";
import { UserData } from "./userData";
import { ContactInfo } from "./contactInfo";
import { ConfirmEmail } from "./confirmEmail";

export function CreateUser({ setActivePage, setAuthState }) {
    const [currentPage, setCurrentPage] = useState("userData");
    const [user, setUser] = useState({});

    return (
        <main className="d-flex flex-grow-1 justify-content-center align-items-center translucent-background">
            <div className="card w-auto h-auto flag-white-centered">
                <div className="card-body">
                    {currentPage == "userData" && <UserData user={user} setUser={setUser} setCurrentPage={setCurrentPage} />}
                    {currentPage == "contactInfo" && <ContactInfo user={user} setUser={setUser} setCurrentPage={setCurrentPage} />}
                    {currentPage == "confirmEmail" && <ConfirmEmail user={user} setUser={setUser} setActivePage={setActivePage} setAuthState={setAuthState} />}
                </div>
            </div>
        </main>
    );
}