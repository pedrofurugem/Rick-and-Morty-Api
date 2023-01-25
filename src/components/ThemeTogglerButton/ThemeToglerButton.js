import React, { useContext } from 'react'
import { ThemeContext, themes } from '../../Context-api/ThemeContext'

export const ThemeTogglerButton = (props) => {

    const {theme, setTheme} = useContext(ThemeContext)

    console.log('testando temas', theme)

    return(
        <>
        <button {...props} onClick={() => setTheme(theme === themes.light ? themes.dark : themes.light)}> 
        Change Theme</button>
        </>
    )
}