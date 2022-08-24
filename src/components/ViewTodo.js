import Navbar from "./Navbar";
import Footer from "./Footer";
import {Link,useParams} from "react-router-dom";
import { useEffect,useState } from "react";
import {useSelector} from "react-redux";

export default function ViewTodo(){
    const [title,setTitle]=useState("");
    const [description,setDescription]=useState("");
    const {id} = useParams();
    const todos = useSelector((state)=>state.todos);

    const todo = todos.find((todo=>todo.id===id));
    useEffect(()=>{
        if(todo){
            setTitle(todo.title);
            setDescription(todo.description);
        }
    },[todo]);

    return (
        <>
        <Navbar/>
        <div className="relative mt-16 ml-28 mr-28">
        <Link to="/dashboard" className="text-blue-600 underline">←Back</Link>
        <div className="mt-4">View Todo</div>
            <form className="mt-12">
                <div>
                <label htmlFor="title" className="ml-28 ">Title</label><br/>
                <input type="text" placeholder="Enter title" id="title" className="rounded-sm ml-28 px-96 py-4 border border-black text-left" value={title}/>
                </div>
                <br/>
                <div>
                <label htmlFor="description" className="ml-28 ">Description</label><br/>
                <input type="text" placeholder="Enter description" id="description" className="rounded-sm ml-28 px-96 py-4 border border-black text-left" value={description}/>
                </div>
            </form>
        </div>
        <Footer/>
        </>
    )

}
