import React from 'react'
import {
Li,
Button,
HeaderS
} from './header.styles'
import Logo from './logo/Logo'
function Header() {
  return (
    <HeaderS>   
         <nav>
            <ul>
                <Li>
                    <a href="#">Contact</a>
                </Li>
                <Li>
                    <a href="#">About</a>
                </Li>
            </ul>
        </nav>   
        <Logo />
        <div>
            <Button>Login</Button>
        </div> 
    </HeaderS>
  )
}

export default Header