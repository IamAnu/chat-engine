// Type message to your friends 

import React from 'react'
import Attach from '../images/attachments.png';
import Images from '../images/image-gallery.png'

function Input() {
  return (
    <div className='input'>
      <input type='text' placeholder='write message..'/>
      <div className='send'>
            <img src={Attach} alt=''/>
            <input type='file' style={{display:'none'}} id='file'/>
            <label htmlFor='file'>
                <img src={Images} alt=''/>
            </label>

            {/*  Change the button with an send icon latter */}
            <button>Send</button>
        </div>  
    </div>
  )
}

export default Input
