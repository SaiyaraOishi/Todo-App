import React, { createContext, useState } from "react";
import { v4 as uuid } from "uuid";

const TODO_STORAGE_ID = 'todoApp';
const storageState = localStorage.getItem(TODO_STORAGE_ID);
const INITIAL_STATE = {
    name: "",
    todolist: []
}; 
const initialState = storageState ? JSON.parse(storageState) : INITIAL_STATE;

const UserContext = createContext({ ...initialState });

function UserContextProvider(props) {

    const [state, setState] = useState(initialState);

    const updateTodoLocalStorage = (_state) => localStorage.setItem(TODO_STORAGE_ID, JSON.stringify(_state));

    const setName = (name) => {
        let tempState = { ...state, name: name };
        setState(tempState);
        updateTodoLocalStorage(tempState);
    }

    const setTodo = (newtodo) => {
        const unique_id = uuid();
        const array = [...state.todolist];
        array.push({ id: unique_id, ...newtodo });
        let tempState = { ...state, todolist: array };
        setState(tempState);
        updateTodoLocalStorage(tempState);
    }

    // const deleteTodo = (todo) => {
    //     const newTodolist = [...state.todolist].filter((item) => item.id !== todo.id);
    //     setState({ ...state, todolist: newTodolist });
    // }

    const handleStrikethrough = (checkValue, id) => {
        const newtodolist = state.todolist;
        const index = newtodolist.findIndex(todo => todo.id === id);
        newtodolist[index].isCompleted = checkValue;
        let tempState={ ...state, todolist: newtodolist };
        setState(tempState);
        updateTodoLocalStorage(tempState);
    }

    const getSingleTodo = (id) => {
        const todo = state.todolist.find(todo => todo.id === id);
        return todo;
    }

    const updateTodo = (id, todo) => {
        const newList = state.todolist;
        const vtodo = newList.find(todo => todo.id === id);
        vtodo.title = todo.title;
        vtodo.description = todo.description;
        vtodo.date = todo.date;
        let tempState={ ...state, todolist: newList };
        setState(tempState);
        updateTodoLocalStorage(tempState);
    };

    const logout = () => {
        setState(INITIAL_STATE);
        updateTodoLocalStorage(INITIAL_STATE);
    }

    return (
        <>
            <UserContext.Provider value={{ ...state, setName, setTodo, handleStrikethrough, getSingleTodo, updateTodo, logout }}>
                {props.children}
            </UserContext.Provider>
        </>
    )
}

export { UserContext, UserContextProvider };