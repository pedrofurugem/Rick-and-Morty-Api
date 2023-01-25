import React, { useContext } from 'react'
import { ThemeContext, themes } from '../../Context-api/ThemeContext'
import styled from 'styled-components'

export const ThemeTogglerButton = (props) => {

    const {theme, setTheme} = useContext(ThemeContext)

    console.log('testando temas', theme)

    return(
        <>
            <div style={{ backgroundColor: theme.background}}>
            <ButtonTheme {...props} onClick={() => setTheme(theme === themes.light ? themes.dark : themes.light)}>Themes</ButtonTheme>
        </div>
        </>
    )
}

const ButtonTheme = styled.button`
    margin: 10px;
    border-radius: 25px;
    width: 80px;
    background-color: #00AFC6;
    color: #FFF;
`