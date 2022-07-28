import React, { createContext, useState} from "react";
import { v4 as uuid } from "uuid";

const initialState={
    name:"",
    todolist: []
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

    const getSingleTodo=(id)=>{
        const todo=state.todolist.find(todo=>todo.id===id);
        return todo;
    }

    const updateTodo = (id,todo) => {
        const newList = state.todolist;
        const vtodo=newList.find(todo=>todo.id===id);
        vtodo.title=todo.title;
        vtodo.description=todo.description;
        vtodo.date=todo.date;
        setState({ ...state, todolist: newList });
      };

    return (
        <>
            <UserContext.Provider value={{...state,setName,setTodo,deleteTodo,handleStrikethrough,getSingleTodo,updateTodo}}>
                {props.children}
            </UserContext.Provider>
        </>
    )
}

export { UserContext, UserContextProvider };