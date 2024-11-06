import React, { useEffect, useState } from 'react'
import bus from './images/bus.png'
import bg from './images/bg1.webp'
import m from './images/mobiles.webp'
import logo from './images/log.png'
import b from './images/bot.png'
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import './css/App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from 'react-router-dom'
import SearchBar from './Components/SearchBar'

function Body() {
  return (<div>
    <div>
    <img src='https://t3.ftcdn.net/jpg/06/26/79/80/360_F_626798006_mew3jiniPEN1mnikNEgiNvvPsUwewwRo.jpg' width="100%"></img>
        <div className="k"><h1>Book Bus Tickets</h1></div>
        <div className='container  mb-5'><div className='container bg-light b border shadow pe-5'>
           <SearchBar></SearchBar>
        </div>
        </div>
        <div class="ad">
            <div className='ms-5'>
            <h2 className='ms-5'>Bus Booking Discount Offers</h2>
            </div>
<div className="ac">
    <img className='ms-5' src="https://static.Abhibus.com/offerbanners/Jun2024/14/1718370002-720x360.webp"></img>
    <img className='ms-1' src="https://static.Abhibus.com/offerbanners/Jun2024/06/1717662239-icici-bus-offer.webp"></img>
    <img className='ms-1' src="https://static.Abhibus.com/offerbanners/Mar2024/01/1709246907-win-an-iphone-bus-offer.webp"></img>
    <img className='ms-1' src="https://static.Abhibus.com/offerbanners/Jun2024/04/1717450081-tsrtc-bus-offer.webp"></img>
    <img className='ms-1' src="https://static.Abhibus.com/offerbanners/Jun2024/14/1718357621-720x360.webp"></img>
    <img className='ms-1' src="https://static.Abhibus.com/offerbanners/Jun2024/06/1717663343-yes-bank-bus-offer.webp"></img>
    <img className='ms-1' src="https://static.Abhibus.com/offerbanners/Jun2024/04/1717450669-rsrtc-bus-offer.webp"></img>
    <img className='ms-1' src="https://static.Abhibus.com/offerbanners/Jun2024/04/1717451070-upsrtc-bus-offer.webp"></img>
    <img className='ms-1' src="https://static.Abhibus.com/offerbanners/Jun2024/06/1717661891-au-bank-bus-offer.webp"></img>
    <img className='ms-1' src="https://static.Abhibus.com/busgallery/offerbanners/Nov2023/24/1700820925-720x360-ixigo-au.png"></img>
    <img className='ms-1' src="https://static.Abhibus.com/offerbanners/Jun2024/04/1717450497-hrtc-bus-offer.webp"></img>
</div>
</div>
<div className='ms-5 mb-4'>
<h2 className='ms-5 '>Why Choose APMS for Bus Ticket Booking ?</h2>
<p className='ms-5 me-5'>APMS is India’s fastest growing online ticket booking platform. APMS is the official ticketing partner of several State Road Transport Corporation (SRTC) operators and over 3500+ private bus partners covering more than 100,000 bus routes</p>
</div>
<div class="ae">
            <div className='ms-5'>
            <h2 className='ms-5'>Book Bus Tickets at APMS</h2>
            <p className='ms-5'>From SRTC (State Road Transport Corporation)</p>
            </div>
<div class="ac">
   <div className='border rounded 2 bg-light f ms-5'>
    <img className='ms-3' src='https://static.Abhibus.com/web/media/operators/apsrtc.webp' height="70px"></img>
<h5 className='g'>APSRTC</h5>
<p className='e'>Andhra Pradesh State Road Transport Corporation</p>
   </div>
   <div className='border rounded 2 bg-light f ms-1'>
    <img className='ms-3' src='https://static.Abhibus.com/web/media/operators/tsrtc.webp' height="70px"></img>
<h5 className='g'>TSRTC</h5>
<p className='e'>Telangana State Road Transport Corporation</p>
   </div>
   <div className='border rounded 2 bg-light f ms-1'>
    <img className='ms-3' src='https://static.Abhibus.com/web/media/operators/gsrtc.webp' height="70px"></img>
<h5 className='g'>GSRTC</h5>
<p className='e'>Gujarat State Road Transport Corporation</p>
   </div>
   <div className='border rounded 2 bg-light f ms-1'>
    <img className='ms-3' src='https://static.Abhibus.com/web/media/operators/ksrtc.png' height="70px"></img>
<h5 className='g'>Kerela RTC</h5>
<p className='e'>Kerela Road Transport Corporation</p>
   </div>
   <div className='border rounded 2 bg-light f ms-1'>
    <img className='ms-3' src='https://static.Abhibus.com/web/media/operators/rsrtc.webp' height="70px"></img>
<h5 className='g'>RSRTC</h5>
<p className='e'>Rajasthan State Road Transport Corporation</p>
   </div>
   <div className='border rounded 2 bg-light f ms-1'>
    <img className='ms-3' src='https://static.Abhibus.com/web/media/operators/hsrtc.webp' height="70px"></img>
<h5 className='g'>HRTC</h5>
<p className='e'>Himachal Road Transport Corporation</p>
   </div>
   <div className='border rounded 2 bg-light f ms-1'>
    <img className='ms-3' src='https://static.Abhibus.com/web/media/operators/osrtc.webp' height="70px"></img>
<h5 className='g'>OSRTC</h5>
<p className='e'>Odisha State Road Transport Corporation</p>
   </div>
   <div className='border rounded 2 bg-light f ms-1'>
    <img className='ms-3' src='https://static.Abhibus.com/web/media/operators/bsrtc.webp' height="70px"></img>
<h5 className='g'>BSRTC</h5>
<p className='e'>Bihar State Road Transport Corporation</p>
   </div>
   <div className='border rounded 2 bg-light f ms-1'>
    <img className='ms-3' src='https://static.Abhibus.com/web/media/operators/prtc.png' height="70px"></img>
<h5 className='g'>PRTC</h5>
<p className='e'>PEPSU Road Transport Corporation</p>
   </div>
</div>
</div>
<div className='container'>
    <div className='h p-4'>
        <h2>Online Bus Booking Services</h2>
        <p>
        APMS is India`s leading online bus ticket booking service provider. Check out budget friendly offers and save big with discount coupons to book bus tickets at the lowest price with us. You can check the bus schedules, compare prices, and find all the information you need to plan an ideal and comfortable bus or train journey.</p>
<p>APMS has simplified the online bus booking process for your travel planning. In case you need to cancel the ticket or change the dates, You can save both time and money by choosing AbhiCash as a refund option which can be used instantly. Book now!!!</p>
<p>Browse through all your bus route options, and use our advanced smart filters to ensure a reliable and comfortable journey, tailored to your scheduled travel plans.</p>
    </div>
</div>
<div className='container mt-2'>
    <div className='h p-4'>
        <h2>Online Bus Ticket Booking at Lowest Price</h2>
        <p>
        With APMS, travellers can book bus tickets online at the lowest ticket fares. Travellers can choose their favorite bus for online bus booking. APMS is the right place for reserving bus tickets as you will find a wide range of Private buses and SRTC (State Road Transport Corporation) buses are available for bus booking online on APMS.
Below, you will find various types of buses available to book bus tickets on APMS at the lowest fare for bus ticket booking:</p>
<div className='d-flex'>
    <div>
AC Buses<br></br>
Non AC Buses<br></br>
Ordinary Buses<br></br>
Mini Buses<br></br>
Super Luxury (Non-AC Seater)
</div><div className='j'>
Volvo AC Buses<br></br>
Sleeper AC Buses<br></br>
Sleeper Buses<br></br>
Deluxe Buses<br></br>
Sleeper Cum Seater AC
</div><div className='j'>
Double Decker Buses<br></br>
Mercedes buses<br></br>
Non-Mercedes buses<br></br>
Electric Buses<br></br>
Express Buses<br></br>
</div></div><br></br>
<p>The bus ticket fare depends on the factors such as type of bus, bus operator, bus routes distance between origin and destination cities, amenities offered by the bus operator, and bus operators may change ticket prices during festive seasons. Travelling by bus journey is the best option, cost effective and the most convenient travel option compared to other modes of transport.</p>
    </div>
</div>
<div className='container mt-2'>
    <div className='h p-4'>
        <h2>Benefits of Booking Bus Tickets Online</h2>
        <p>
        In this day and age of technology, offline modes of bus ticket booking are no longer preferred. Online ticket booking is easy, fast, and hassle-free. APMS ticks off all the three with user-friendly app and website navigation.</p>
<p>Booking bus tickets online with APMS has resolved many issues that people encounter while booking tickets at offline counters or through travel agents. Download the APMS App to experience the benefits of bus ticket booking online.</p>
<p>Here is a list of all the benefits of booking bus tickets online on APMS</p>
<div className='ms-5'>
Avoid standing in long queues at offline bus ticket counters.<br></br>
No more hassle of approaching travel agents.<br></br>
Choose from multiple bus services.<br></br>
Book both Private and SRTC bus tickets online.<br></br>
Check bus ticket availability online.<br></br>
Get bus timings, ticket price, boarding & dropping point details online.<br></br>
Access to payment partner discounts and cashback offers.<br></br>
Free Cancellation - Get 100% refund if your plan changes and you cancel your ticket.<br></br>
24/7 customer support.<br></br>
Each and every transaction is simple, safe and secure.<br></br>
</div>
    </div>
</div>
<div className='container mt-2'>
    <div className='h p-4'>
    <h2>Abhi Assured Program</h2>
<p>APMS customers can avail more benefits by opting Abhi Assured</p>
<div className='ms-5'>
150% Refund if bus cancelled<br></br>
upto 100% Refund if bus delayed<br></br>
upto 100% Refund for bad quality service<br></br>
100% Refund for booking cancellation<br></br>
</div><br></br>
<p>One of the unique features that APMS offers is Abhi Assured. This program guarantees a safe and secure bus travel experience for all passengers. APMS customers can claim refunds for various reasons. For detailed information about eligibility and the refund policy, please check the Abhi Assured Program here.</p>
<p>When booking a bus ticket on APMS, look for the "Assured Partner" label to avail the associated benefits with the Abhi Assured program. This Assured Partner tag is visible on the bus search details page for APMS Assured Bus Partners only. APMS users should note that Abhi Assured benefits are provided only by the APMS Assured Bus Partners. APMS Assured Partner program ensures a hassle-free and comfortable bus journey for all its passengers by encouraging top rated bus operators to maintain high quality standards.</p>
    </div>
</div>
<div className='container mt-2'>
    <div className='h p-4'>
    <h2>Offers on Bus Booking</h2>
<p>Travellers can find exclusive bus booking offers, discount coupons, cashback and more on APMS. You can book bus tickets at the lowest price to any destination in India.Choose bus ticket fares from operators offering the lowest, mid-range, and highest prices on APMS. Check for bus ticket price comparisons, select your preferred bus for bus booking, apply coupon code and save money on your bus journey today!</p>
    </div>
</div>
<div className='container mt-2'>
    <div className='h p-4'>
    <h2>Last Hour Ticket Booking</h2>
<p>Most of the online bus bookings are unplanned, with only 32% of the people reserving tickets on the day of travel and 24% one day before the journey. Keeping this in mind, APMS has ensured buses are available round the clock 24/7 by listing all the scheduled buses. At times you could be the lucky one because many of our bus partners provide last-minute deals that offer up to 25% discount on the bus ticket fare. You can experience flexibility in both bus timings and price choices when booking tickets on APMS.</p>
<p>APMS provides the quickest way to find last-minute online bus bookings, allowing you to compare prices, operator schedules, and more.Travellers can enjoy the affordability and convenience that comes with thousands of trusted bus operators who have partnered with us in India. You can avail last-minute ticket booking options and choose from multiple pick-up and drop-off locations on APMS.com.</p>      </div>
</div>
<div className='container mt-2'>
    <div className='h p-4'>
    <h2>The Best Way to Book Bus Ticket</h2>
<p>Do you want to know the best way to book tickets online securely and how to book tickets in advance? APMS.com is the platform for you to book bus tickets, train tickets, Flights and hotels. With us, you can check the provided amenities, compare booking fares, check bus time & schedule on your chosen route, explore additional facilities, and more. APMS offers an affordable and cost-effective online travel booking experience.</p>
<p>With APMS, online bus ticket booking became easier. Simply enter your journey details in our search bar (departure city, destination city, and travel date), click the search button, and you will receive a list of available bus operators for online ticket booking.Then, select the bus that best suits your travel needs and securely complete your booking online on APMS.com.</p>
<p>We recommend booking your tickets at least 2 - 3 days in advance so that you can reserve bus seats as per your preference and get the best-discounted price on your booking.</p>
</div></div>
<div className='container mt-2'>
    <div className='h p-4'>
    <h2>Track Your Bus Live Location</h2>
<p>APMS is solving the biggest concern while boarding a bus by providing a tracking option that provides the live location of the bus. This option keeps passengers informed about the bus live location so that passengers can plan their boarding accordingly. APMS live bus tracking system allows you to track your bus status by entering your APMS Booking ID and either Email ID or Mobile Number details in the input field box. It's a simple, fast, and secure way to manage, track your bus live location on Google Maps with APMS live bus tracking technology. Find scheduled bus departure and arrival times of your bus route, the distance between cities and more information.</p>
<p>Booking Bus tickets online in advance and reserving your seats also gives you benefits on early bird discount offers and help you to plan a hassle-free bus journey. Book bus tickets now and enjoy the live bus tracking status online with us.</p>
    </div></div>
    <div className='container mt-2'>
    <div className='p-4'>
    <h2>Online Bus Booking FAQ’s</h2>
        <div className='border rounded 2 p-5'>
        <h5>Q. How do you do online bus reservation on APMS?</h5>
<p>Ans: Booking a bus ticket online in India is easy with APMS. Simply enter the Leaving from (Origin City) -- Going to (destination city) details along with the date you wish to travel in the bus search option on the site. Within seconds you will be given a list of available running buses for your route. Select the bus that best suits you, then just follow the bus ticket booking process by selecting your seat, providing passenger details and completing the payment process. Upon successful booking confirmation, you will receive an e-ticket over SMS/whatsapp and email.</p><hr></hr>
<h5>Q. Do I need to create an account to book bus tickets on APMS?</h5>
<p>Ans: No, you can book bus tickets as a guest user by providing required passenger details. However, we recommend you to create an account so that you get the latest information about bus availability, ticket details and other features which will help you book faster during future transactions.</p><hr></hr>
<h5>Q. How to sign-up APMS?</h5>
<p>Ans: You can sign-up using your mobile number. APMS offers a one-step sign-up & login process with just an OTP received on your mobile.</p><hr></hr>
<h5>Q. Can I book Government SRTC bus tickets on APMS?</h5>
<p>Ans: Yes, you can book SRTC (State Road Transport Corporation) bus tickets using our website or mobile app. Some of the major SRTC includes.</p>
<div className='ms-5'>
APSRTC - Andhra Pradesh State Road Transport Corporation<br></br>
TSRTC - Telangana State Road Transport Corporation<br></br>
GSRTC - Gujarat State Road Transport Corporation<br></br>
HRTC - Himachal Road Transport Corporation<br></br>
MSRTC - Maharashtra State Road Transport Corporation<br></br>
RSRTC - Rajasthan State Road Transport Corporation<br></br>
MSRTC - Maharashtra State Road Transport Corporation<br></br>
PRTC - Puducherry Road Transport Corporation<br></br>
BSRTC - Bihar State Road Transport Corporation<br></br>
UPSRTC - Uttar Pradesh State Road Transport Corporation<br></br>
OSRTC - Odisha State Road Transport Corporation<br></br>
Kerala RTC -Kerala State Road Transportation Corporation</div>
        </div>
       </div></div>
       <img className='m' src='https://static.abhibus.com/web/media/install/download-app.20230824.webp' width="100%"></img>
       <div className='container'>
       <div>
       <div className='d-flex l'><div><img src={m} width="45%"></img></div><div>
       <div className='n'>
        <img src={logo} width="100%"></img><br></br>
       <div className='ms-5'><img className='ms-5' src='https://static.abhibus.com/web/media/install/app-rating-20230824.webp'></img></div>
       </div>
        </div></div>
       </div>
       </div>
        </div>
        </div>
  )
}

export default Body