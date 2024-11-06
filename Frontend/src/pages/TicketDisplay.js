import React, { useState, useEffect } from 'react';
import '../css/TicketDisplay.css'; 
import img from '../images/log.png'

const TicketDisplay = () => {
  const [seatNumbers, setSeatNumbers] = useState([]);
  const [user, setUser] = useState({});
  const [busData, setBusData] = useState([]);
  const [ticket, setTicket] = useState({});
  const [seatCount, setSeatCount] = useState(0);
  const [Cost, setCost] = useState(localStorage.getItem("famount"));
  const [busId, setBusId] = useState(localStorage.getItem("busidd"));

  useEffect(() => {
  
    const storedSeats = localStorage.getItem("selectedSeats");
    const storedUser = JSON.parse(localStorage.getItem("user_id")) || {};
    const storedBusData = JSON.parse(localStorage.getItem("busesdetailes")) || [];
    
   
    const seatsArray = storedSeats ? storedSeats.split(',') : [];
    setSeatNumbers(seatsArray);
    setSeatCount(seatsArray.length); 
    

   
    setUser(storedUser);
    setBusData(storedBusData);
    

    if (storedBusData.length > 0) {
      setTicket(storedBusData[0]); 
    }
  }, []);

  return (
    <div className="ticket-display mt-3">
        <img className='imglogo ' src={img}></img>
      <div className="ticket-header">
        <h2>Your Bus Ticket</h2>
      </div>
      <div className="ticket-content">
      
      <div className="ticket-detail">
          <span className="label">Bus Id:</span>
          <span className="value ">{busId}</span>
        </div>
        
        
        <div className="ticket-detail">
          <span className="label">Seat Number:</span>
          <span className="value ">{seatNumbers.join(', ')}</span>
        </div>
        <div className="ticket-detail">
          <span className="label">Number of Seats Selected:</span>
          <span className="value ">{seatCount}</span>
        </div>
        {ticket && (
          <>
            <div className="ticket-detail">
              <span className="label">Departure:</span>
              <span className="value ">{ticket.source}</span>
            </div>
            <div className="ticket-detail">
              <span className="label">Destination:</span>
              <span className="value ">{ticket.destination}</span>
            </div>
          </>
        )}
        {user && (
          <>
            <div className="ticket-detail">
              <span className="label">Passenger Name:</span>
              <span className="value ">{user.data ? user.data.first_name : 'N/A'} {user.data ? user.data.last_name : 'N/A'}</span>
            </div>
            </>
        )}
            <div className="ticket-detail">
              <span className="label">Amount:</span>
              <span className="value ">RS. {Cost}</span>
            </div>

      </div>
      <div className="ticket-footer">
        <button className="print-btn">Print Ticket</button>
      </div>
    </div>
  );
};

export default TicketDisplay;
