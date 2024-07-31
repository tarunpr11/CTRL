import React from 'react'
import "./style.css"
import Image from 'next/image';
import logoSrc from '../../public/assets/logo.png'; // Assuming you are using the correct path for importing images
import instaSrc from '../../public/assets/instagram.png'
import chatSrc from '../../public/assets/chat.png'


const LogoDemo = () => {
  return (
    <div>
      <div className='logo'>
          <button>
          <Image
            src={logoSrc}
            alt='Ctrl. logo'
            width={50}  // Specify the width of the image
            height={50} // Specify the height of the image
          />
          </button>   
      </div>
      <div className='reachout'>
        <a className='instagram' href='https://www.instagram.com/ctrldotin/'>
        <Image
            src={instaSrc}
            alt='Ctrl. logo'
            width={45}  // Specify the width of the image
          />
        </a>
        <a className='contact' href='#contact'>
        <Image
            src={chatSrc}
            alt='Ctrl. logo'
            width={55}  // Specify the width of the image
          />
        </a>
      </div>
    </div>
  );
};

export default LogoDemo


