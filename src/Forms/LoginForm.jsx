import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';



const LoginForm = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const navigate = useNavigate();

/*  const userName = localStorage.getItem("Email")
    ? localStorage.getItem("Email")
    : "admin@admin.com";
  const userPassword = localStorage.getItem("Password")
    ? localStorage.getItem("Password")
    : "admin";*/

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleApi = (e) => {
    e.preventDefault();

   /* if (Email === userName && Password === userPassword) {
      toast.success("Login success");
      navigate("/dashboard");
    } else {
      toast.error("Invalid Email OR password");
    }*/

    axios.post("https://reqres.in/api/login", {
        email: Email,
        password: Password,
      })
      .then(() => {
        toast.success("Login success");
      navigate("/dashboard");
      // alert(result)
      })
      .catch((error) => {
        // navigate("/Dashboard");
        // alert("Login failed");
        // eslint-disable-next-line no-const-assign
        // document.getElementById("fail").innerHTML = "Login failed"
        toast.error("Invalid Email OR password");

      });
  };

  return (
    <>
      <div className="moksh">
        <form>
          Email :{" "}
          <input
            type="text"
            value={Email}
            onChange={(e) => handleEmail(e)}
            style={{ marginLeft: "33px" }}
          />{" "}
          <br />
          Password :{" "}
          <input type="text" value={Password} onChange={handlePassword} />{" "}
          <br />
          <div>
            <button onClick={(e) => handleApi(e)}>Login</button>
          </div>
          <div>
            <span id="fail"></span>
            <a href="*" style={{color:"blue",fontWeight:"bold",fontSize:9,textAlign:"right"}}>forgot password</a>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
