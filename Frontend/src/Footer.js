import React from 'react'

import "./css/style.css"
import "bootstrap/dist/css/bootstrap.min.css"
import bg from './images/bg.webp'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <div>
      <div className='bgimg mt-5'>
        <img  src={bg}></img>
      <div className='category '>
      <div className='box-main border  mx-auto '>
      <div className=' inbox d-flex '> 
          <div className='inner-box  '>
            <h6  >Top Bus Routes</h6><hr className='mt-0'></hr>
            <ul>
           <li>Hyderabad to Bangalore Bus</li>
          <li>Vijayawada to Hyderabad Bus</li>
          <li>Chennai to Madurai Bus</li>
          <li>Hyderabad to Bangalore Bus</li>
          <li>Chennai to Madurai Bus</li>
          </ul> 
          </div>
         
          <div className='inner-box '>
          <h6  >Buses from Top cities</h6><hr className='mt-0'></hr>
          <ul>
            <li>Vijayawada to Hyderabad Bus</li>
          <li>Hyderabad to Bangalore Bus</li>
          <li>Chennai to Madurai Bus</li>
          <li>Hyderabad to Bangalore Bus</li>
          <li>Chennai to Madurai Bus</li>
          </ul>

          </div>
          <div className='inner-box '>
          <h6  >Top RTC Buses</h6><hr className='mt-0'></hr>
          <ul>          <li>Chennai to Madurai Bus</li>
          <li>Vijayawada to Hyderabad Bus</li>
          <li>Chennai to Madurai Bus</li>
          <li>Hyderabad to Bangalore Bus</li>
          <li>Hyderabad to Bangalore Bus</li></ul>

          </div>
          <div className='inner-box '>
          <h6  >Top Bus Services</h6><hr className='mt-0'></hr>
          <ul>
          <li>Hyderabad to Bangalore Bus</li>
          <li>Chennai to Madurai Bus</li>
          <li>Chennai to Madurai Bus</li>
          <li>Hyderabad to Bangalore Bus</li>
          <li>Vijayawada to Hyderabad Bus</li>
          </ul>
          </div>
          </div>
      </div>
      <div className='red-box text-white'>
          <Link className='nav-link' to="/" > <a className=' nav-link' href="#"> Home </a> </Link>
          <Link className='nav-link'  to="/Offer"  > <a className=' nav-link' href="#"> Offers </a> </Link>
         
          <Link className='nav-link' to="/ContactPage">  <a className=' nav-link' href="#">Contact  </a></Link>
          <Link className='nav-link'> <a className=' nav-link' href="#"> Terms and Conditions </a></Link>
      </div>
      <div className='red-box2 text-white'>
      <a className=' nav-link' href="#"> APMSBus | ixigo | ConfirmTkt </a>
      <a className=' nav-link' href="#">Copyright @ Le Travenues Technology Ltd. All Rights Reserved.</a>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Footer