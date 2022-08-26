import { useSelector, useDispatch } from "react-redux";
import { completed, getSingleTodo } from "../redux/todos/actions";
import { useNavigate } from "react-router-dom";


export default function Todolist() {
    const todos = useSelector((state) => state.todos.todolist);
    const dispatch = useDispatch();
    console.log(todos);


    const navigate = useNavigate();
    const handleUpdateClick = (id) => {
        dispatch(getSingleTodo(id));
        navigate(`/todo/update/${id}`);
    }

    const handleViewClick = (id) => {
        dispatch(getSingleTodo(id));
        navigate(`/todo/view/${id}`);
    }

    const handleStatusChange = (id, checkValue) => {
        dispatch(completed({ id: id, checkValue: checkValue }));
    }

    return (
        <>
            <ol>
                {todos.map((todo) => (
                    <li className="bg-gray-200 rounded-md p-3.5 m-1.5 relative left-1/4 w-3/6">
                        <div className="flex justify-start items-center p-2">
                            <div className={`${todo.isCompleted && "line-through"}`}>{todo.title} &nbsp; &nbsp; {todo.createdAt}</div>
                            <input type="checkbox" className="ml-auto" checked={todo.isCompleted} onChange={(e) => handleStatusChange(todo.id, e.target.checked)} />
                            <button type="submit" className="bg-blue-500 px-8 py-1 text-white rounded-md ml-4" onClick={() => handleUpdateClick(todo.id)}>Edit</button>
                            <button type="submit" className="bg-blue-500 px-8 py-1 text-white rounded-md ml-4" onClick={() => handleViewClick(todo.id)}>View</button>
                        </div>
                    </li>
                ))}
            </ol>
        </>
    )
}