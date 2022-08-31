import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/user/actions";
import { todoLogout } from "../redux/todos/actions";

export default function Navbar() {

    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { name } = user;

    const handleLogoutClick = () => {
        dispatch(logout());
        dispatch(todoLogout());
        navigate("/");
    }

    return (
        <>
            <div className="flex relative mt-16 ml-28 mr-28">
                <div className="font-bold text-lg">SimpleToDo</div>
                <div className="ml-auto font-bold">{name}</div>
                <div to="/" className="ml-8 text-blue-600 underline cursor-pointer" onClick={handleLogoutClick}>Logout</div>
            </div>
        </>
    )
}