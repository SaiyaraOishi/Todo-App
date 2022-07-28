import React, { useContext} from "react";
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
                <div className="todo-list">
                <li  className={` ${todo.isCompleted ? "strike-through" : ""}`}>{todo.title}     &nbsp; &nbsp;    {todo.date} 
                &nbsp; &nbsp;
                <input type="checkbox" checked={todo.isCompleted} onChange={(e)=>handleStrikethrough(e.target.checked,todo.id)}/>
                &nbsp; &nbsp;
                <div>
                <button className="button-edit"  onClick={()=>handleTodoUpdate(todo.id)}>Edit</button>
                </div>
                </li>
                </div>
            ))}
        </ol>
        </>
    )
}

export default TodoList;