import { ADD_TODO, COMPLETED } from "./actionType";
import { v4 as uuid } from "uuid";

const initialState = [];

const todoReducer = (state=initialState,action) => {
    switch(action.type){
        case ADD_TODO:
            return [
                ...state,
                {
                    id: uuid(),
                    title: action.payload.title,
                    description: action.payload.description,
                    isCompleted: action.payload.isCompleted,
                    createdAt: action.payload.createdAt,
                }
            ]

        case COMPLETED:
            return state.map((todo) => {
                if (todo.id !== action.payload) {
                    return todo;
                }
    
                return {
                    ...todo,
                    isCompleted: !todo.isCompleted,
                };
            });

        default:
            return state;
    }
}

export default todoReducer;