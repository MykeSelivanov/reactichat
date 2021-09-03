import React from 'react';
import store from '../store';
import { setTypingValue } from '../actions';
import './MessageInput.css';

export default function MessageInput({ value }) {

    const handleChange = event => {
        store.dispatch(setTypingValue(event.target.value));
    };

    return (
        <form className="Message">
            <input
                className="Message__input"
                onChange={handleChange}
                value={value}
                placeholder="Write a message"
            />
        </form>
    );
};
