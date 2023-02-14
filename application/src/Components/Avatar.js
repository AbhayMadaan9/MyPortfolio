import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";

const Container = styled.div`
position: relative;
width: 300px;
height: 300px;
background: red;
border-radius: 50%;
margin: auto;
`

const Icons = styled.div`
position: absolute;

`
const Icon = styled.div`
position: absolute;
`
export default function Avatar() {
    return (
        <>
            <Container>
                <Icons>
                    <Icon><Link to='/about'>About</Link></Icon>
                    <Icon><Link to='/education'>Education</Link></Icon>
                    <Icon><Link to='/projects'>Projects</Link></Icon>
                    <Icon><Link to='/contact'>Contact</Link></Icon>
                    <Icon><Link to='/resume'>Resume</Link></Icon>
                </Icons>
            </Container>
        </>
    )
}
