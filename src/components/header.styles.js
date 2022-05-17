import styled from "styled-components";
import { Theme } from '../Theme'

// colors:{
//     primary:'#922c88',
//     secondary:'#3a3a3a',
//     bgColorPrimary:'#F8F8F8'
// }

export const HeaderS = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 30px;
    font-size: 17px;
    a{
        text-decoration: none;
    }
    a:hover{
        text-decoration: underline;
    }
`

export const Li = styled.li`
   display: inline;
   margin-right:20px;
`
export const Button = styled.button`
   padding: 10px 24px;
   border-radius: 10px;
   cursor: pointer;
   background-color: transparent;
   color:  ${Theme.colors.primary};
   border: 1px solid ${Theme.colors.primary};
   transition: 0.5s;
    :hover{
     background-color: ${Theme.colors.primary};
     color: white;
    }
`