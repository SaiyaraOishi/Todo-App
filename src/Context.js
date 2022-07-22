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

    return (
        <>
            <UserContext.Provider value={{...state,setName,setTodo}}>
                {props.children}
            </UserContext.Provider>
        </>
    )
}

export { UserContext, UserContextProvider };