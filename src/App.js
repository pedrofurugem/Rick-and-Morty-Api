import './App.css';
import { createGlobalStyle } from 'styled-components'
import  CharactersList  from './components/Characters-List/index'

function App() {
  return (
    <>
     <GlobalStyle />
     <CharactersList />
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  margin: 0px; 
  padding: 0px;
`

export default App;
