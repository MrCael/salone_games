import React from "react";

export function Social() {
    return (
        <>
            <p>Firends:</p>
            <div className="bg-light profile-content-box overflow-auto">
                <ul>
                    <li>Username:</li>
                    <li>Avatar:</li>
                    <li>Status:</li>
                </ul>
            </div>
            <p>Friend Requests:</p>
            <ul>
                <li>Incoming:</li>
                <div className="bg-light profile-content-box overflow-auto"></div>
                <li>Outgoing:</li>
                <div className="bg-light profile-content-box overflow-auto"></div>
            </ul>
            <p>Blocked Users:</p>
            <div className="bg-light profile-content-box overflow-auto"></div>
        </>
    );
}