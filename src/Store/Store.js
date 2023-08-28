import { createStore, combineReducers, applyMiddleware } from "redux";
import CountReducer from "../Reducers/CountReducer";
import TodoReducer from "../Reducers/TodoReducer";
import thunk from "redux-thunk";
import EmployeeReducer from "../Reducers/EmployeeReducer";

const combineReducersObject = combineReducers({
  counter: CountReducer,
  todos: TodoReducer,
  employeeslist: EmployeeReducer,
});
let Store = createStore(combineReducersObject, applyMiddleware(thunk));
export default Store;
