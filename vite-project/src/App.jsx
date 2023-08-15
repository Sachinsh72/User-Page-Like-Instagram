import { useState } from 'react'
import insta from './assets/instagram.png'
import './App.css'

// logo component 
function Logo(props){
  return <img src={props.src} width={props.width} height={props.height} alt="LOGO" className='logo' />
}

// signin component
function Signin(){

  return(
    <div className='signin'>
      <input type="text" placeholder='Phone number, username, or email'/> <br/>
      <input type="password" placeholder='Password'/> <br/>
      <button>Sign in </button>
    </div>
  )
}

// singup component
function Signup(){

  return(
    <div className='signup'>
      <input type="text" placeholder='Mobile Number or Email'/> <br/>
      <input type="text" placeholder='Full Name'/> <br/>
      <input type="text" placeholder='Phone number, username, or email'/> <br/>
      <input type="password" placeholder='Password'/> <br/>
      <button>Sign up </button>
    </div>
  )
}

// app component
function App() {

  const [login, setLogin] = useState(true)

  return (
    <div className='conatiner'>
    <Logo src={insta} width="200px" height="70pxs"/>
    <br/>

    {
      (login)? <Signin/> : <Signup/>
    }
    
    {(login)? <p>Don't have account? <span onClick={()=>setLogin(!login)}> {(!login)?'Sign in': 'Sign up'}</span></p> : <p>have an account? <span onClick={()=>setLogin(!login)}> {(!login)?'Log in': 'Sign up'}</span></p>}
    </div>
  )
}

export default App