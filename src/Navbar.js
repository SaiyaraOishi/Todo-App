import React,{useContext,useEffect} from "react";
import "./Navbar.css";
import {UserContext} from "./Context.js";

function Navbar(){

    const {name}=useContext(UserContext);

    return(
        <>
        <div className="main">
            <h3 className="body">Simple ToDo</h3>
            <h4 className="body-name">{name}</h4>
            <a href="/" className="link">Logout</a>
        </div>
        
        </>
    );
}

export default Navbar;