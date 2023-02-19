import React from 'react'
import Leftbar from '../Components/Leftbar'
import styled from 'styled-components'
import call from '../resources/Calls.png' 
import screen from '../resources/call2.png'

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
const Info = styled.div`
`
const Icons = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
flex-wrap: wrap;
`
const Img = styled.img`
width: 5rem;
height: 5rem;
`
const Icon = styled.div`
display: flex;
flex-direction: row;
gap: 15px;
align-items: center;
`
const Footer = styled.div`
`
const Words0 = styled.div``
const Words1 = styled.div``
const Words2 = styled.div``
const Words3 = styled.div``


export default function Contact() {
  return (
    <>
    <Container>
    <Leftbar/>
      <Main>
        <Heading>
          <Text>CONTACT</Text>
        </Heading>
        <Info>
          <h1>Feel free to contact me!</h1>
          <h3>Let's stay connected! If you have any questions or inquiries, please don't hesitate to reach out to me. I'm always open to networking and meeting new people. You can find me on LinkedIn or send me an email at <a href="mailto: madaanabhay9@gmail.com">madaanabhay9@gmail.com</a>. I'll do my best to respond as soon as possible. Thank you for visiting my website!</h3>
        </Info>
        <Icons>
          <Icon>
            <Img src={screen}/>
            <Words0><h1>My website Link</h1></Words0>
          </Icon>
          <Icon>
            <Img src={call}/>
            <Words0><h1>+919999467336</h1></Words0>
          </Icon>
        </Icons>
        <Footer>
          <Text>THANKS FOR PAITENCE!</Text>
        </Footer>
      </Main>
      
    </Container>
    </>
  )
}
