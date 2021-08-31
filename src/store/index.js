import { createStore } from "redux";
import reducer from "../reducers/contacts";
import {contacts} from "../data/static-data";

const store = createStore(reducer);

export default store;