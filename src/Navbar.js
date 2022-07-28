import React,{useContext,useEffect} from "react";
import "./Navbar.css";
import {UserContext} from "./Context.js";
import {useNavigate,Link} from "react-router-dom";

function Navbar(){

    const {name}=useContext(UserContext);
    const navigate=useNavigate();

    useEffect(()=>{
        if(!name){
            navigate("/");
        }
    });

    // const handleLogoutClick = () =>{
    //     localStorage.removeItem("user");
    //     localStorage.removeItem("todos");
    // }

    return(
        <>
        <div className="main">
            <h3 className="body">Simple ToDo</h3>
            <h4 className="body-name">{name}</h4>
            <Link to="/">Logout</Link>
        </div>
        
        </>
    );
}

export default Navbar;