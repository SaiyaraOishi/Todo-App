import React, { useContext } from "react";
import {UserContext} from "./Context.js";

function TodoList(){

    const {todolist}=useContext(UserContext);
    console.log(todolist);

    return (
        <>
        <ol>
            {todolist.map(todo=>(
                <li>{todo.title}</li>
            ))}
        </ol>
        </>
    )
}

export default TodoList;