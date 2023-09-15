import React from 'react'

function Message() {
  return (
    <div className='message owner'>
        <div className='messageInfo'>
            <img  src='https://images.pexels.com/photos/18173610/pexels-photo-18173610/free-photo-of-woman-with-a-camera-sitting-on-the-floor-covered-with-polaroids.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load' alt=''/>
            <span>just now</span>
        </div>
        <div className='messageContent'>
            <p>hello message</p>
            <img  src='https://images.pexels.com/photos/17917609/pexels-photo-17917609/free-photo-of-woman-leaning-on-chair.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load' alt=''/>
        </div>
    </div>
  )
}

export default Message
