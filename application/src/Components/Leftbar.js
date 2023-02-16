import React from 'react'
import styled from 'styled-components'
import Pic from '../resources/LeftBarPhoto.jpg' 


const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: auto;
background-color: gainsboro;
height: 100vh;
`
const Icons = styled.div`
`
const Icon = styled.div`
`
const Img = styled.img`
`

export default function () {
  return (
    <>
    <Container>
        <Icons>
          <Icon>
            <Img/>
          </Icon>
          <Icon>
            <Img/>
          </Icon>
          <Icon>
            <Img/>
          </Icon>
          <Icon>
            <Img/>
          </Icon>
          <Icon>
            <Img/>
          </Icon>
        </Icons>
      
        
    </Container>
    </>
  )
}
