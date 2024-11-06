import React, { useState } from 'react';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import HotelIcon from '@mui/icons-material/Hotel';
import AirlineSeatReclineExtraIcon from '@mui/icons-material/AirlineSeatReclineExtra';
import Travalers from '../Components/Travalers';
import SearchBar from '../Components/SearchBar';
import PersonIcon from '@mui/icons-material/Person';

const Booking = () => {
  const [isAc, setIsAc] = useState(() => JSON.parse(localStorage.getItem('ac')) || 1);
  const [isSleeper, setIsSleeper] = useState(() => JSON.parse(localStorage.getItem('sleeper')) || 1);

  const handleAcToggle = () => {
    setIsAc(1);
    localStorage.setItem('ac', JSON.stringify(1));
    localStorage.setItem('nonAc', JSON.stringify(0));
  };

  const handleNonAcToggle = () => {
    setIsAc(0);
    localStorage.setItem('ac', JSON.stringify(0));
    localStorage.setItem('nonAc', JSON.stringify(1));
  };

  const handleSleeperToggle = () => {
    setIsSleeper(1);
    localStorage.setItem('sleeper', JSON.stringify(1));
    localStorage.setItem('seater', JSON.stringify(0));
  };

  const handleSeaterToggle = () => {
    setIsSleeper(0);
    localStorage.setItem('sleeper', JSON.stringify(0));
    localStorage.setItem('seater', JSON.stringify(1));
  };

  return (
    <div>
      <SearchBar />
      <div className='wbg'>
        <div className='w-75 mx-auto'>
          <div className='container1 container d-flex shadow'></div>

          <div className='book-category mt-3 d-flex'>
            <div className='book-left p-4'>
              <p className='mb-0'>Filters</p>
              <hr className='mt-1'></hr>

              {/* Vertical arrangement of the buttons */}
              <div className='cbox container mt-2 align-items-center border p-2 rounded'>
                {/* AC/Non-AC filter */}
                <div className=' justify-content-center p-5 '>
                  <button
                    className={`bbox rounded  w-100 mb-5 p-2 ${isAc === 1 ? 'bg-primary text-white' : ''}`}
                    onClick={handleAcToggle}
                  >
                    <AcUnitIcon /> AC
                  </button>
                  <button
                    className={`bbox rounded w-100 p-2 mb-5 ${isAc === 0 ? 'bg-primary text-white' : ''}`}
                    onClick={handleNonAcToggle}
                  >
                    <AcUnitIcon /> Non-AC
                  </button>
               
                  <button
                    className={`bbox rounded w-100 mb-5 p-2 ${isSleeper === 1 ? 'bg-primary text-white' : ''}`}
                    onClick={handleSleeperToggle}
                  >
                    <HotelIcon /> Sleeper
                  </button>
                  <button
                    className={`bbox rounded w-100 p-2 ${isSleeper === 0 ? 'bg-primary text-white' : ''}`}
                    onClick={handleSeaterToggle}
                  >
                    <AirlineSeatReclineExtraIcon /> Seater
                  </button>
                </div>
              </div>
            </div>

            <div className='book-right ms-3 w-75 rounded'>
              <div className='right-offer d-flex overflow-x-scroll'>
                <img src='https://static.abhibus.com/offerbanners/Apr2024/30/1714476340/OrangefcTravels.png' alt='offer1' />
                <img src='https://static.abhibus.com/img/assured_partner/assured-filter-banner-new.png' alt='offer2' />
                <img src='https://static.abhibus.com/img/cards/2022/ratings.png' alt='offer3' />
                <img src='https://static.abhibus.com/img/EDGE_EFD.webp' alt='offer4' />
                <img src='https://static.abhibus.com/img/EDGE_ERH.webp' alt='offer5' />
                <img src='https://static.abhibus.com/img/cards/2022/offers.png' alt='offer6' />
              </div>

              <div className='right-offer1  rounded mt-3 d-flex justify-content-around'>
                <div className='rof1  '>
                  <img className=' mb-5' src='https://static.abhibus.com/img/TSRTC_LOGO.png' alt='tsrtc' />
                </div>
                <div className='rof2 mx-auto pt-3'>
                  <h1>APSRTC</h1>
                  <p>(Andhra Pradesh State Road Transport Corporation)</p>
                </div>
                <div className='rof3'>
                  <div className='mt-3 w-75 mx-auto rounded d-flex'>
                    <div className='inner-rating border text-white rounded bg-success'>
                      <p>⭐ 3.7</p>
                    </div>
                    <div className='inner-rating border d-flex'>
                      <PersonIcon className='w-25' />
                      <p className='w-100'>53.7k</p>
                    </div>
                  </div>
                  <div className='pricebox bg-white h-25 mt-3 border rounded mx-auto'>
                    <p className='w-100 mb-0 ms-4'>@1001 <br />onwards</p>
                  </div>
                </div>
              </div>

              <div className='book-right w-100 rounded'>
                <Travalers isAc={isAc} isSleeper={isSleeper} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
