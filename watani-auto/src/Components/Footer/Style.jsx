import styled from 'styled-components'
import Colors from '../../assets/Colors/Index';

export const Wrapper = styled.div`
    .Footer-Container{
        display:flex;
        align-items:center;
        justify-content:center;
        
    }
    .list-items {
        list-style:none;  
    }

    a{
        color:${Colors.WHITE};
        font-size:18px;
        font-weight:400;
    }

    .list{
        display:flex;
        align-items:center;
        justify-content:space-between;
        width:80%;
        position:absolute;
        bottom: 20px;
    }
`
