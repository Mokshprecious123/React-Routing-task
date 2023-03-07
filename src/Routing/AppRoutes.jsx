import React from "react";
import { Route, Routes} from "react-router-dom";
import Homepage from "../Component/Header/pages/Homepage"
import Aboutpage from '../Component/Header/pages/Aboutpage';
import Loginpage from '../Component/Header/pages/Loginpage';
import Signuppage from '../Component/Header/pages/Signuppage';
import Dashboard from "../Component/Header/pages/Dashboard";
import ErrorPage from "../Component/Header/pages/ErrorPage"
import ProfileSettingpage from "../Component/Header/pages/ProfileSettingpage";

export const AppRoutes = () => {
  
  return (
    <Routes>
      <Route path="/" element={<Homepage/>}></Route>
      <Route path="/about" element={<Aboutpage/>}></Route>
      <Route path="/login" element={<Loginpage/>}></Route>
      <Route path="/signup" element={<Signuppage/>}></Route>
      <Route path="/dashboard" element={<Dashboard/>}></Route>
      <Route path="/profile" element={<ProfileSettingpage/>}></Route>
      <Route path="*" element={<ErrorPage/>}></Route>
      </Routes>
  );
};
