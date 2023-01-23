import React from 'react'
import styled from 'styled-components'

const Character = ({ img, name, gender, species, status, type}) => {
    return(
        <Card>
            <PerfilCard>
                <ImgCharacter src={img} alt="" />
                <h2>{name}</h2>
            </PerfilCard>
            <Description>
                <p>gender: {gender}</p>
                <p>species: {species}</p>
                <p>status: {status}</p>
                <p> type: {type !== "" ? type : 'not type'}</p>
            </Description>
        </Card>
    )
}

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 320px;
  margin: 15px;
  background-color: #2F4F4F;
  border-radius: 25px;
  border: 1px solid black;
  text-align: center;
`

const PerfilCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 10px;
`

const Description = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
`

const ImgCharacter = styled.img`
    width: 150px;
    border-radius: 50%;
`

export default Character 