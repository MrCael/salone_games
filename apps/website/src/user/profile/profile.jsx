import React from "react";

import { useState, useEffect } from "react";
import { AccountSecurity } from "./accountSecurity";
import { Achievements } from "./achievements";
import { AdminView } from "./adminView";
import { GameStats } from "./gameStats";
import { PersonalInfo } from "./personalInfo";
import { Settings } from "./settings";
import { Social } from "./social";

export function UserProfile() {
    const [currentTab, setCurrentTab] = useState("/personalInfo");

    const current_personal = currentTab == "/personalInfo";
    const current_stats = currentTab == "/gameStats";
    const current_achievements = currentTab == "/achievements";
    const current_social = currentTab == "/social";
    const current_settings = currentTab == "/settings";
    const current_account = currentTab == "/accountSecurity";
    const current_admin = currentTab == "/adminView";

    return (
        <main className="d-flex flex-grow-1 justify-content-center align-items-center translucent-background">
            <div className="w-75 h-auto flag-white-centered">
                <ul className="nav nav-tabs">
                    <li id="/personalInfo" className={`card tab ${current_personal ? "active" : ""}`} onClick={(e) => setCurrentTab(e.target.id)}>Personal Info</li>
                    <li id="/gameStats" className={`card tab ${current_stats ? "active" : ""}`} onClick={(e) => setCurrentTab(e.target.id)}>Game Stats</li>
                    <li id="/achievements" className={`card tab ${current_achievements ? "active": ""}`} onClick={(e) => setCurrentTab(e.target.id)}>Achievements</li>
                    <li id="/social" className={`card tab ${current_social ? "active": ""}`} onClick={(e) => setCurrentTab(e.target.id)}>Social</li>
                    <li id="/settings" className={`card tab ${current_settings ? "active": ""}`} onClick={(e) => setCurrentTab(e.target.id)}>Settings</li>
                    <li id="/accountSecurity" className={`card tab ${current_account ? "active": ""}`} onClick={(e) => setCurrentTab(e.target.id)}>Account</li>
                    <li id="/adminView" className={`card tab ${current_admin ? "active": ""}`} onClick={(e) => setCurrentTab(e.target.id)}>Admin View</li>
                </ul>
                <div className="card profile-card">
                    <div className="card-body">
                        {current_personal && <PersonalInfo />}
                        {current_stats && <GameStats />}
                        {current_achievements && <Achievements />}
                        {current_social && <Social />}
                        {current_settings && <Settings />}
                        {current_account && <AccountSecurity />}
                        {current_admin && <AdminView />}
                    </div>
                </div>
            </div>
        </main>
    );
}