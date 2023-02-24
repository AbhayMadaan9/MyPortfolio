import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";
import call from '../resources/call.png'
import document from '../resources/document.png'
import education from '../resources/education.png'
import user from '../resources/user.png'
import projects from '../resources/projects.png'
import { motion } from "framer-motion"
import Tooltip from '@mui/material/Tooltip';


const Container = styled(motion.div)`
width: fit-content;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
gap: 3rem;
margin-top: 6rem;
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
      <Container
        initial={{ scale: 0 }}
        animate={{ rotate: 0, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Link to='/about'>
          <Tooltip title='About'>
            <Icon>
              <Img src={user} />
            </Icon>
          </Tooltip>
        </Link>
        <Link to='/education'>
          <Tooltip title='Education'>
            <Icon >
              <Img src={education} />
            </Icon>
          </Tooltip>
        </Link>

        <Link to='/projects'>
          <Tooltip title='Projects'>
            <Icon>
              <Img src={projects} />
            </Icon>
          </Tooltip>
        </Link>
        <Link to='/'>
          <Tooltip title='resume'>
            <Icon>
              <Img src={document} />
            </Icon>
          </Tooltip>
        </Link>

        <Link to='/contact'>
          <Tooltip title='Contacts'>
            <Icon>
              <Img src={call} />
            </Icon>
          </Tooltip>
        </Link>



      </Container>
    </>
  )
}
