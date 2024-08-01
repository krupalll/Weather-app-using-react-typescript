import styled from 'styled-components'
import Colors from '../../assets/Colors/Index';

export const Wrapper = styled.div`
.Main-container{
    display:flex;
    justify-content:center;
    align-items:center;
    background: ${Colors.LINEAR_GRADIENT2};
    box-shadow: ${Colors.LOGO_SHADOW};
    height:80px;
  }

  .Header-container{
    padding:20px;
    width:85%;
    
  }

  .Header{
    display: flex;
    justify-content:space-between;
    align-items:center;
  }
  
  .dropdown {
    position: relative;
    display: inline-block;
}

.dropbtn{
    color:${Colors.WHITE};
    background: none;
    outline:none;
}
.dropdown-content {
    display: none;
    position: absolute;
    // background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
}

.dropdown-content a {
    color: ${Colors.WHITE};
    text-align:center;
    padding: 12px 10px;
    text-decoration: none;
    display: block;
    
}

.dropdown-content a:hover {
    background-color: rgba(12, 11, 11,0.16);
}

.dropdown:hover .dropdown-content {
    display: block;
    position:absolute;
    left: -60px;
    top: 25px;
}
  
.dropbtn span{
    font-size: 25px;
    position: absolute;
    top:-3px;
}
`