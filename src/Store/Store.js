import { createStore } from "redux";
import CountReducer from "../Reducers/CountReducer";
let Store = createStore(CountReducer);
export default Store;
