import { useSelector } from "react-redux";
import Todo from "./Todo";

export default function Todolist(){
    const todos=useSelector((state) => state.todos.todolist);

    return (
        <>
        <ol>
            {todos.map((todo)=>(
                <li className="bg-gray-200 rounded-md p-3.5 m-1.5 relative left-1/4 w-3/6">
                <Todo todo={todo}/>
                </li>
            ))}
        </ol>
        </>
    )
}