import React,{useContext, useEffect, useState} from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import {Link,useNavigate,useParams} from "react-router-dom";
import {UserContext} from "./Context.js";


export default function UpdateForm(){

    const [title,setTitle]=useState("");
    const [description,setDescription]=useState("");
    const {id} = useParams();
    const {todolist}=useContext(UserContext);

    const navigate=useNavigate();
    const handleUpdateClick = () =>{
        navigate("/dashboard");
    }

    const handleCancelClick =( )=>{
        navigate("/dashboard");
    }

    // useEffect(()=>{
    const todo=todolist.find(todo=>todo.id===id);
    console.log(todo);
    // console.log(todo.title);
    // setTitle(todo.title);
    // console.log(title);
    // setDescription(todo.description);
    // },[]);

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
                <input className="input-todo" type="text" placeholder="Enter title here" name="title" id="title" />
            </div>
            {/* <div className="error-form">{!titleIsValid && <p>*Title is required</p>}</div> */}
            <br/>
            <br/>
            <div>
                <label htmlFor="description">Description</label><br/>
                <input className="input-todo" type="text" placeholder="Enter description here" name="description" id="description" />
            </div>
            {/* <div className="error-form">{!descriptionIsValid && <p>*Description is required</p>}</div> */}
            <br/>
            <button type="button" className='button-todo'  onClick={handleCancelClick}>Cancel</button>
            <button type="button" className='button-todo' onClick={handleUpdateClick}>Update</button><br />
            </form>
        </div>
        <Footer/>
        </>
    )
}