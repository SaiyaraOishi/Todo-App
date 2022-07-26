import React, { useContext,useState} from "react";
import { useNavigate } from "react-router-dom";
import {UserContext} from "./Context.js";
import "./TodoList.css";

function TodoList(){

    const {todolist,handleStrikethrough}=useContext(UserContext);

    // const navigate = useNavigate();
    // const handleTodoUpdate = () =>{
    //     navigate("/createtodo");
    // }

    return (
        <>
        <ol>
            {todolist.map(todo=>(
                <li  className={`todo-list ${todo.isCompleted ? "strike-through" : ""}`}>{todo.title}     &nbsp; &nbsp;    {todo.date} 
                &nbsp; &nbsp;
                <input type="checkbox" checked={todo.isCompleted} onChange={(e)=>handleStrikethrough(e.target.checked,todo.id)}/>
                </li>
            ))}
        </ol>
        </>
    )
}

export default TodoList;