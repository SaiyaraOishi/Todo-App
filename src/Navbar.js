import React,{useContext,useEffect} from "react";
import "./Navbar.css";
import {UserContext} from "./Context.js";
import {useNavigate,Link} from "react-router-dom";

function Navbar(){

    const {name,logout}=useContext(UserContext);
    const navigate=useNavigate();

    useEffect(()=>{
        if(!name){
            navigate("/");
        }
    });

    return(
        <>
        <div className="main">
            <h3 className="body">Simple ToDo</h3>
            <h4 className="body-name">{name}</h4>
            <Link to="/" className="link" onClick={logout}>Logout</Link>
        </div>
        
        </>
    );
}

export default Navbar;