import React from 'react';
import "./Sidebar.css";
import User from "./User";

export default function Sidebar({ contacts }) {
    return (
        <aside className="Sidebar">
            {contacts.map(contact => <User user={contact} key={contact.user_id} />)}
        </aside>
    )
}
