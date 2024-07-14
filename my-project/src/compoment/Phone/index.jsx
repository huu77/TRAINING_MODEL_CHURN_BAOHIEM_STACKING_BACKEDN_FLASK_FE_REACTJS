import React from 'react'
import Body from './Body'

import {  ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 
const Phone = () => {
  return (
    <div className=''>
          <ToastContainer />
    <div className="mockup-phone border-primary">
  <div className="camera"></div>
  <div className="display">
    <div className="artboard artboard-demo phone-1 overflow-auto">
        <Body/>
    </div>
  </div>
</div>
</div>
  )
}

export default Phone