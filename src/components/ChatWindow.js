import React from 'react';
import store from '../store';
import Header from '../components/Header';

export default function ChatWindow({ activeUserId }) {
    const state = store.getState();
    const activeUser = state.contacts[activeUserId];
    return (
        <div className="ChatWindow">
            <Header user={activeUser} />
        </div>
    )
}
