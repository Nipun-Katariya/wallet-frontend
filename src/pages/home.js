import React from 'react';
import image from '../assets/digital-wallet.png';
import {Link} from 'react-router-dom';
import '../styles/home.css'

const Home = () => {
    return (
      <div className = "home">
        <div className="title-area">
          <img className='icon' src={image} alt="icon" />
          <span className='text'><h1>Nitro-Enclave Blockchain Wallet</h1></span>
      </div>

      <div className="buttons">
        <Link to="/new-wallet">
          <button className="active-button">Create a new wallet</button>
        </Link>
        <Link to="/import-wallet">
          <button className="active-button">Import an existing wallet</button>
        </Link>
      </div>
      </div>
      
    );
  };

export default Home