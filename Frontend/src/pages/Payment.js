import React from 'react';
import '../css/style.css';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
function Payment() {
  return (<div>
     <h1 className='d-flex justify-content-center'>Payment</h1>
    <div className="container d-flex">
      <div className=' col-7 m-auto border rounded-3 shadow p-3'>
       <strong> Choose Payment Method Below</strong><p></p>
       <div className='d-flex flex-wrap mb-4'>
        <div className=' col-3 ms-3 p-1 border rounded-3 shadow'>
            <img src='https://static.vecteezy.com/system/resources/previews/006/609/869/original/credit-cards-flat-icon-of-atm-card-vector.jpg' width="100%"></img>
            <p>Credit/Debit card</p>
            </div><div className=' col-3 p-1 ms-3 border rounded-3 shadow'>
            <img src='https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/visa-512.png' width="100%"></img>
            <p>VISA card</p>
        </div>
        <div className=' col-3 p-1 ms-3 border rounded-3 shadow'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq0UtxHPJ06tS_AUUERgMxeaADDZxVsYVwkw&s' width="100%"></img>
            <p>Master card</p>
        </div>
        </div>
       <div className='d-flex mb-3'>
       <div className='w-100'>
       <strong>Full Name</strong><input className='w-100' type='text' placeholder='Enter Name'></input>
       <strong>Billing Address</strong><input className='w-100' type='text' placeholder='Enter Email ID'></input>
       <div className='d-flex'>
        <div><strong>City </strong><input className='w-100' type='text' placeholder='Enter City'></input></div>
        <div className='ms-2'><strong>ZIP Code</strong><input className='w-100' type='number' placeholder='Enter code'></input></div></div>
        <strong>State</strong>
    <Dropdown className='border'>
      <Dropdown.Toggle variant="light" className='w-100'>
        -select-
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Andhra Pradesh</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Telangana</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
      </div>
      <div className='w-100 ms-5'>
        <strong>Card Holder Name</strong><input className='w-100' type='text' placeholder='Enter Holder Name'></input>
        <strong>Card Number</strong><input className='w-100' type='number' placeholder='Enter Number'></input>
        <div className='d-flex'>
        <div><strong>Exp.Month</strong><input className='w-100' type='number' placeholder='XX'></input></div>
        <div className='ms-2'><strong>Exp.Year</strong><input className='w-100' type='number' placeholder='XXXX'></input></div></div>
        <strong>CVV Number</strong><input className='w-100' type='Number' placeholder='XXX'></input>
      </div>
      </div>
      <strong>Choose UPI Payment Method Below</strong><p></p>
          <div className='d-flex'>
            <div className='p-3 border rounded-2 shadow'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyVO9LUWF81Ov6LZR50eDNu5rNFCpkn0LwYQ&s' height="30px"></img>
            </div>
            <div className='p-3 ms-3 border rounded-2 shadow'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo4x8kSTmPUq4PFzl4HNT0gObFuEhivHOFYg&s' height="30px"></img>
            </div>
            <div className='p-2 ms-3 border rounded-2 shadow'>
            <img src='https://play-lh.googleusercontent.com/2tH3ybpe3Tb5y2vamr4s0IJ-ffW83ouOFl4qDeZ8qvKdil5OjMN5_kiQviniaIBz420=w240-h480-rw' height="50px"></img>
            </div>
            <div className='p-3 ms-3 border rounded-2 shadow'>
            <img src='https://bharatpe.com/wp-content/uploads/2023/05/group-24@3x.png' height="30px"></img>
            </div>
            <div className='p-2 ms-3 border rounded-2 shadow'>
            <img src='https://cdn.iconscout.com/icon/free/png-256/free-upi-2085056-1747946.png' height="50px"></img>
            </div>
            <div className=' ms-5 w-25 pt-3'>
               <Link to="/TicketDisplay"> <button className="pay-btn " >Pay</button></Link>
            </div>
            </div>
            </div>
        </div>
      </div>
  );
}

export default Payment;