import { EDIT_CHAT } from "../actions/constants/action-types";

export default function activeChatId(state = null, action) {
    switch (action.type) {
        case EDIT_CHAT:
            return action.payload.number;
        default:
            return state;
    };
};