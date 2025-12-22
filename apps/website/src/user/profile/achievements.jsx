import React from "react";

export function Achievements() {
    return (
        <>
            <p>Achievements:</p>
            <div className="bg-light profile-content-box overflow-auto">
                <ul>
                    <li>Name:</li>
                    <li>Description:</li>
                    <li>Unlocked At:</li>
                </ul>
            </div>
            <p>Badges:</p>
            <div className="bg-light profile-content-box overflow-auto"></div>
        </>
    );
}