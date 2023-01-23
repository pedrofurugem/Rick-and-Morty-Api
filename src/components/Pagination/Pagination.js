import React from 'react'
import styled from 'styled-components'

const Pagination = ({ nextPage, prevPage, goToPage, pages }) => {
    let pageButtons = []
    for(let i = 1; i <= pages; i++){
        pageButtons.push(<PageButtons key={i} onClick={() => goToPage(i)}>{i}</PageButtons>)
    }

    return (
        <div>
            {prevPage && (<ButtonPrev onClick={prevPage}>Previous</ButtonPrev>)}
            {pageButtons}
            {nextPage && (<ButtonNext onClick={nextPage}>Next</ButtonNext
            >)}
        </div>
    )
}

const PageButtons = styled.button`
    margin: 3px;
    width: 30px;
    height: 25px;
    border-radius: 10px
`

const ButtonPrev = styled.button`
   margin: 3px;
   width: 70px;
   height: 25px;
   border-radius: 10px
`

const ButtonNext = styled.button`
   margin: 3px;
   width: 70px;
   height: 25px;
   border-radius: 10px
`


export default Pagination