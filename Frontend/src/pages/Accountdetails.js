import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/AccountDetails.css';

const Accountdetails = () => {
  const [userdata, setuserdata] = useState(JSON.parse(localStorage.getItem("user_id")));

  return (
    <div className='account-details-container w-50 mx-auto '>

      <div className='breadcrumb-nav rounded shadow '>
        <div className='breadcrumb-inner'>
          <Link className='nav-link' to="/">Home</Link>
          <span className='breadcrumb-divider'>/</span>
          <span className='breadcrumb-current'>My Profile</span>
        </div>
      </div>


      <div className='profile-info-box shadow'>
        <h2 className='profile-info-title'>Profile Info</h2>

        {userdata && (
          <div className='profile-info-content '>
         
            <div className='profile-info-column w-50 mx-auto'>
              <label className='profile-info-label'>First Name</label>
              <div className='profile-info-field'>{userdata.data.first_name}</div>

              <label className='profile-info-label'>Last Name</label>
              <div className='profile-info-field'>{userdata.data.last_name}</div>
            </div>

          
            <div className='profile-info-column w-50 mx-auto'>
            <label className='profile-info-label'>gmail </label>
            <div className='profile-info-field'>{userdata.data.gmail}</div>
             

              <label className='profile-info-label'>Mobile Number</label>
              <div className='profile-info-field'>{userdata.data.phone}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Accountdetails;
