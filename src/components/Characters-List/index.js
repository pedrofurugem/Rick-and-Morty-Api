import { useState, useEffect } from 'react'
import React, { useContext } from 'react'
import { ThemeContext } from '../../Context-api/ThemeContext'
import FooterInfo from '../footer/index'
import Pagination from '../Pagination/Pagination'
import Character from '../Character/index'
import NavBar from '../NavBar/index'
import styled from 'styled-components'

const CharactersList = () => {
    const { theme } = useContext(ThemeContext)
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

    const charList = character.map(char => <Character  name={char.name} img={char.image}
    gender={char.gender} species={char.species} status={char.status} type={char.type ?? 'not defined'} />)

    return(
        <>
        <section style={{ color: theme.color, backgroundColor: theme.background}}>
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

            <FooterInfo />
        </section>
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
