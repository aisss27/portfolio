import styled from "styled-components";
import {theme} from "../../styles/Theme";


export const SectionTitle = styled.h2`
  text-align: center;
  letter-spacing: 5px;
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 600;
  font-size: 36px;
  margin-bottom: 90px;
  
  position: relative;
  &::before{
    content: "";
    display: inline-block;
    width: 55px;
    height: 1px;
    background-color: ${theme.colors.accent};

    position: absolute;
    left: 50%;
    bottom: -30px;
    transform: translateX(-50%);
    
    
    
  }
`

