import React, { useContext,useState} from "react";
import {UserContext} from "./Context.js";
import "./TodoList.css";

function TodoList(){

    const {todolist}=useContext(UserContext);
    const [check,setCheck]=useState(false);
    
    // console.log(todolist);

    // if(check){
    //     deleteTodo(todo)
    // setCheck(false)
    // }

    return (
        <>
        <ol>
            {todolist.map(todo=>(
                <li  className="todo-list">{todo.title}     &nbsp; &nbsp;    {todo.date} 
                &nbsp; &nbsp;
                <input type="checkbox" value={check} onChange={()=>setCheck(true)} />
                </li>
            ))}
        </ol>
        </>
    )
}

export default TodoList;