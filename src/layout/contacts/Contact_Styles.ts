import styled from "styled-components";
import {theme} from "../../styles/Theme";

const Contact = styled.section`
    
`

const Form = styled.form`
  max-width: 540px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 16px;  
  margin: 0 auto;
  
  textarea{
    resize: none;
    height: 155px;
  }
`

const Field = styled.input`
  width: 100%;
  background-color: ${theme.colors.secondaryBg};
  border: 1px solid ${theme.colors.borderColor};
  padding: 7px 15px;
  
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 12px;
  letter-spacing: 0.05em;
  
  color: ${theme.colors.font};
  
  &::placeholder{
    color: ${theme.colors.placeholderColor};
    text-transform: capitalize;
  }
  
  &:focus-visible{
    outline: 1px solid ${theme.colors.borderColor};
  }
`

export const S = {
    Contact,
    Form,
    Field
}