import styled from "styled-components";
import {Theme} from '../../Theme'

export const DivAllContent = styled.div`
    display: flex;
    min-height: 86vh;
    width: 100vw;
    justify-content: center;
    padding: 20px 0;
    background-color: ${Theme.colors.bgColorPrimary};
`
export const DivLeft = styled.div`
    display: flex;
    flex-direction: column;
`
export const DivHeader = styled.div`
    display: flex;
    margin-bottom: 30px;
    width: 1000px;
    flex-direction: column;
`
export const DivInfos = styled.div`
    display: flex;
    justify-content: space-between;
`

export const DivDo = styled.div`
    -webkit-box-shadow: 3px 3px 35px 5px rgba(0,0,0,0.2); 
    box-shadow: 3px 3px 35px 5px rgba(0,0,0,0.2);
    margin-top: 30px;
    display: flex;
    max-width: 1000px;
    flex-direction:column;
    border-radius: 10px;
    padding: 28px;
    background-color: white;
    span{
        color:${Theme.colors.primary};
        font-size:14px;
    }
`

export const DivTopDo = styled.div`
    display: flex;
    font-size:16px;
    font-weight: bold;
    padding-bottom:28px;
    align-items: center;
    justify-content: space-between;
    p{
        font-size: 13px;
    }
    
`
export const DivTextDo = styled.div`
    font-size: 16px;
`
export const Button = styled.button`
   padding: 10px 24px;
   border-radius: 20px;
   cursor: pointer;
   font-weight: bold;
   background-color: ${Theme.colors.primary};
   color: white;
   border: 1px solid ${Theme.colors.primary};
   transition: 0.5s;
   margin-left: 15px;
    :hover{
         background-color: transparent;
         color:${Theme.colors.primary} ;
    }
`
export const ButtonConcluido = styled.button`
    padding: 5px 10px;
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
    :disabled{
        background-color: gray;
        border: 1px solid gray ;
        color: #d0d0d0;
    }
`