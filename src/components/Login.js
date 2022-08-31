import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
// import { useState } from "react";
import { useDispatch } from "react-redux";
import { addName } from "../redux/user/actions";
import { useFormik } from "formik";

const initialValues = {
    name: ""
};

const validate = values => {
    let errors = {};

    if (!values.name) {
        errors.name = "*Name is required";
    }

    return errors;
}

export default function Login() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues,
        validate,
        onSubmit: values => {
            dispatch(addName(values.name));
            navigate("/dashboard");
        }
    });

    // const [name, setName] = useState("");

    // const formIsValid = name.trim().length > 0;

    // const onNextClick = () => {
    //         dispatch(addName(formik.values.name));
    //         navigate("/dashboard");
    // }

    // const handleNameChange = (e) => {
    //     setName(e.target.value);
    // }

    return (
        <>
            <div className="text-center mt-40 font-bold text-xl">Simple ToDo</div>
            <form onSubmit={formik.handleSubmit}>
                <div className="flex justify-center mt-28">
                    <input className="rounded-md border border-black text-center px-4 py-2" type="text" placeholder="Enter name" id="name" value={formik.values.name} onChange={formik.handleChange} />
                </div>
                {formik.errors.name ? <div className="text-red-800 text-center">{formik.errors.name}</div> : null}
                {/* <div className="text-red-800 text-center">{!formIsValid && <p>*Name is required</p>}</div> */}
                <div className="flex justify-center mt-28">
                    <button type="submit" className="bg-blue-500 px-4 py-2 text-white rounded-md">Next</button>
                </div>
            </form>
            <Footer />
        </>
    )
}