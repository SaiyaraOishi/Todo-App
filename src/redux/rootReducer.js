import { combineReducers } from "redux";
import todoReducer from "./todos/todoReducer";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
    user: userReducer,
    todos: todoReducer
});

export default rootReducer;