import React from "react";
import "./App.css";
import "./style.css";
import { AppRoutes } from "./Routing/AppRoutes";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NavBar } from "./Component/Header/common/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <AppRoutes />
      <ToastContainer />
     
    </>
  );
}

export default App;
