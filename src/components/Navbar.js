import React from 'react'

function Navbar() {
  return (
    <div className='navbar'>
        <span className='logo'>Chat logo</span>
        <div className='user'>
            <img src='https://images.pexels.com/photos/18037531/pexels-photo-18037531/free-photo-of-sea-fashion-beach-people.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load' alt=''/>
            <span>Anu</span>
            <button>logout</button>
        </div>
      
    </div>
  )
}

export default Navbar
