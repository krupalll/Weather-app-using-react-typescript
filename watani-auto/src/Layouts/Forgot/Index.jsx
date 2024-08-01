import React, { useState } from 'react';
import { IoArrowBack } from 'react-icons/io5';
import { Link } from 'react-router-dom';

import Footer from '../../Components/Footer/Index';
import Header from '../../Components/Header/Index';
import { Wrapper } from './Style';

const Forgot = () => {
    const [email, setEmail] = useState("");
    const [isEmailFocused, setIsEmailFocused] = useState(false);
    const [emailPlaceholder, setEmailPlaceholder] = useState("Email*");
    const [emailError, setEmailError] = useState("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setEmailError(""); // Reset email error on change
      };

      const onfocus = () => {
        setEmailPlaceholder("ahemedzaidi@wataniauto.com");
        setIsEmailFocused(true);
      };
    
      const onBlur = () => {
        setEmailPlaceholder("Email*");
        setIsEmailFocused(false);
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        let valid = true;

        if (!validateEmail(email)) {
            setEmailError(`Please enter the correct email id.`);
            valid = false;
    }
      };

      const validateEmail = (email) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
      };
    

  return (
    <>
      <Wrapper>
        <div className='Forgot-main'>
          <Header />
          <div className="Forgot-container">
          <div className="Forgot-form">
          <div style={{ width: "90%" }}>
                <div className='Back-arrow'>
                    <Link to="/">
                        <IoArrowBack />
                    </Link>
                </div>
                <h1>Forgot Password</h1>
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
                  
                  <button
                    type="submit"
                    className={`Forgot-button ${email ? "bg-blue" : ""}`}>Send Link</button>
                </form>
            </div>
              </div>
          </div>
          <Footer />
        </div>
      </Wrapper>

    </>
  )
}

export default Forgot;
