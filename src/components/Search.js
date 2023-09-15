// Serach Friends here.
import React from 'react'

function Search() {
  return (
    <div className='search'>
        <div className='searchForm'>
            <input type='text' placeholder='search'></input>
        </div>
        <div className='userChat'>
            <img src='https://images.pexels.com/photos/18230421/pexels-photo-18230421/free-photo-of-girl-in-skirt-standing-with-balloons-on-grassland.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load'></img>
            <div className='userChatInfo'>
                <span>Varsha</span>
                <p>Last Message</p>
            </div>
        </div>
      
    </div>
  )
}

export default Search
