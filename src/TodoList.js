import React, { useContext } from "react";
import {UserContext} from "./Context.js";
import "./TodoList.css";

function TodoList(){

    const {todolist}=useContext(UserContext);
    console.log(todolist);

    return (
        <>
        <ol>
            {todolist.map(todo=>(
                <li  className="todo-list">{todo.title}     &nbsp; &nbsp;    {todo.date} 
                &nbsp; &nbsp;
                <input type="checkbox" />
                </li>
            ))}
        </ol>
        </>
    )
}

export default TodoList;