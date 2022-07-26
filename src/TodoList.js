import React, { useContext,useState} from "react";
import { useNavigate } from "react-router-dom";
import {UserContext} from "./Context.js";
import "./TodoList.css";

function TodoList(){

    const {todolist,handleStrikethrough}=useContext(UserContext);

    const navigate = useNavigate();
    const handleTodoUpdate = (id) =>{
        navigate(`/todo/${id}`);
    }

    return (
        <>
        <ol>
            {todolist.map(todo=>(
                <li  className={`todo-list ${todo.isCompleted ? "strike-through" : ""}`}>{todo.title}     &nbsp; &nbsp;    {todo.date} 
                &nbsp; &nbsp;
                <input type="checkbox" checked={todo.isCompleted} onChange={(e)=>handleStrikethrough(e.target.checked,todo.id)}/>
                &nbsp; &nbsp;
                <button  onClick={()=>handleTodoUpdate(todo.id)}>Edit</button>
                </li>
            ))}
        </ol>
        </>
    )
}

export default TodoList;