import Footer from "./Footer";
import {useNavigate} from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {addName} from "../redux/user/actions";

export default function Login(){

    const [name,setName]=useState("");
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const onNextClick = () =>{
        dispatch(addName(name));
        navigate("/dashboard");
    }

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    return (
        <>
        <div className="text-center mt-40 font-bold text-xl">Simple ToDo</div>
        <div className="flex justify-center mt-28">
        <input className="rounded-md border border-black text-center px-4 py-2" type="text" placeholder="Enter name" id="name" value={name} onChange={handleNameChange}/>
        </div>
        <div className="flex justify-center mt-28">
        <button type="submit" className="bg-blue-500 px-4 py-2 text-white rounded-md" onClick={onNextClick}>Next</button>
        </div>
        <Footer/>
        </>
    )
}