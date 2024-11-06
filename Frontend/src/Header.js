import React from 'react'
import logo from './images/logo.png'
import offer from './images/offer.png'
import tic from './images/ticket.png'
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import PersonIcon from '@mui/icons-material/Person';
import './App.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import googlelogo from  './images/googlelogo.png'
import { Box, Modal } from '@mui/material';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify'; // Import react-toastify
import 'react-toastify/dist/ReactToastify.css'; // Import react-toastify CSS




function Header() {

const [phone,setphone]=useState(null)
const [password,setpassword]=useState(null)
const [first_name,setfirst_name]=useState(null)
const [last_name,setlast_name]=useState(null)
const [gmail,setgmail]=useState(null)
const [address,setaddress]=useState(null)
const userid=localStorage.getItem("user_id")
const userid1=localStorage.getItem("user_id1")
const userid2=localStorage.getItem("user_id2")




    const style = {
        position: 'absolute' ,
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 900,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        pt: 2,
        px: 4,
        pb: 3,
      };
    const [mdisplay,Changemdisplay]= useState(false)
    const [msdisplay,Changemsdisplay]= useState(false)
    const[userdata,setuserdata]=useState(JSON.parse(localStorage.getItem("user_id")))
   

   
  const signup = async ()=>{

    if(!first_name || !phone || !gmail || !password || !last_name){


      toast.error("Please fill all required fields.");



    }
    else{
       
     
      const data=new FormData()
      data.append("first_name",first_name)
      data.append("last_name",last_name)
      data.append("gmail",gmail)
      data.append("phone",phone)
      data.append("password",password)
      data.append("address",address)
    
      const response=await axios.post("http://localhost:8003/signup?first_name="+first_name+"&last_name="+last_name+"&gmail="+gmail+"&phone="+phone+"&password="+password,data+"&address="+address)
      console.log(response.request)
      if(response){
      
        if(response.data.status==='success')
          {
            toast.success("Now You can Log in");
           window.location.replace("/")
          
            console.log(response)

            
            
           
      }
      else{
        toast.error(response.data.alerting);
      }
    }
  }
  }
  const login = async ()=>{

    if(!phone || !password)
    {
      toast.error("Please fill all required fields.");

    }
    else{
   
    const data=new FormData()
    
    data.append("phone",phone)
    data.append("password",password)
  
    const response=await axios.get("http://localhost:8003/login?phone="+phone+"&password="+password,data)
  
    if(response){
    
      if(response.data.status==='success')
        {
          localStorage.setItem("user_id1",null)
          localStorage.setItem("user_id2","1")
          localStorage.setItem("user_id",JSON.stringify(response.data))
          localStorage.setItem("Loggedin",JSON.stringify("true"))

          console.log(response.data.data)
          toast.success("Login Successfully");
          window.location.replace("/")
          }
    else{
      toast.error("You have to sign up first/Invalid Credentials");
    }
  }
}
}
function logout(){
  localStorage.setItem("user_id",null)
  localStorage.setItem("user_id1","1")
  localStorage.setItem("user_id2",null)
  localStorage.setItem("Loggedin","false")
  const userid =localStorage.getItem("user_id")


     // console.log(userid)
     if(userid){
      if( userid=="null")
        {
          toast.success("Loggedout Successfully");
        window.location.replace("/")
         
        }
      
}

}

  return (<div>    <div className='border shadow'>
        <div className='container'>
            <div className='navbar p-4'>
                <div className='d-flex'><Link to="/"><img src={logo} height="30px" ></img></Link>
                <div className='d-flex text-danger hovering ms-5'>
              <DirectionsBusIcon></DirectionsBusIcon>
                    <div>
                        <Link to="/Booking" className='nav-link'><h5>Buses</h5></Link>
                    </div>
                </div>
                </div>
                <div className='d-flex'>
                <div className='d-flex me-5 hovering'>
              <img src={offer} height="30px"></img>
                    <div>
                        <Link to="/Offer" className='nav-link ' ><h6 className='mt-1'>Offer</h6></Link>
                    </div>
                </div>
                <div className='d-flex me-5 hovering'>
              <img  height="30px"></img>
                    <div>
                       
                    </div>
                </div>
               
                <div className='d-flex text-danger me-5 hovering'>
               
               
                {userid?<div>{userid!=="null"? null:  <PersonIcon></PersonIcon>}</div>:<PersonIcon></PersonIcon>}
                 
                
                   <div>        
                   {userid1?<div>{userid1!=="null"? <Link className='nav-link' onClick={()=>Changemdisplay(!false)}> <h6 className='mt-1'>Login</h6></Link>:null}</div>:<Link className='nav-link' onClick={()=>Changemdisplay(!false)}> <h6 className='mt-1'>Login</h6></Link>}
    
                    </div>
                    </div>
                    <div className='d-flex text-danger me-5 hovering'>
                <PersonIcon></PersonIcon>
                    <div>
                    {userid?<div>{userid!=="null"?<Link className='nav-link' onClick={()=>{logout()}}> <h6 className='mt-1'>Logout</h6></Link>:   <Link className='nav-link' onClick={()=>Changemsdisplay(!false)}> <h6 className='mt-1'>SignUp</h6></Link>}</div>:<Link className='nav-link' onClick={()=>Changemsdisplay(!false)}> <h6 className='mt-1'>signup</h6></Link>}   
  
                    </div><personIcon/>
                </div>
                <div className='d-flex text-danger me-5 hovering'>
                  <div>
                  {userid2?<div>{userid2!=="null"?<Link to="/Account" className='nav-link'> <h6 className='mt-1'>Account Details</h6></Link>:null}</div>:null}
                  </div>
                  </div>
            </div>
        </div>
        </div>
    </div>

 <Modal  open={mdisplay} onClose={()=>Changemdisplay(false)}>


    <Box className="rounded" sx={style}>
    <div className='category-sign' >
      <div className='inner-left'>
        <div className='logoimg mx-auto'>  <img className='w-100'  src={logo} ></img></div>
      
         <div className='mt-1 mb-0'>
        <ul>
          <li><b>APMS Assured</b>
         <p><small> Protect yourself with upto 150% refund incase of service cancellation </small></p></li>
         <li><b>APMS Assured</b>
         <p><small> Protect yourself with upto 150% refund incase of service cancellation </small></p></li>
         <li><b>APMS Assured</b>
         <p><small> Protect yourself with upto 150% refund incase of service cancellation </small></p></li>
        </ul>

         </div>
         <div className='mt-0'>
         <img className='logimg ' src='https://static.abhibus.com/web/media/branding/Login.svg'></img>
         </div>

        </div>
        <div className='inner-right ms-3 ' closeButton>  
            <h5 className='mt-2 ' >Login to APMS Bus</h5> 
           
              <p className='mb-0 fw-lighter'>Enter number to Continue</p>
              <input  onChange={(event)=>setphone(event.target.value)} className='in rounded form-control ' name='phone' placeholder='+91|' type='telno'></input>
             
              <p className='mb-0 mt-4 fw-lighter'>password</p>
              <input onChange={(event)=>setpassword(event.target.value)} className='in rounded form-control' type='password' name='password' placeholder='password'></input>
              <button onClick={()=>{login()}} className='bg-danger text-white rounded form-control mt-4'>Login</button>
           
            
            <p className='text-center mt-4  fw-lighter'>By logging in, I understand & agree to AbhiBus
terms of use
  &  
privacy policy</p>
        </div>
        </div>
      
    </Box>
 </Modal>
 <Modal  open={msdisplay} onClose={()=>Changemsdisplay(false)}>


    <Box className="rounded" sx={style}>
    <div className='category-sign' >
      <div className='inner-left'>
        <div className='logoimg mx-auto'>  <img className='w-100'  src={logo} ></img></div>
      
         <div className='mt-1 mb-0'>
        <ul>
          <li><b>APMS Assured</b>
         <p><small> Protect yourself with upto 150% refund incase of service cancellation </small></p></li>
         <li><b>APMS Assured</b>
         <p><small> Protect yourself with upto 150% refund incase of service cancellation </small></p></li>
         <li><b>APMS Assured</b>
         <p><small> Protect yourself with upto 150% refund incase of service cancellation </small></p></li>
        </ul>

         </div>
         <div className='mt-0'>
         <img className='logimg ' src='https://static.abhibus.com/web/media/branding/Login.svg'></img>
         </div>

        </div>
        <div className='inner-right ms-3 ' closeButton>  
            <h5 className='mt-2 ' >Sign up to APMS Bus</h5> 
          
            <p className='mb-0 fw-lighter'>first Name</p>
            <input onChange={(event)=>setfirst_name(event.target.value)} className='in rounded form-control ' name='first_name' placeholder='first Name' type='text' required></input>

            <p className='mb-0 fw-lighter'>last Name</p>
            <input onChange={(event)=>setlast_name(event.target.value)} className='in rounded form-control ' name='last_name' placeholder='last Name' type='text' required></input>

              <p className='mb-0 fw-lighter'>Phone No:</p>
              <input onChange={(event)=>setphone(event.target.value)} className='in rounded form-control ' name='phone' placeholder='+91|' type='telno' required></input>
             
              <p className='mb-0  fw-lighter'>gmail</p>
              <input onChange={(event)=>setgmail(event.target.value)} className='in rounded form-control' type='email' name='email' placeholder='gmail' required></input>
            

              
              <p className='mb-0 mt-4 fw-lighter'>password</p>
              <input onChange={(event)=>setpassword(event.target.value)} className='in rounded form-control' type='password' name='password' placeholder='password'></input>
              <button onClick={()=>{signup()}} className='bg-danger text-white rounded form-control mt-4'>Signup</button>
          
          
            
            <p className='text-center mt-4  fw-lighter'>By logging in, I understand & agree to AbhiBus
terms of use
  &  
privacy policy</p>
        </div>
        </div>
      
    </Box>
 </Modal>
 <ToastContainer position="top-center" />
    </div>

  )
}

export default Header