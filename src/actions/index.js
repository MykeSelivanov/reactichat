import { 
    SET_ACTIVE_USER_ID, 
    DELETE_CONTACT,
    SET_TYPING_VALUE,
    SEND_MESSAGE
 } from "./constants/action-types";

export const setActiveUserId = id => ({
    type: SET_ACTIVE_USER_ID,
    payload: id
});

// Delete chat action
export const deleteContact = (user_id) => ({
    type: DELETE_CONTACT,
    payload: user_id
});

// set typing value, when user types a message
export const setTypingValue = value => ({
    type: SET_TYPING_VALUE,
    payload: value
});

// send user's message
export const sendMessage = (message, userId) => ({
    type: SEND_MESSAGE,
    payload: {
        message,
        userId
    }
});