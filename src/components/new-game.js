import React from 'react';

export default function NewGame (props) {
    return (<a href="#new-game" className="new-game" onClick={() => props.onStartNewGame()}>+ New Game</a>);
}
