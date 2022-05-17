import styled from "styled-components";
import { Theme } from '../../Theme'
export const DivModalAll = styled.div`
    position: absolute;
    display: flex;
    justify-content: end;
    height: 100vh;
    top: 0;
    width: 100%;
    background-color: rgb(0, 0, 0, 0.4);
`
export const DivModalContent = styled.div`
    width: 380px;
    background-color: white;
    form{
        padding:0 20px;
        font-size: 15px;
    }
    label{
        color: #212529;
        margin-bottom: 8px;
    }
`
export const Input = styled.input`
        outline: 0;
        border: 0;
        border: 1px solid #d7d7d7;
        padding: 5px 10px;
        margin-bottom: 15px;
        font-size: 15px;
        
        transition: 0.3s;
        :focus{
            border: 1px solid ${Theme.colors.primary};
        }
`
export const Select = styled.select`
        outline: 0;
        border: 0;
        border: 1px solid #d7d7d7;
        padding: 5px 10px;
        margin-bottom: 15px;
        font-size: 15px;
        transition: 0.3s;
        :focus{
            border: 1px solid ${Theme.colors.primary};
        }
`
export const Textarea = styled.textarea`
        outline: 0;
        border: 0;
        padding: 5px 10px;
        border: 1px solid #d7d7d7;
        margin-bottom: 15px;
        font-size: 15px;
        transition: 0.3s;
        :focus{
            border: 1px solid ${Theme.colors.primary};
        }
`
export const DivHeaderModal = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    margin-bottom: 50px;
    border-bottom: 1px solid #d7d7d7;
    button{
        cursor: pointer;
        border: 0;
        background-color:transparent;
        font-weight: bold;
        font-size: 20px;
    }
`
export const DivLabelInput = styled.div`
    display: flex;
    flex-direction: column;
    
`
export const Button = styled.button`
   padding: 10px 24px;
   border-radius: 20px;
   cursor: pointer;
   background-color: transparent;
   color:  ${Theme.colors.primary};
   border: 1px solid ${Theme.colors.primary};
   font-weight: bold;
   transition: 0.5s;
   margin-left: 20px;
    :hover{
     background-color: ${Theme.colors.primary};
     color: white;
    }
`
export const ButtonCancel = styled.button`
   padding: 10px 24px;
   border-radius: 20px;
   cursor: pointer;
   background-color: transparent;
   color: #4556AC;
   border: 1px solid #4556AC;
   font-weight: bold;
   transition: 0.5s;
   margin-left: 20px;
    :hover{
     background-color: #4556AC;
     color: white;
    }
`
export const DivButtons = styled.div`
  width: 100%;
  border-top: 1px solid #d7d7d7;
  margin-top: 50px;
  padding-top:50px ;
  display: flex;
  justify-content: center;
 
`