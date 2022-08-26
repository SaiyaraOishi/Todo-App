import { useDispatch } from "react-redux";
import { completed, getSingleTodo } from "../redux/todos/actions";
import { useNavigate } from "react-router-dom";

export default function Todo({ todo }) {
    const dispatch = useDispatch();

    const { id, title, isCompleted, createdAt } = todo;

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
        dispatch(completed({id: id, checkValue: checkValue}));
    }

    return (
        <>
            <div className="flex justify-start items-center p-2">
                <div className={`${isCompleted && "line-through"}`}>{title} &nbsp; &nbsp; {createdAt}</div>
                <input type="checkbox" className="ml-auto" checked={isCompleted} onChange={(e) => handleStatusChange(id, e.target.checked)} />
                <button type="submit" className="bg-blue-500 px-8 py-1 text-white rounded-md ml-4" onClick={() => handleUpdateClick(id)}>Edit</button>
                <button type="submit" className="bg-blue-500 px-8 py-1 text-white rounded-md ml-4" onClick={() => handleViewClick(id)}>View</button>
            </div>
        </>
    )
}