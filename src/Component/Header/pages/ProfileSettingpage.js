
import React from 'react'
import { useState } from 'react'

const Profileinfo=()=> {
  const [detail, setDetail] = useState(JSON.parse(localStorage.getItem('profile_setting')))
  const handleChange = (e) => {
    setDetail({
      ...detail,
      [e.target.name]: e.target.value,
    });
    e.preventDefault()
  }
  const onSubmit = (e) => {
    e.preventDefault()

    localStorage.setItem('profile_setting', JSON.stringify({
      firstname: detail.firstname, surname: detail.surname, phone: detail.phone, address: detail.address, email: detail.email, education: detail.education, country: detail.country, state: detail.state, city: detail.city
    }));
    alert("submitted")
    console.log("submitted", detail)
  }
  console.log("submitted", detail);
 

  return (
    <div className='formsetting'>

      <h2 className='formheading'>PROFILE SETTING</h2>

      <form className='forminput'>

       <div> Name: <input type="text" placeholder='First name' name='firstname' value={detail?.firstname} onChange={handleChange} />
       </div>


       <div>
        Surname: <input type="text" placeholder='Surname' name='surname' value={detail?.surname} onChange={handleChange} />
        </div>
         
        <div>
        Phone Number:<input type="text" placeholder='Enter your phone number' name='phone' value={detail?.phone} onChange={handleChange} />
        </div>


        <div>
        Address:<input type="text" placeholder='Enter address' name='address' value={detail?.address} onChange={handleChange} />
        </div>

        <div>
        Email Id:<input type="text" placeholder='Enter email id' name='email' value={detail?.email} onChange={handleChange} />
        </div>

        <div>
        Education:<input type="text" placeholder='Education' name='education' value={detail?.education} onChange={handleChange} />
        </div>

        <div>
        Country:<input type="text" placeholder='Country' name='country' value={detail?.country} onChange={handleChange} />
        </div>


        <div>
        State:<input type="text" placeholder='State' name='state' value={detail?.state} onChange={handleChange} />
        </div>


        <div>
        city:<input type="text" placeholder='city' name='city' value={detail?.city} onChange={handleChange} />
        </div>

        
        <button className='btn' type='submit' onClick={onSubmit}>Save Profile</button>
        
      </form>
    </div>
  )
}

export default Profileinfo;
