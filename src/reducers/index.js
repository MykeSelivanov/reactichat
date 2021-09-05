import user from './user';
import contacts from './contacts';
import activeUserId from './activeUserId';
import activeChatId from './activeChatId';
import messages from './messages';
import typing from './typing';
import { combineReducers } from 'redux';

export default combineReducers({
    user,
    contacts,
    activeUserId,
    messages,
    typing,
    activeChatId
});