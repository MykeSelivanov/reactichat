import React from 'react'
import store from '../store';
import "./User.css";
import { setActiveUserId } from '../actions';

export default function User({ user }) {
    const { name, profile_pic, status } = user;
    return (
        <div className="User" onClick={handleUserClick.bind(null, user)}>
            <img src={profile_pic} alt={name} className="User__pic" />
            <div className="User__details">
                <p className="User__details-name">{name}</p>
                <button className="delete-user-button">Delete chat</button>
                <p className="User__details-status">{status}</p>
            </div>
        </div>
    )
};

function handleUserClick({user_id}) {
    store.dispatch(setActiveUserId(user_id));
}
