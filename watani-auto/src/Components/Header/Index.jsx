import React from 'react'
import {  RiArrowDropDownLine } from '../../assets/Icons/Index'
import { Background1, WataniLogo } from '../../assets/Images/Index'
import LoginPage from '../../Layouts/LoginPage/Index'
import { Wrapper } from './Style'

const Header = () => {
  return (
    <>
    <Wrapper>
    <div className='Main-container'>
    <div className='Header-container'>
        <div className='Header'>
           <img src={WataniLogo} alt=""/>
           <div class="dropdown">
              <div ton class="dropbtn">English <span> <RiArrowDropDownLine/></span> </div>
              <div class="dropdown-content">
                 <a href="#" onclick="optionSelected('Option 1')">Eng</a>
                  <a href="#" onclick="optionSelected('Option 2')">عربي</a>
              </div>
          </div>
        </div>
    </div>
    </div>
    
    </Wrapper>
    </>
  )
}

export default Header
