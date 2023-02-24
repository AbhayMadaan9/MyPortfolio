import React from 'react'
import styled from 'styled-components'
import Leftbar from '../Components/Leftbar'



const Container = styled.div`
margin: 0;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
background-image: linear-gradient(to right, #434343 0%, black 100%);
`
const Main = styled.div`
width: 100%;
height: 94vh;
background-image: linear-gradient(to right, #cfd9df, #d4dde3, #d8e2e7, #dde6ec, #e2ebf0);
border-radius: 10px;
padding: 10px;
display: flex;
flex-direction: column;
gap: 25px;
`
const Heading = styled.div`
border: 2px solid black;
width: auto;
border-radius: 10px;
height: fit-content;
`
const Text = styled.h1`
font-family: 'Oswald', sans-serif;
text-align: center;
font-size: 50px;
`


export default function About() {
  return (
    <>
     <Container>
        <Leftbar />
        <Main>
          <Heading>
            <Text>ABOUT</Text>
          </Heading>


        </Main>
      </Container>
    </>
  )
}
