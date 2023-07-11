import React from 'react';
import {Link} from 'react-router-dom';
import image from '../assets/digital-wallet.png';
import '../styles/importWallet.css';

const ImportWallet = () => {
    return (
      <div className = "importWallet">
        <div className="title-area">
          <img className='icon' src={image} alt="icon" />
          <span className='text'><h1>Import a Wallet</h1></span>
        </div>

        <div className="passphrase">
          <h1 className='text'>Enter your secret recovery phrase</h1>
          <form>
            <label>Passphrase: 
              <input type="text"/>
            </label>
            <label>
              <button>Confirm secret recovery phrase</button>
            </label>
          </form>
        </div>

        <div className='setPassword'>
          <h1>This is a local password. It is not sent to any server.</h1>
          <form>
            <label>Password: 
              <input type="text"/>
            </label>
            <label>Confirm Password: 
              <input type="text"/>
            </label>
            <div className="buttons">
            <Link to="/dashboard">
          <button className="active-button">Set password & go to dashboard.</button>
        </Link>
        </div>
          </form>
        </div>
      
      </div>
        
    );
  };

export default ImportWallet