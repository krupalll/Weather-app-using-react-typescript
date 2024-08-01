import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../Components/Footer/Index';
import Header from '../../Components/Header/Index';
import { Wrapper } from './Style';

const LoginPage = () => {
  const [emailPlaceholder, setEmailPlaceholder] = useState("Email*");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const onfocus = () => {
    setEmailPlaceholder("example@domain.com");
    setIsEmailFocused(true);
  };

  const onBlur = () => {
    setIsEmailFocused(email!=="")
    setEmailPlaceholder("Email*");
  };

  const OnPasswordFocus = () => {
    setIsPasswordFocused(true);
  };

  const onPasswordBlur = () => {
    setIsPasswordFocused(password!=="");
  };

  const showPass = () => {
    setShowPassword(!showPassword);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError(""); // Reset email error on change
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError(""); // Reset password error on change
  };

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const validatePassword = (password) => {
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passwordPattern.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;

    if (!validateEmail(email)) {
      setEmailError(`Please enter the correct email id.`);
      valid = false;
    }

    if (!validatePassword(password)) {
      setPasswordError("Please enter the correct Password id.");
      valid = false;
    }

    if (valid) {
      // Proceed with form submission
      console.log("Form submitted");
    }
  };

  return (
    <>
      <Wrapper>
        <div className='Login-main'>
          <Header />
          <div className="login-container">
            <div className="login-form">
              <div style={{ width: "90%" }}>
                <h1>Welcome!</h1>
                <form onSubmit={handleSubmit}>
                  <div className="input-container">
                 
                    {isEmailFocused && (
                      <label className="lable_holder lable-email">
                        Email*
                      </label>
                    )}
                    
                    <input
                      value={email}
                      type="text"
                      className={`input-field ${emailError ? 'input-error' : ''}`}
                      placeholder={emailPlaceholder}
                      onFocus={onfocus}
                      onBlur={onBlur}
                      onChange={handleEmailChange}
                    />
                    {emailError && <div className="error-message">&nbsp;&nbsp;&nbsp;{emailError}&nbsp;&nbsp;&nbsp;</div>}
                  </div>
                  <div className="input-container">
                    
                    {isPasswordFocused && (
                      <label className="lable_holder lable-password">
                        Password*
                      </label>
                    )}
                    <input

                      value={password}
                      type={showPassword ? 'text' : 'password'}
                      className={`input-field input-pass ${passwordError ? 'input-error' : ''}`}
                      placeholder='Password*'
                      onChange={handlePasswordChange}
                      onFocus={OnPasswordFocus}
                      onBlur={onPasswordBlur}
                    />
                    <div>
                    <button 
                      type="button"
                      className='show-btn'
                      onClick={showPass}>
                      {showPassword ? "Hide" : "Show"}
                    </button>
                    </div>
                    {passwordError && <div className="error-message">{passwordError}</div>}
                  </div>
                  <div className="forgot-password">
                    <Link to="/Forgot-Password">Forget Password?</Link>
                  </div>
         

                  <button
                    type="submit"
                    className={`login-button ${email || password ? "bg-blue" : ""}`}>Login</button>
                
                </form>
                <div className="register">
                  <span>New User?</span>
                  <button type='button' className='Register-btn'>
                    <Link to='/Register'>Register now</Link>
                    </button>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </Wrapper>

    </>
  )
}

export default LoginPage;
