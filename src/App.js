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
      <div className='right-section'>
        <iframe 
          width="400" 
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
    </div>
  </div>
);

export default App;
