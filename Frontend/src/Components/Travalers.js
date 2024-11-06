import React, { useState, useEffect } from 'react';
import PersonIcon from '@mui/icons-material/Person';
import '../css/style.css';

const Travalers = ({ isAc, isSleeper }) => {
  const userid = localStorage.getItem("user_id");
  
  
  const [busData, setBusData] = useState(JSON.parse(localStorage.getItem("busesdetailes")) || []);
  const [filteredBusData, setFilteredBusData] = useState([]);  
  
  
  const handleShowSeats = (busId) => {
    if (userid && userid !== "null") {
      localStorage.setItem("selectedBusId", busId);
      window.location.replace("/BusSeats");
    } else {
      alert("Login is Required");
    }
  };

  
  useEffect(() => {
    const filteredData = busData.filter((bus) => {
      const matchesAc = isAc === 1 ? bus.type === "AC" : bus.type === "Non-AC";
      const matchesSleeper = isSleeper === 1 ? bus.seattype === "Sleeper" : bus.seattype === "Seating";
      
      return matchesAc && matchesSleeper;
    });

    setFilteredBusData(filteredData);  
  }, [busData, isAc, isSleeper]);  

  return (
    <div className='rof111 flex-wrap'>
      {filteredBusData.length > 0 ? (
        filteredBusData.map((item) => (
          <div className='rof11 border' key={item.Busid}>
            <div className='rof11s d-flex justify-content-between p-3'>
              <div>
                <h5 className='mb-0'>{item.travalers}</h5>
                <p className='mt-0 fw-lighter'>{item.type}</p>
                <p className='mb-0 fw-lighter'>{item.seattype}</p>
                <div className='rating-box mx-auto mt-3 rounded d-flex'>
                  <div className='inner-rating border text-white rounded bg-success'>
                    <p>⭐ 3.7</p>
                  </div>
                  <div className='inner-rating border rounded d-flex'>
                    <PersonIcon className='w-25' />
                    <p className='w-75 '>50 </p>
                  </div>
                </div>
               
              </div>
              <div className='text-center mt-auto mb-auto'>
                <p>{item.date}</p>
                <h1 className='mt-0'>{item.starttime}</h1>
                <p>{item.source}</p>
              </div>
              <div className=' mt-auto  mb-auto'>
              <div className='border   mt-auto mb-2'>
                <a href='#' className=' ms-3 nav-link'>{item.duration}</a>
              </div>
              <h5>Duration</h5>
              </div>
              
              <div className='text-center mt-auto mb-auto'>
                <p>{item.date}</p>
                <h1>{item.endtime}</h1>
                <p>{item.destination}</p>
              </div>
              <div className='rof22 p-3'>
                <p className='mb-0'>Starting at</p>
                <s><p className='mb-0'>Rs.1500</p></s>
                <h4 className='mb-0'>Rs{item.seatcost}</h4>
                <h6 className='text-success'>Save ₹{1500 - item.seatcost}</h6>

                <button
                  className='rounded bg-danger text-white mx-auto'
                  onClick={() => handleShowSeats(item._id)}
                >
                  Show seats
                </button>
              </div>
            </div>
            <div className='rof11s2 border'>
              <p className='text-danger ms-3'>Save min ₹200 with Flash Offer!</p>
            </div>
          </div>
        ))
      ) : (
        <div className='w-100 h-100 mx-auto'>
        <h1 className='mt-5'>No buses available matching the filters.</h1>
        </div>
      )}
    </div>
  );
};

export default Travalers;
