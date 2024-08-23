import  { useState } from 'react';
import './LoginPop.css';
import  crossicon from "../assets/cross_icon.png"

const LoginPop = ({setShowLogin}) => {
  const [currstate, setcurrstate] = useState("Login");
  const [holderType, setHolderType] = useState(""); 
  const [emailPlaceholder, setEmailPlaceholder] = useState('your email required');
  const [passwordPlaceholder, setPasswordPlaceholder] = useState('your password required');


  return (
    <div className='login-pop'>
      <form className="login-popup-container">
        <div className="login-popup-title">

          <h2>{currstate}</h2>
          <img onClick={()=>setShowLogin(false)} src={crossicon} alt="" />
        </div>
        <div className="login-popup-inputs">
          {currstate === "Login" ? (
            <>
              <div className="holder-type-dropdown">
                <select value={holderType} onChange={(e) => {
                  setHolderType(e.target.value);
                  if (e.target.value === "Staff") {
                    setEmailPlaceholder('Staff Email');
                    setPasswordPlaceholder('Staff Password');
                  } else {
                    setEmailPlaceholder('your email required');
                    setPasswordPlaceholder('your password required');
                  }
                }}>
                  <option value="">Select Holder Type</option>
                  <option value="Staff">Staff</option>
                  <option value="User">User</option>
                </select>
              </div>
              <input type="email" placeholder={emailPlaceholder} required/>
              <input type="password" placeholder={passwordPlaceholder} required/>
            
            </>
          ) : (
            <>
              <input type="text" placeholder='your name required'/>
              <input type="email" placeholder='your email required'/>
              <input type="password" placeholder='your password required'/>
              <input type="text" placeholder='Qualification'/>
              <input type="number" placeholder='Age'/>
            </>
          )} 
        </div>
        <button className="login-popup-conainer">{currstate === "Sign Up" ? "Create Account" : "Login"}</button>
        {currstate === "Login" && (
          <div className="login-popup-forgot-password">
            <p><span onClick={() => alert('Redirect to Forgot Password')}>Forgot Password?</span></p>
          </div>
        )}
        <div className="login-popup-condition">
          <input type="checkbox" required/>
          <p>By Continuing this , i agree to the term condition & policy</p>
        </div>
        {currstate === "Login" ? (
          <p>Create a new account <span onClick={() => setcurrstate("Sign Up")}>Click here</span></p>
        ) : (
          <p>Already Have an account? <span onClick={() => setcurrstate("Login")}>Login Here </span></p>
        )}
      </form>
      </div>
  )
}

    
 export default LoginPop;
