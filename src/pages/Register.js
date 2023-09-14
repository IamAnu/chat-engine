import React from 'react'

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
            <input type='file'/>
            <button> Sign up </button>
        </form>
        <p>Do you have an account ? login</p>
      </div>



    </div>
  )
}

export default Register
