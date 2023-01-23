import React from 'react'
import Logo from '../../images/rick-and-morty-logo.png'
import styled from 'styled-components'

const NavBar = () => {
    return(
        <>
          <Title src={Logo} alt="log-title"/>
        </>
    )
}

export default NavBar

const Title = styled.img`
   width: 300px;
   margin-left: 50px;
`