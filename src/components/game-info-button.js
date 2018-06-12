import React from 'react';

export default function GameInfoButton (props) {
    return (
        <a
            href="#root"
            className="game-info"
            onClick={() => props.onToggleGameInfo()}>?
        </a>
    );
}
