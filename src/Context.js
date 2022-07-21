import React, { createContext, useState} from "react";

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
        const array=[...state.todolist];
        array.push({...newtodo});
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