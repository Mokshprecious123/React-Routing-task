import React from "react";
const ProfileSettingpage = () => {


  const HandleTask = (e)=>{
    e.preventDefault()
   console.log("ckicked");
  }
  return <>
  <div >
  <button onClick={HandleTask}>PROFILE SETTING</button>
  </div>
  </>;
};

export default ProfileSettingpage;
