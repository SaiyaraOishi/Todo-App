import React, { useContext, useState } from "react";
import "./CreateTodo.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
import {useNavigate,Link} from "react-router-dom";
import {UserContext} from "./Context.js";

function CreateTodo(){

    const [title,setTitle]=useState("");
    const [description,setDescription]=useState("");
    const {setTodo:setContextTodo}=useContext(UserContext);

    const navigate=useNavigate();
    function handleCreateClick(){
        setContextTodo({title:title,description:description});
        navigate("/dashboard",{replace:true});
    }

    const handleTitleChange = (e) =>{
        setTitle(e.target.value);
        console.log(e.target.value);
    }

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
        console.log(e.target.value);
    }

    return(
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
                <input className="input-todo" type="text" placeholder="Enter description here" name="description" id="description" value={description} onChange={handleDescriptionChange}/>
            </div>
            <br/>
            <button type="button" className='button-todo' onClick={handleCreateClick}>Create</button><br />
            </form>
        </div>
        <Footer/>
        </>
    )
}

export default CreateTodo;