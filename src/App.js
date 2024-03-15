import React from 'react';
import { FaWhatsapp } from "react-icons/fa";
import './App.css';

const App = () => (
  <div className="App">
    <div className='main-container'> 
      <div className='left-section'>
        <h1 className='main-heading'>Mobishaala</h1>
        <p className='description'>Create your <span>Digital Classroom</span> in 5 mins for 
        <span> Free </span>& connect to 1+ Million Students. </p>
        <ul className='pre-requisites-container'>
          <li className='pre-requisite'>No technical knowledge required.</li>
          <li className='pre-requisite'>Quick setup live classes, notes, ebooks and more.</li>
          <li className='pre-requisite'>Reach out to millions of students anywhere, anytime.</li>
        </ul>
        <div className='mobile-section'>
        <iframe 
          width="300" 
          height="220" 
          src="https://www.youtube.com/embed/jg5d59ligW4" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
          style={{ border: '0px', borderRadius: '10px' }} 
        ></iframe>
        <button type='button' className='Buy-btn'>
          Buy
        </button>
      </div>
        <h4>Institute/Teacher</h4>
        <button type='button' className='get-started-btn'>
          Get Started
        </button>
        <h4>Student</h4>
        <button type='button' className='download-app-btn'>
          Download App
        </button>
        <button type='button' className='talk-to-us-btn'>
          <FaWhatsapp />
          Talk to us
        </button>
      </div>
      <div className='Large-device-section'>
        <iframe 
          className='small-device-player'
          width="400" 
          height="200" 
          src="https://www.youtube.com/embed/jg5d59ligW4" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
          style={{ border: '0px', borderRadius: '10px' }} 
        ></iframe>
        <button type='button' className='Buy-btn'>
          Buy
        </button>
      </div>
    </div>
    <div className='footer'>
      <div className='footer-content'>
        <h1>Mobishaala</h1>
        <h3>Vision</h3>
        <p>Empower Institutions & Teachers with state of the art digital 
          Classroom technology.
        </p>
        <h3>Address</h3>
        <p><span>Registered Office : </span>804.5th Cross, 9th main, 4th Block Koramangala, Bangalore, Karnataka 560034</p>
        <p><span>Corporate Office : </span>293, Westend Marg, near Saket, Saidulajab, Saket, New Delhi, 110030</p>
        <h3>Quick links </h3>
        <p>Blogs</p>
        <p>Android App</p>
        <p>IOS App</p>
      </div>
    </div>
  </div>
);

export default App;
