import { ADD_TODO, COMPLETED } from "./actionType";

export const addTodo = ({title,description,isCompleted,createdAt}) => {
    return {
        type: ADD_TODO,
        payload: {
            title: title,
            description: description,
            isCompleted: isCompleted,
            createdAt: createdAt
        }
    }
}

export const completed =(id)=>{
    return{
        type: COMPLETED,
        payload: id,
    }
}
