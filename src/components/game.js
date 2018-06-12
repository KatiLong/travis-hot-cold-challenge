//Root Parent Component - Parent of all other Hot-Cold-Game components
import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GameInfo from './game-info';

import './game.css';

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        //Set initial State here
        this.state = {
            feedback: 'Make a Guess!',
            showInfo: false
        }
    }
    //Functions for Game Workings here
    //Local Method - function inside an object
    ToggleGameInfo() {
        (this.state.showInfo) ? this.setState({ showInfo: false}) : this.setState({ showInfo: true});
    }
    StartNewGame() {
        console.log('New Game Started');
        //reset the State, most common solution
        this.setState({
            feedback: 'Make a Guess!',
            showInfo: false
        })
    }
    render() {
        // return JML here
        return (
            <div>
                <Header
                    onToggleGameInfo={() => this.ToggleGameInfo()}
                    onStartNewGame={() => this.StartNewGame()}
                />
                { this.state.showInfo ? <GameInfo /> : null }
                <GuessSection />
            </div>
        );
    }
};
