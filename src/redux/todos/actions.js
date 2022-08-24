import { ADD_TODO, COMPLETED, UPDATE_TODO } from "./actionType";

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

export const updateTodo = (id,{title,description}) =>{
    return {
        type: UPDATE_TODO,
        payload: {
            id:id,
            title: title,
            description: description
        }
    }
}
