import React from 'react'
import styled from 'styled-components'
import Avatar from '../Components/Avatar';
import Navbar from '../Components/Navbar';
import { motion } from 'framer-motion';

const Container = styled(motion.div)`
width: 100%;
height: 100vh;
position: relative;
background-image: linear-gradient(to right, #434343 0%, black 100%);
`
const Main = styled(motion.div)`
position: fixed;
width: 80%;
height: 40rem;
background-image: linear-gradient(to right, #cfd9df, #d4dde3, #d8e2e7, #dde6ec, #e2ebf0);
top:0;
bottom: 0;
left: 0;
right: 0;
margin: auto;
border-radius: 5rem;
padding: 2rem;
`

export default function Home() {
  return (
    <>
      <Container>
        <Main
         drag
         dragConstraints={{
           top: -30,
           left: -30,
           right: 30,
           bottom: 30,
         }}
         whileHover={{ scale: 1.1 }}
        >
          <Navbar/>
          <Avatar/>
        </Main>
      </Container>
    </>
  )
}