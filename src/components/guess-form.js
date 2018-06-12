import React from 'react';


export default class GuessForm extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return (
        <form className="guess-form">
            <input></input>
            <button
                type="submit"
                id="submit-button"

            >Guess</button>
        </form>);
    }
}
