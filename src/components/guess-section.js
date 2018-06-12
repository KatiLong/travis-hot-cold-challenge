import React from 'react';

import Status from './status';
import GuessForm from './guess-form';

import './guess-section.css';

export default function GuessSection (props) {
    const { status, guessForm } = props;

    return (
        <section className="guess-section">
            <Status />
            <GuessForm />
        </section>
    );

}
