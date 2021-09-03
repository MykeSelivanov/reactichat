import { contacts as userContancts } from '../data/static-data';
import { DELETE_CONTACT } from '../actions/constants/action-types';

// eslint-disable-next-line import/no-anonymous-default-export
export default function contacts(state = userContancts, action) {
    switch (action.type) {
        case DELETE_CONTACT:
            const contactId = action.payload;
            const { [contactId]: deleted, ...newState } = state;
            return newState;

        default:
            return state;
    }
};