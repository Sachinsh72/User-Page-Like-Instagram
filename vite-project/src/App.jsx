import { useState } from 'react'
import insta from './assets/instagram.png'

import './App.css'

// logo component 
function Logo(props){
  return <img src={props.src} width={props.width} height={props.height} alt="LOGO" />
}

// signin component
function Signin(){

  return(
    <>
      <input type="text" placeholder='Phone number, username, or email'/> <br/>
      <input type="password" placeholder='password'/> <br/>
      <button>Sign in </button>
    </>
  )
}

// singup component
function Signup(){

  return(
    <>
      <input type="text" placeholder='Mobile number or Email'/> <br/>
      <input type="text" placeholder='Full Name'/> <br/>
      <input type="text" placeholder='Phone number, username, or email'/> <br/>
      <input type="text" placeholder='password'/> <br/>
      <button>Sign up </button>
    </>
  )
}

// app component
function App() {

  const [login, setLogin] = useState(true)
  // const [status, setStatus] = useState(login)

  return (
    <>
    <Logo src={insta} width="200px" height="100pxs"/>

    <br/>

    {
      (login)? <Signin/> : <Signup/>
    }
    {
      // (login)? <input type="text" placeholder='Phone number, username or ,email'/> : <input type="text" placeholder='Mobile number or email full name'/>
    }
    {/* {
      (!login)? <input type="text" placeholder='password'/> : <input type="text" placeholder='Phone number, username or ,email'/> && <input type="text" placeholder='password'/>
    } */}


    {/* <input type="text" placeholder={login} is { (login == {status}) ? 'Phone number, username or ,email': 'Mobile number or email full name'} />  */}

    {/* <input type="text" /> */}
    {/* <button> {(login)?'Sign in': 'Sign Up'} </button> */}
    {(login)? <p>Don't have account ? <span onClick={()=>setLogin(!login)}> {(!login)?'Sign in': 'Sign up'}</span></p> : <p>Have an account ? <span onClick={()=>setLogin(!login)}> {(!login)?'Log in': 'Sign up'}</span></p>}
    {/* <p/> */}
    {/* <p></p> */}
    </>
  )
}

export default App
