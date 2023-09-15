import React from 'react'

function Login() {
  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <span className='logo'> Let's Chat </span>
        <span>Login</span>
        <form>
            <input type='email' placeholder='name@gmail.com'/>
            <input type='password' placeholder='password'/>
            <input style={{display:'none'}} type='file' id='file'/>
            <button> Sign In </button>
        </form>
        <p>Don't have an account ? Register</p>
      </div>
    </div>
  )
}

export default Login
