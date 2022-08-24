import Footer from "./Footer";
import Navbar from "./Navbar";
import {Link} from "react-router-dom";
import Todolist from "./Todolist";

export default function Dashboard(){
    return(
        <>
        <Navbar/>
        <div className="flex relative mt-16 ml-48 mr-48">
            <div className="font-bold">My Todos</div>
            <Link to="/createtodo" className="text-blue-600 underline ml-auto">Create New</Link>
        </div>
        <div className="mt-8">
            <Todolist/>
        </div>
        <Footer/>
        </>
    )
}