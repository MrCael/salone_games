import React from "react";

export function Settings() {
    return (
        <>
            <p>Theme:</p>
            <ul>
                <li>Light</li>
                <li>Dark</li>
                <li>System Default</li>
            </ul>
            <p>Notifications:</p>
            <ul>
                <li>Text</li>
                <li>Email</li>
            </ul>
            <p>Privacy:</p>
            <ul>
                <li>Show Stats</li>
                <li>Allow Friend Requests</li>
            </ul>
        </>
    );
}