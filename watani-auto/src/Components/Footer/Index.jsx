import React from 'react'
import { Link } from 'react-router-dom'
import { Wrapper } from './Style.jsx'

const Footer = () => {
  return (
    <>
    <Wrapper>
        <div className='Footer-Container'>
            <ul className='list'>
                <li className='list-items'>
                    <Link to="#">About Us</Link>
                </li>
                <li className='list-items'>
                    <Link to="#">Terms and Conditions</Link>
                </li>
                <li className='list-items'>
                    <Link to="#">Privacy Policy</Link>
                </li>
                <li className='list-items'>
                    <Link to="#">Help</Link>
                </li>
                <li className='list-items'>
                    <Link to="#">Careers</Link>
                </li>
                <li className='list-items'>
                    <Link to="#">Cancellation Policy</Link>
                </li>
                
            </ul>
        </div>
    </Wrapper>
   
    </>
  )
}

export default Footer
