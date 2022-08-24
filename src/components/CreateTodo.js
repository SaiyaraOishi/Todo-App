import Footer from "./Footer";
import Navbar from "./Navbar";
import {Link,useNavigate} from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import {addTodo} from "../redux/todos/actions";

export default function CreateTodo(){

    const [title,setTitle]=useState("");
    const [description,setDescription]=useState("");
    const dispatch = useDispatch();

    const navigate = useNavigate();
    const onCreateClick = () => {
        const current = new Date();
        const date = `${current.getDate()} ${current.toLocaleString("default", {
        month: "short",
      })}, ${current.getFullYear()}`;
        dispatch(addTodo({title:title, description:description, isCompleted: false, createdAt: date}));
        navigate("/dashboard",{replace:true});
    }

    const handleTitleChange = (e) =>{
        setTitle(e.target.value);
        console.log(e.target.value)
    }

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
        console.log(e.target.value)
    }

    return (
        <>
        <Navbar/>
        <div className="relative mt-16 ml-28 mr-28">
        <Link to="/dashboard" className="text-blue-600 underline">←Back</Link>
        <div className="mt-4">Create new Todo</div>
            <form className="mt-12">
                <div>
                <label htmlFor="title" className="ml-28 ">Title</label><br/>
                <input type="text" placeholder="Enter title" id="title" className="rounded-sm ml-28 px-96 py-4 border border-black text-left" value={title} onChange={handleTitleChange}/>
                </div>
                <br/>
                <div>
                <label htmlFor="description" className="ml-28 ">Description</label><br/>
                <input type="text" placeholder="Enter description" id="description" className="rounded-sm ml-28 px-96 py-4 border border-black text-left" value={description} onChange={handleDescriptionChange}/>
                </div>
                <div className="flex justify-end mt-4 mr-20">
                <button type="submit" className="bg-blue-500 px-8 py-1 text-white rounded-md" onClick={onCreateClick}>Create</button>
                </div>
            </form>
        </div>
        <Footer/>
        </>
    )
}