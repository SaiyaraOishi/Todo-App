import React from "react";
import Navbar from "./Navbar.js";
import Footer from "./Footer.js";
import "./Dashboard.css";
import {Link} from "react-router-dom";
import TodoList from "./TodoList.js";

function Dashboard(){
return(
    <>
    <Navbar/>
    <br/><br/>
    <div className="main-dashboard">
    <h4 className="dashboard">My ToDos</h4>
    <Link to="/createtodo" className="link-dashboard">Create new</Link>
    <div>
        <TodoList/>
    </div>
    </div>
    <Footer/>
    </>
);
}

export default Dashboard;