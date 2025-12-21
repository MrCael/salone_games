import React from "react";

export function PersonalInfo() {
    return (
        <>
            <p className="text-center">Level 5</p>
            <div className="progress" role="progressbar" aria-label="xp" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                <div className="progress-bar bg-secondary" style={{ width: "25%" }}></div>
            </div>
            <div className="d-flex flex-row personal-info-parent">
                <div className="d-flex flex-column">
                    <p className="text-center align-text-bottom">
                        <i className="bi bi-person-circle big-icon"></i> {/* This should display an actual profile image */}
                    </p>
                    <p className="text-center">Display Name</p>
                </div>
                <div className="personal-info">
                    <p>Username:</p>
                    <p>Roles:</p>
                    <p>Bio:</p>
                </div>
            </div>
            <p>Badges:</p>
            <div className="bg-light badge-box overflow-auto"></div>
            <p>Joined On:</p>
        </>
    );
}