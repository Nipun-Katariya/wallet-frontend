import React from 'react';
import {Link} from 'react-router-dom';
import image from '../assets/digital-wallet.png';
import '../styles/dashboard.css';

const dashboard = () => {
    return (
      <div className = "dashboard">
        <div className="title-area">
          <img className='icon' src={image} alt="icon" />
          <span className='text'><h1>Dashboard</h1></span>
        </div>
      
      </div>
    );
  };

export default dashboard