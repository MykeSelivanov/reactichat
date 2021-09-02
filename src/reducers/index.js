import user from './user';
import contacts from './contacts';
import activeUserId from './activeUserID';
import messages from './messages';
import { combineReducers } from 'redux';

export default combineReducers({
    user,
    contacts,
    activeUserId,
    messages
});