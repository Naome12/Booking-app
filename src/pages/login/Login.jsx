import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./login.css";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });


  const navigate = useNavigate()

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
   
    try {
      const res = await axios.post("/auth/login", credentials);
    
      navigate("/")
    } catch (err) {
    console.log(err);
    }
  };


  return (
    <div className="login">
      <div className="lContainer">
        <input
          type="text"
          placeholder="username"
          id="username"
          onChange={handleChange}
          className="lInput"
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          onChange={handleChange}
          className="lInput"
        />
        <button  onClick={handleClick} className="lButton">
          Login
        </button>
        {<span>{}</span>}
      </div>
    </div>
  );
};

export default Login;