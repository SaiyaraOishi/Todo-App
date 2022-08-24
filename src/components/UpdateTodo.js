import Navbar from "./Navbar";
import Footer from "./Footer";
import {Link,useParams,useNavigate} from "react-router-dom";
import { useEffect,useState } from "react";
import {useSelector , useDispatch} from "react-redux";
import { updateTodo } from "../redux/todos/actions";

export default function UpdateTodo(){

    const [title,setTitle]=useState("");
    const [description,setDescription]=useState("");
    const {id} = useParams();
    const todos = useSelector((state)=>state.todos);
    const dispatch = useDispatch();

    const todo = todos.find((todo=>todo.id===id));
    const {isCompleted} = todo;
    useEffect(()=>{
        if(todo){
            setTitle(todo.title);
            setDescription(todo.description);
        }
    },[todo]);

    const updateTitle = (e) =>{
        setTitle(e.target.value);
    }

    const updateDescription = (e) => {
        setDescription(e.target.value);
    }

    const navigate = useNavigate();
    const onUpdateClick = () => {
        dispatch(updateTodo(id,{title: title, description: description}))
        navigate("/dashboard");
    }

    return (
        <>
        <Navbar/>
        <div className="relative mt-16 ml-28 mr-28">
        <Link to="/dashboard" className="text-blue-600 underline">←Back</Link>
        <div className="mt-4">Update Todo</div>
            <form className="mt-12">
                <div>
                <label htmlFor="title" className="ml-28 ">Title</label><br/>
                <input type="text" placeholder="Enter title" id="title" className="rounded-sm ml-28 px-96 py-4 border border-black text-left" value={title} onChange={updateTitle}/>
                </div>
                <br/>
                <div>
                <label htmlFor="description" className="ml-28 ">Description</label><br/>
                <input type="text" placeholder="Enter description" id="description" className="rounded-sm ml-28 px-96 py-4 border border-black text-left" value={description} onChange={updateDescription}/>
                </div>
                <div className="flex justify-end mt-4 mr-20">
                { !isCompleted && <button type="submit" className="bg-blue-500 px-8 py-1 text-white rounded-md" onClick={onUpdateClick}>Update</button>}
                </div>
            </form>
        </div>
        <Footer/>
        </>
    )
}