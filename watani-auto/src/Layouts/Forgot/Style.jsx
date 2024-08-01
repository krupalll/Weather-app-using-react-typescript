import styled from 'styled-components'
import Colors from '../../assets/Colors/Index';
import { Background1 } from '../../assets/Images/Index';

export const Wrapper = styled.div`
body, html {
  height: 100%;
  margin: 0;
  font-family: Arial, sans-serif;

}

.Forgot-main{
  background: ${Colors.LINEAR_GRADIENT1},url(${Background1});
  
  min-height: 1024px;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position:relative;
}

.Forgot-container {
  position:absolute;
  top:25%;
  left:57%;
  width: 500px;
  background-image: url('/background.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;

}

.Forgot-form {
  display: flex;
  justify-content: center;
  align-items: center;
  height:400px;
  width:80%;
  background: rgba(255, 255, 255, 0.1);
  padding: 20px;
  text-align: center;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.Back-arrow {
  
  text-align:left;
  position:absolute;
  top:45px;
  
}

.Back-arrow a{
  color: ${Colors.WHITE};
  font-size:25px;

}

h1 {
  margin-top:65px;
  color: white;

  font-family: Sofia Pro;
  font-size: 32px;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: 0.5899999737739563px;
  text-align: left;
  margin-bottom:65px;
}

.input-container {
  position: relative;
  margin-bottom: 15px;
  text-align: left;
}


input {
  width: 100%;
  height:50px;
  background-color: transparent;
  border: 2px solid #FFFFFF80;
  color:${Colors.WHITE};
  padding: 10px;
  box-sizing: border-box;
  outline:none;
  
  margin-bottom:75px;
  position:relative;
}

label {
  color: ${Colors.WHITE};
  transition: all 0.3s ease;
}

.lable-email{
  position: absolute;
  top: -22px; 
}

.input-container input:focus + label{
  display:inline-block;
}
::placeholder{
  color: ${Colors.WHITE};
}



.Forgot-button {
  width: 100%;
  padding: 10px;
  border:none;
  color:${Colors.WHITE};
  font-family: Sofia Pro;
  font-size: 20px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0.5899999737739563px;
  text-align: center;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0.04) 100%);

  cursor: pointer;
  // margin-top:95px;
}



.input-container input:focus + .show-btn{
  top:32px;
}

.bg-blue{
  background : ${Colors.LINEAR_GRADIENT3};
}

.input-error {
  border-color: red;
}

.error-message {
  background-color: #e60000;
    color: white;
    padding: 10px 20px;
    position: absolute;
    top: 5px;
    left: -285px;
}

.error-message::after {
  content: '';
  position: absolute;
  top: 50%;
  right: -8px;
  transform: translateY(-50%);
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-left: 10px solid #e60000;
}

`;