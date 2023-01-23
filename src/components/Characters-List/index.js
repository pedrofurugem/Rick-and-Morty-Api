import { useState, useEffect } from 'react'
import Pagination from '../Pagination/Pagination'
import Character from '../Character/index'
import NavBar from '../NavBar/index'
import styled from 'styled-components'

async function characterTest(){
    const response = await fetch('https://rickandmortyapi.com/api/character')
    const json = await response.json()
    console.log('Api Rick and Morty: ', json)
}
characterTest()


const CharactersList = () => {
    const [loading, setLoading] = useState(true)
    const [character, setCharacter] = useState([])
    const [currentPageUrl, setCurrentPageUrl] = useState('https://rickandmortyapi.com/api/character');
    const [nextPageUrl , setNextPageUrl] = useState()
    const [prevPageUrl , setPrevPageUrl] = useState()
    const [pages, setPages] = useState()

    useEffect(()=> {
        const url = currentPageUrl
        setLoading(true)
        const fetchData = async ()=> {
            const res = await fetch(url)
            const data = await res.json()
            setCharacter(data.results)
            setLoading(false)
            setNextPageUrl(data.info.next)
            setPrevPageUrl(data.info.prev)
            setPages(data.info.pages)
        }
        fetchData()
    }, [currentPageUrl])
    
    function nextPage(){
        setCurrentPageUrl(nextPageUrl)
    }

    function prevPage(){
        setCurrentPageUrl(prevPageUrl)
    }

    function goToPage(num){
        setCurrentPageUrl(`https://rickandmortyapi.com/api/character?page=${num}`)
    }

    if (loading) return "Loading..."
    const charList = character.map(char => <Character key={Math.floor(Math.random() * 10000)} name={char.name} img={char.image}
    gender={char.gender} species={char.species} status={char.status} type={char.type ?? 'not defined'} />)
    /*
    O Math.floor()método estático sempre arredonda para baixo e retorna o maior inteiro menor ou igual a um determinado número.
    console.log(Math.floor(5.95));
    Expected output: 5
     -///-
    console.log(Math.floor(5.05));
    Expected output: 5
    */

    /*
    O Math.random()método estático retorna um número pseudoaleatório de ponto flutuante que é maior ou igual a 0 e menor que 1, com distribuição aproximadamente uniforme nesse intervalo — que você pode dimensionar para o intervalo desejado. A implementação seleciona a semente inicial para o algoritmo de geração de números aleatórios; não pode ser escolhido ou redefinido pelo usuário.
    */

    return(
        <>
          <header>
            <NavBar />
          </header>

          <Container>
            {charList}
          </Container>

        <PaginationArea>
            <Pagination
                nextPage={nextPageUrl ? nextPage : null}
                prevPage={prevPageUrl ? prevPage : null}
                goToPage={goToPage}
                pages={pages}
            />
        </PaginationArea>
        </>
    )
}

const Container = styled.section`
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: row;
   flex-wrap: wrap
`

const PaginationArea = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
`

export default CharactersList 
