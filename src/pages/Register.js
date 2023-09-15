import React from 'react'
import Add from '../images/avatar.webp';

function Register() {
  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <span className='logo'> Let's Chat </span>
        <span>Register</span>
        <form>
            <input type='text' placeholder='Enter Name'/>
            <input type='email' placeholder='name@gmail.com'/>
            <input type='password' placeholder='password'/>
            <input style={{display:'none'}} type='file' id='file'/>
            <label htmlFor='file'>
                {/* Change this avatar later */}
                <img src={Add} alt=''/>
                <span>Add an avatar</span>
            </label>
            <button> Sign up </button>
        </form>
        <p>Do you have an account ? login</p>
      </div>
    </div>
  )
}

export default Register
