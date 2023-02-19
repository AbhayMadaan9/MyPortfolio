import React from 'react'
import styled from 'styled-components'
import Pic from '../resources/LeftBarPhoto.jpg' 
import call from '../resources/call.png'
import document from '../resources/document.png'
import education from '../resources/education.png'
import user from '../resources/user.png'
import projects from '../resources/projects.png'

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: auto;
background-image: linear-gradient(to right, #cfd9df, #d4dde3, #d8e2e7, #dde6ec, #e2ebf0);
height: 94vh;
padding: 10px;
border-radius: 10px;
margin: 10px;
`
const Icons = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 20px;
`
const Icon = styled.div`

`
const Img = styled.img`
width: 50px;
height: 34px;
object-fit: contain;
border-radius: ${props=>props.isPic?"50%":0};
`


export default function () {
  return (
    <>
    
    <Container>
        <Icons>
          <Icon isPic={true}>
            <Img src={Pic}/>
          </Icon>
          <Icon>
            <Img src={user}/>
          </Icon>
          <Icon>
            <Img src={education}/>
          </Icon>
          <Icon>
            <Img src={projects}/>
          </Icon>
          <Icon>
            <Img src={document}/>
          </Icon>
        <Icon>
            <Img src={call}/>
          </Icon>
        </Icons>
      
        
    </Container>
    
    </>
  )
}
