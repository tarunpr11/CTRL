import React from 'react'
import "./style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LogoDemo = () => {
  return (
    <div>
      <div className='logo'>
          <button>
              <img src='../../assets/logo.png' alt='Ctrl. logo' />
          </button>   
      </div>
      <div className='reachout'>
        <a className='instagram' href='https://www.instagram.com/ctrldotin/'>
          <img src='../../assets/instagram.png' alt='instagram logo' width={45}/>
        </a>
        <a className='contact' href='#contact'>
        <img src="../../assets/chat.png" alt="chat" width={55}/>
        </a>
      </div>
    </div>
  );
};

export default LogoDemo


