import './App.css';
import { createGlobalStyle } from 'styled-components'
import  CharactersList  from './components/Characters-List/index'
import { ThemeProvider } from '../src/Context-api/ThemeContext'
import { ThemeTogglerButton } from '../src/components/ThemeTogglerButton/ThemeToglerButton'

function App() {
  return (
    <>
    <ThemeProvider>
      <GlobalStyle />
      <ThemeTogglerButton />
      <CharactersList />
    </ThemeProvider>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  margin: 0px; 
  padding: 0px;

  body {
    background-image: url('../')
  }
`

export default App;
