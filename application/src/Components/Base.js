import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";
import call from '../resources/call.png'
import document from '../resources/document.png'
import education from '../resources/education.png'
import user from '../resources/user.png'
import projects from '../resources/projects.png'
import { motion } from "framer-motion"

const Container = styled.div`
margin-top: 8rem;
width: fit-content;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
gap: 3rem;
`
const Icon = styled.div`

`
const Img = styled.img`
width: 50px;
height: 34px;
object-fit: contain;
`

export default function Base() {
  return (
    <>
    <Container >
    <Link to='/about'>
       <Icon>
            <Img src={user}/>
        </Icon>
       </Link>
       <Link to='/education'>
       <Icon >
            <Img src={education}/>
        </Icon>
       </Link>
       <Link to='/projects'>
       <Icon>
            <Img src={projects}/>
        </Icon>
       </Link>
       <Link to='/'>
       <Icon>
            <Img src={document}/>
        </Icon>
       </Link>
       <Link to='/contact'>
       <Icon>
            <Img src={call}/>
        </Icon>
       </Link>
      
   

    </Container>
    </>
  )
}
