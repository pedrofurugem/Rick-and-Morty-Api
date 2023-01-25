import { createContext } from 'react'
import { useState } from 'react'

export const themes = {
    dark: {
        background: '#696969', //DimGray
        color: '#FFF'
    },
    light: {
        background: '#E6E6FA', //	Lavender
        color: '#FFF'
    }
}

export const ThemeContext = createContext({})

export const ThemeProvider = (props) => {
    const [theme, setTheme] = useState(themes.light)

    return(
        <ThemeContext.Provider value={{theme, setTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}