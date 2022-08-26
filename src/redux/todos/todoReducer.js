import { ADD_TODO, COMPLETED, GET_SINGLE_TODO, UPDATE_TODO } from "./actionType";
import { v4 as uuid } from "uuid";

const initialState = {
    todolist: [],
    todo: {}
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            const uniqueId = uuid();
            const title = action.payload.title;
            const description = action.payload.description;
            const isCompleted = action.payload.isCompleted;
            const createdAt = action.payload.createdAt;
            const array = [...state.todolist];
            array.push({ id: uniqueId, title: title, description: description, isCompleted: isCompleted, createdAt: createdAt });
            return {
                ...state,
                todolist: array,
            }

        case COMPLETED:
            const newtodolist = state.todolist;
            const index = newtodolist.findIndex(todo => todo.id === action.payload.id);
            newtodolist[index].isCompleted = !newtodolist[index].isCompleted;
            return {
                ...state,
                todolist: [...newtodolist],
            }

        case UPDATE_TODO:
            const newList = state.todolist;
            const vtodo = newList.find(todo => todo.id === action.payload.id);
            vtodo.title = action.payload.title;
            vtodo.description = action.payload.description;
            return {
                ...state,
                todolist: [...newList],
            }

        case GET_SINGLE_TODO:
            const single_todo = state.todolist.find((todo) => todo.id === action.payload);
            return {
                ...state,
                todo: single_todo,
            }

        default:
            return state;
    }
}

export default todoReducer;