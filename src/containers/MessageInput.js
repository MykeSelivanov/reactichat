import React from 'react';
import store from '../store';
import { setTypingValue, sendMessage } from '../actions';
import './MessageInput.css';

export default function MessageInput({ value }) {
    const state = store.getState();

    const handleChange = event => {
        store.dispatch(setTypingValue(event.target.value));
    };

    const handleSubmit = event => {
        event.preventDefault();
        const { typing, activeUserId } = state;
        store.dispatch(sendMessage(typing, activeUserId));
    };

    return (
        <form className="Message" onSubmit={handleSubmit}>
            <input
                className="Message__input"
                onChange={handleChange}
                value={value}
                placeholder="Write a message"
            />
        </form>
    );
};
