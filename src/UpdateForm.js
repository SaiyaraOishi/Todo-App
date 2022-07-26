import React,{useState} from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import {Link} from "react-router-dom";


export default function UpdateForm(){

    const [title,setTitle]=useState("");
    const [description,setDescription]=useState("");

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
                <input className="input-todo" type="text" placeholder="Enter title here" name="title" id="title" value={title} />
            </div>
            {/* <div className="error-form">{!titleIsValid && <p>*Title is required</p>}</div> */}
            <br/>
            <br/>
            <div>
                <label htmlFor="description">Description</label><br/>
                <input className="input-todo" type="text" placeholder="Enter description here" name="description" id="description" value={description} />
            </div>
            {/* <div className="error-form">{!descriptionIsValid && <p>*Description is required</p>}</div> */}
            <br/>
            <button type="button" className='button-todo'>Create</button><br />
            </form>
        </div>
        <Footer/>
        </>
    )
}