import React from 'react';
//children
import NewGame from './new-game';
import GameInfoButton from './game-info-button';
//CSS
import './header.css';

export default function Header (props) {
    return (
        <header>
            <nav>
                <ul>
                    <li><GameInfoButton onToggleGameInfo={() => props.onToggleGameInfo()}/></li>
                    <li><NewGame onStartNewGame={() => props.onStartNewGame()}/></li>
                </ul>
            </nav>
            <h1>HOT or COLD?</h1>
        </header>
    );

}
