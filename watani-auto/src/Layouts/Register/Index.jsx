import React, { useState } from 'react';
import { IoArrowBack } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import Footer from '../../Components/Footer/Index';
import Header from '../../Components/Header/Index';
import { Wrapper } from './Style';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    mobileNumber: '',
    password: '',
    confirmPassword: '',
  });

  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [emailPlaceholder, setEmailPlaceholder] = useState("Email*");
  const [emailError, setEmailError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    if (name === 'email') {
      setEmailError(""); // Reset email error on change
    }
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

    if (!validateEmail(formData.email)) {
      setEmailError(`Please enter the correct email id.`);
      valid = false;
    }

    // Additional validation logic can go here

    if (valid) {
      // Handle form submission logic
      console.log(formData);
    }
  };

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  return (
    <>
      <Wrapper>
        <div className='Register-main'>
          <Header />
          <div className="Register-container">
            <div className="Register-form">
              <div style={{ width: "90%" }}>
                <div className='Back-arrow'>
                  <Link to="/">
                    <IoArrowBack />
                  </Link>
                </div>
                <h1>Create an Account</h1>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>First Name*</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    {isEmailFocused && (
                      <label className="label_holder label-email">
                        Email*
                      </label>
                    )}
                    <input
                      value={formData.email}
                      type="text"
                      name="email"
                      className={`input-field ${emailError ? 'input-error' : ''}`}
                      placeholder={emailPlaceholder}
                      onFocus={onfocus}
                      onBlur={onBlur}
                      onChange={handleChange}
                      required
                    />
                    {emailError && <div className="error-message">&nbsp;&nbsp;&nbsp;{emailError}&nbsp;&nbsp;&nbsp;</div>}
                  </div>
                  <div className="form-group">
                    <label>Mobile Number*</label>
                    <div className="mobile-number-input">
                      <select name="countryCode" defaultValue="+966">
                        <option value="+966">+966</option>
                        {/* Add other country codes here */}
                      </select>
                      <input
                        type="tel"
                        name="mobileNumber"
                        value={formData.mobileNumber}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Password*</label>
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Confirm Password*</label>
                    <input
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>
                      <input type="checkbox" required /> By creating a watani account, I agree to the <a href="#">Terms of Use</a>, and <a href="#">Privacy Notice</a>.
                    </label>
                  </div>
                  <button
                    type="submit"
                    className={`Register-button ${formData.email ? "bg-blue" : ""}`}
                  >Create Account</button>
                </form>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </Wrapper>
    </>
  );
}

export default Register;
