import React, { createContext, useState} from "react";
import { v4 as uuid } from "uuid";

const initialState={
    name:"",
    todolist:[]
}

const UserContext = createContext({...initialState});

function UserContextProvider(props) {

    const [state,setState]=useState(initialState);

    const setName =(name)=>{
        setState({...state,name:name});
    }

    const setTodo = (newtodo) =>{
        const unique_id = uuid();
        const array=[...state.todolist];
        array.push({id: unique_id,...newtodo});
        setState({...state,todolist:array});
    }

    const deleteTodo = (todo) => {
        const newTodolist=[...state.todolist].filter((item)=>item.id!==todo.id);
        setState({...state,todolist: newTodolist});
    }

    const handleStrikethrough = (checkValue,id) => {
        const newtodolist=state.todolist;
        const index=newtodolist.findIndex(todo=>todo.id===id);
        newtodolist[index].isCompleted=checkValue;
        setState({...state,todolist: newtodolist})
      }

    

    return (
        <>
            <UserContext.Provider value={{...state,setName,setTodo,deleteTodo,handleStrikethrough}}>
                {props.children}
            </UserContext.Provider>
        </>
    )
}

export { UserContext, UserContextProvider };