import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../css/BusSeats.css'; 
import { toast } from "react-toastify";

const BusSeats = () => {
  const navigate = useNavigate();
  const [busData, setBusData] = useState(JSON.parse(localStorage.getItem("busesdetailes")) || []);
  const [seatCost, setSeatCost] = useState(0); 
  const [busId, setBusId] = useState("");
  const gstRate = 0.03; 

  const [upperSeats, setUpperSeats] = useState([41, 42, 43, 44, 45]);
  const [lowerSeats, setLowerSeats] = useState([
    [1, 5, 9, 13, 17, 21, 25, 29, 33, 37],
    [2, 6, 10, 14, 18, 22, 26, 30, 34, 38],
    [3, 7, 11, 15, 19, 23, 27, 31, 35, 39],
    [4, 8, 12, 16, 20, 24, 28, 32, 36, 40]
  ]);

  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookedSeats, setBookedSeats] = useState([]);

  useEffect(() => {
    const savedBusId = localStorage.getItem("selectedBusId");
    if (savedBusId) {
      setBusId(savedBusId);
    }

    const savedSeats = localStorage.getItem("selectedSeats");
    setSelectedSeats(savedSeats ? JSON.parse(savedSeats) : []);

    if (busData.length > 0 && savedBusId) {
      const selectedBus = busData.find(bus => bus._id === savedBusId);
      if (selectedBus && selectedBus.seatcost) {
        setSeatCost(selectedBus.seatcost);
      }
    }
  }, [busData]);

  useEffect(() => {
    if (busId) {
      const fetchBookedSeats = async () => {
        try {
          const response = await fetch(`http://localhost:8003/bookedseats?busId=${busId}`);
          const data = await response.json();
          if (data.bookedSeats) {
            setBookedSeats(data.bookedSeats);
          }
        } catch (error) {
          console.error("Error fetching booked seats:", error);
        }
      };
      fetchBookedSeats();
    }
  }, [busId]);

  const toggleSeatSelection = (seatNumber) => {
    if (selectedSeats.includes(seatNumber)) {
      setSelectedSeats(selectedSeats.filter(seat => seat !== seatNumber));
    } else {
      setSelectedSeats([...selectedSeats, seatNumber]);
    }
  };

  useEffect(() => {
    localStorage.setItem("selectedSeats", JSON.stringify(selectedSeats));
  }, [selectedSeats]);

  const bookTickets = async () => {
    if (!busId) {
      alert("Bus ID is required to book seats");
      return;
    }

    try {
      const response = await fetch("http://localhost:8003/busseats", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          busId,
          seats: selectedSeats
        })
      });
      localStorage.setItem("busidd",busId)


      if (!response.ok) {
        throw new Error("Failed to book tickets");
      }

      const result = await response.json();
      toast.success("Booking successful");

      setBookedSeats([...bookedSeats, ...selectedSeats]);
    

      // Navigate to Payment after booking
      navigate('/Payment');
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  const totalCost = selectedSeats.length * seatCost;
  const gstAmount = totalCost * gstRate;
  const finalAmount = totalCost + gstAmount;
  localStorage.setItem("famount", finalAmount);

  const renderSeats = (seatRow) => {
    return seatRow.map((seat) => (
      <div
        key={seat}
        className={`seat ${selectedSeats.includes(seat) ? "selected" : ""} ${bookedSeats.includes(seat) ? "booked" : ""}`}
        onClick={() => !bookedSeats.includes(seat) && toggleSeatSelection(seat)}
      >
        {seat}
      </div>
    ));
  };

  return (
    <>
      <div className="booking-page d-flex mx-auto">
        <div className="seat-selection d-flex flex-column">
          <h2>Select Your Seats</h2>
          <div className="bus-seats d-flex w-100 flex-column">
            <div className="upper-section mb-4">
              <h4>Upper</h4>
              <div className="upper-seats d-flex flex-wrap">
                {renderSeats(upperSeats)}
              </div>
            </div>

            <div className="lower-section">
              <h4>Lower</h4>
              {lowerSeats.map((row, index) => (
                <div key={index} className="lower-row d-flex flex-wrap mb-2">
                  {renderSeats(row)}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bill-summary d-flex flex-column w-100">
          <h2>Booking Summary</h2>
          <div className="summary">
            <h3>Selected Seats</h3>
            <ul>
              {selectedSeats.map(seat => (
                <li key={seat}>Seat {seat}</li>
              ))}
            </ul>
            <h4>Cost per Seat: ₹{seatCost}</h4>
            <h4>Total Cost: ₹{totalCost}</h4>
            <h4>GST (3%): ₹{gstAmount.toFixed(2)}</h4>
            <h4 className="final-amount">Final Amount: ₹{finalAmount.toFixed(2)}</h4>
          </div>
        </div>
      </div>

      <div className="mx-auto w-100">
        <button className="book-btn" onClick={bookTickets} disabled={selectedSeats.length === 0}>
          Book Tickets
        </button>
      </div>
    </>
  );
};

export default BusSeats;
