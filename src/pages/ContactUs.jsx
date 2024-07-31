import React from 'react'
import { SignupFormDemo } from './contactform'
import {GlobeDemo} from "./globe"
import "./style.css"

const ContactUs = () => {
  return (
    <div className='contact-element'>
        <h1 className='contact-title'>Want to Reach Out?</h1>
        <div className='contact-content'>
            <SignupFormDemo />
            <GlobeDemo />
        </div>
        
    </div>
  )
}

export default ContactUs