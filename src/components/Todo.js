import { useDispatch } from "react-redux";
import { completed } from "../redux/todos/actions";
import {useNavigate} from "react-router-dom";

export default function Todo({todo}){
    const dispatch = useDispatch();

    const {id, title, isCompleted, createdAt} = todo;

    const handleStatusChange = (id) => {
        dispatch(completed(id));
    }

    const navigate=useNavigate();
    const handleUpdateClick = (id) =>{
        navigate(`/todo/${id}`);
    }

    return(
        <>
        <div className="flex justify-start items-center p-2">
            <div className={`${isCompleted && "line-through"}`} onClick={()=>handleUpdateClick(id)}>{title} &nbsp; &nbsp; {createdAt}</div>
            <input type="checkbox" className="ml-auto" checked={isCompleted} onChange={() => handleStatusChange(id)} />
        </div>
        </>
    )
}