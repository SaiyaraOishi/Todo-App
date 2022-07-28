import React, { useState, useContext } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./Context";

function Login() {

  const [name, setName] = useState("");
  const {setName:setContextName} = useContext(UserContext);

  const formIsValid=name.trim().length>0;

  const navigate = useNavigate();
  function handleLoginClick() {
    if(formIsValid){
      setContextName(name);
      // localStorage.setItem("user",name);
      navigate("/dashboard");
    }
  }

  const handleNameChange = (event) => {
    setName(event.target.value);
  }



  return (
    <>
      <div className='style'> <br /><br /><br /><br /><h3>Simple ToDo</h3>
        <form>
          <div>
            <input className='input' type="text" placeholder="Your name" name="name" id="name" value={name} onChange={handleNameChange} />
          </div>
          <div className="error">{!formIsValid && <p>*Name is required</p>}</div>
        </form><br /><br />
        <button type="submit" className='button' onClick={handleLoginClick}>Next</button><br />
      </div>
    </>
  );
}

export default Login;