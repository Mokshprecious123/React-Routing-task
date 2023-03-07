import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignupForm = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
 const navigate = useNavigate();
 

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleApi = (e) => {
    e.preventDefault();
    axios
      .post("https://reqres.in/api/register", {// import LoginForm from "../Component/LoginForm";
      })
      .then(() => {
      navigate("/dashboard");
      // alert(result)
      })
      .catch((error) => {
        // navigate("/Dashboard");
        // alert("Login failed");
        document.getElementById("fail").innerHTML = "signup failed"
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
            onChange={handleEmail}
            style={{ marginLeft: "33px" }}
          />{" "}
          <br />
          Password :{" "}
          <input type="text" value={Password} onChange={handlePassword} />{" "}
          <br />
          <div>
          <button onClick={(e) => handleApi(e)}>signup</button>
          </div>
          <div>
          <span id="fail"></span>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignupForm;