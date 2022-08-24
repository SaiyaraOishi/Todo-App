import {Link} from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar(){

    const user = useSelector((state)=> state.user);

    const {name} = user;

    return (
        <>
        <div className="flex relative mt-16 ml-28 mr-28">
            <div className="font-bold text-lg">SimpleToDo</div>
            <div className="ml-auto font-bold">{name}</div>
            <Link to="/" className="ml-8 text-blue-600 underline">Logout</Link>
        </div>
        </>
    )
}