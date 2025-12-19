import React from "react";

export function GameStats() {
    return (
        <>
            <select className="form-select w-auto">
                <option>Tin Tan Toe</option>
                <option>Sandam Draft</option>
            </select>
            <ul>
                <li>High Score:</li>
                <li>Rank:</li>
                <li>Wins:</li>
                <li>Losses:</li>
                <li>Games Played:</li>
                <li>Last Played:</li>
            </ul>
        </>
    );
}