import { useState, useEffect } from 'react'
import React, { useContext } from 'react'
import { ThemeContext } from '../../Context-api/ThemeContext'
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
    const { theme } = useContext(ThemeContext)
    const [loading, setLoading] = useState(true)
    const [character, setCharacter] = useState([])
    const [currentPageUrl, setCurrentPageUrl] = useState('https://rickandmortyapi.com/api/character');
    const [nextPageUrl , setNextPageUrl] = useState()
    const [prevPageUrl , setPrevPageUrl] = useState()
    const [pages, setPages] = useState()
    const [search, setSearch] = useState("")
    const [searchParam] = useState(["species", "status", "type"])

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

    const searchCharacter = character.filter((char) => {
        return searchParam.some((newCharacter)=> {
            return(
                char[newCharacter]?.toString()?.toLowerCase()?.indexOf(search.toLowerCase()) > -1
            );
        });
    });

    return(
        <>
        <section style={{ color: theme.color, backgroundColor: theme.background}}>
            <header>
                <NavBar />

                <div>
                 <label htmlFor="search-form">
                    <input 
                    type="search"
                    name="search-form"
                    id="search-form"
                    className="search-input"
                    placeholder="Search for Character"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    />
                 <span> Search characters here</span>
                </label> 
            </div>
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
