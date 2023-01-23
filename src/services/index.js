async function getCharacters(page){
    let response = await fetch(`https://rickandmortyapi.com/api/character/?page`)
    let data = await response.json()
    return await data
}

export { getCharacters }