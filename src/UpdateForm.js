import React,{useContext, useEffect, useState} from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import {Link,useNavigate,useParams} from "react-router-dom";
import {UserContext} from "./Context.js";


export default function UpdateForm(){

    const [title,setTitle]=useState("");
    const [description,setDescription]=useState("");
    const {id} = useParams();
    const {getSingleTodo,updateTodo}=useContext(UserContext);

    const navigate=useNavigate();
    const handleUpdateClick = () =>{
        updateTodo(id,{title: title,description: description,date: Date(Date.now())});
        navigate("/dashboard",{replace:true});
    }

    const handleCancelClick =( )=>{
        navigate("/dashboard");
    }
    const todo=getSingleTodo(id);
    useEffect(()=>{
        if(todo){
            setTitle(todo.title);
            setDescription(todo.description);
        }

    },[todo]);
    

    const handleTitleChange =(e)=>{
        setTitle(e.target.value);
    }
    const handleDescChange =(e)=>{
        setDescription(e.target.value);
    }

    return (
        <>
        <Navbar/>
        <br/><br/>
        <div className="form">
            <Link to="/dashboard" className="link">←Back</Link>
            <p>Create new ToDo</p>
            <br/><br/>
            <form className="form-input">
            <div>
                <label htmlFor="title">Title</label><br/>
                <input className="input-todo" type="text" placeholder="Enter title here" name="title" id="title" value={title} onChange={handleTitleChange}/>
            </div>
            <br/>
            <br/>
            <div>
                <label htmlFor="description">Description</label><br/>
                <input className="input-todo" type="text" placeholder="Enter description here" name="description" id="description" value={description} onChange={handleDescChange}/>
            </div>
            <br/>
            <button type="button" className='button-todo'  onClick={handleCancelClick}>Cancel</button>
            <button type="button" className='button-todo' onClick={handleUpdateClick}>Update</button><br />
            </form>
        </div>
        <Footer/>
        </>
    )
}