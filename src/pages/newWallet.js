import React from 'react';
import image from '../assets/digital-wallet.png';
import '../css/newWallet.css'

const NewWallet = () => {
    return (
      <div className="app">
        <img className="icon" src={image} alt="icon" />
        <h1 className="title">New Wallet</h1>
      </div>
    );
  };

export default NewWallet