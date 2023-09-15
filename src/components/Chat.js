//  This is write container where I can see the messages and do the chat with frineds

import React from 'react'
import Cam from '../images/camera.png';
import Add from '../images/add-friend.png';
import More from '../images/more.png'
import Messages from './Messages';
import Input from './Input';

function Chat() {
  return (
    <div className='chat'>
      <div className='chatInfo'>
        <span>Shrey</span>
        <div className='chatIcons'>
          <img src={Cam} alt=''/>
          <img src={Add} alt=''/>
          <img src={More} alt=''/>
        </div>
      </div>
      <Messages/>
      {/* <Messages/>
      <Messages/>
      <Messages/>
      <Messages/>
      <Messages/>
      <Messages/>
      <Messages/>
      <Messages/>
      <Messages/>
      <Messages/>
      <Messages/>
      <Messages/>
      <Messages/>
      <Messages/>
      <Messages/>
      <Messages/>
      <Messages/>
      <Messages/>
      <Messages/>
      <Messages/>
      <Messages/>
      <Messages/> */}
      <Input/>
    </div>
  )
}

export default Chat
