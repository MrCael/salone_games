import React from "react";

export function Settings() {
    return (
        <>
            <p>Theme:</p>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="theme" id="light" />
                <label class="form-check-label" for="light">Light</label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="theme" id="dark" />
                <label class="form-check-label" for="dark">Dark</label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="theme" id="system" defaultChecked />efrr
                <label class="form-check-label" for="system">System Default</label>
            </div>
            <p>Notifications:</p>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" id="text" />
                <label class="form-check-label" for="text">Text</label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" id="email" />
                <label class="form-check-label" for="email">Email</label>
            </div>
            <p>Privacy:</p>
            <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" role="switch" id="stats" defaultChecked />
                <label class="form-check-label" for="stats">Show Stats</label>
            </div>
            <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" role="switch" id="friend-requests" defaultChecked />
                <label class="form-check-label" for="friend-requests">Allow Friend Requests</label>
            </div>
        </>
    );
}