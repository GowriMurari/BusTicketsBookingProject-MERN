import React from 'react';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';

const SearchBar = () => {
  const [start, Setstart] = useState(null);
  const [end, Setend] = useState(null);
  const [date, Setdate] = useState(''); 

  const busesdetails = localStorage.getItem('busesdetailes');


  const getTodayDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };


  const getTomorrowDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1); 
    return tomorrow.toISOString().split('T')[0];
  };

  const Busdetails=async()=>{

    
    
   
    const lstart = start ? start.toLowerCase() : '';
    const lend = end ? end.toLowerCase() : '';
  
    const data=new FormData()
    data.append("start",start)
    data.append("end",end)
    data.append("date",date)
   const response=await axios.get("http://localhost:8003/buses?start="+lstart+"&end="+lend+"&date="+date,data)
   if(response)
   {
    if(response.data.status==='success'){
    
      localStorage.setItem("busesdetailes",JSON.stringify(response.data.data))
      window.location.replace("/booking")
      console.log(response.data )
  
    }
    else{
     toast.error(response.data.message)
      
    }
  
   }
   
    
  }
  return (
    <>
      <div className='searchbar'>
        <div className='searchbarin container b shadow pe-5'>
          <form className='container d-flex'>
            <div className='p-2 col-3 boder d-flex rounded 2 bg-light'>
              <div className='mx-auto'>
                <input
                  onChange={(event) => Setstart(event.target.value)}
                  className='btn'
                  type='text'
                  placeholder='From station'
                  required
                />
              </div>
            </div>
            <button className='btn btn-secondary p-2 ms-3' type='button'>
              <SwapHorizIcon />
            </button>
            <div className='p-2 col-3 boder d-flex ms-3 rounded 2 bg-light'>
              <LocationOnIcon className='mt-2 mx-auto' />
              <div className='mx-auto'>
                <input
                  onChange={(event) => Setend(event.target.value)}
                  className='btn'
                  type='text'
                  placeholder='To Station'
                  required
                />
              </div>
            </div>
            <div className='p-2 col-4 boder d-flex rounded 2 bg-light ms-2 justify-content-around'>
              <div>
                <input
                  onChange={(event) => Setdate(event.target.value)}
                  className='btn hovering'
                  type='date'
                  value={date} 
                />
              </div>
              <button
                className='btn btn-secondary'
                type='button'
                onClick={() => Setdate(getTodayDate())} 
              >
                Today
              </button>
              <button
                className='btn btn-secondary ms-1 me-4'
                type='button'
                onClick={() => Setdate(getTomorrowDate())} 
              >
                Tomorrow
              </button>
            </div>
            <Link>
              <button
                onClick={() => {
                  Busdetails();
                }}
                type='submit'
                className='btn btn-danger ms-4 ps-5 pe-5 mt-2'
              >
                <h5>Search</h5>
              </button>
            </Link>
          </form>
        </div>
      </div>
      <ToastContainer position='top-center' />
    </>
  );
};

export default SearchBar;
