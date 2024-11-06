import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify'; // Import ToastContainer
import './App.css';


import Booking from './pages/Booking';
import Offers1 from './pages/Offers1';
import Footer from './/Footer';
import Header from './Header';
import Body from './Body';
import Accountdetails from './pages/Accountdetails';
import Payment from './pages/Payment';
import BusSeats from './pages/BusSeats';

import 'react-toastify/dist/ReactToastify.css';
import { ProtectiveRouting } from './pages/ProtectiveRouting';
import ContactPage from './pages/ContactPage';
import TicketDisplay from './pages/TicketDisplay';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/Booking" element={<Booking />} />
          <Route path="/Offer" element={<Offers1 />} />
          <Route path='/ContactPage' element={<ContactPage></ContactPage>}/>



          <Route element={<ProtectiveRouting/>}> 
          <Route path="/Account" element={<Accountdetails />} />
          <Route path="/Payment" element={<Payment />} />
          <Route path="/BusSeats" element={<BusSeats />} />
          <Route path='/TicketDisplay' element={<TicketDisplay></TicketDisplay>}/>
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
      <ToastContainer /> {/* Add ToastContainer here */}
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

export default App;
