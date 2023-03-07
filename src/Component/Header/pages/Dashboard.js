import React from 'react'
import { useState } from 'react'
import ProfileSettingpage from './ProfileSettingpage'
const Dashboard = () => {
  const [set,setflag] = useState(true)

  return (
    <div>
    {set && <ProfileSettingpage/>}
    </div>
  )
}

export default Dashboard
