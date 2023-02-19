import React,{useState} from 'react'
import styled from 'styled-components'
import profilePic from '../resources/profilepic.png'
import Base from './Base';

const Section = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: ce;
`
const Container = styled.div`
position: relative;
width: 300px;
height: 300px;
background-image: linear-gradient(to right, #434343 0%, black 100%);
border-radius: 50%;
margin: auto;
display: flex;
justify-content: center;
align-items: center;
justify-items: center;
&hover{
    background-image: linear-gradient(to right, #cfd9df, #d4dde3, #d8e2e7, #dde6ec, #e2ebf0);
}
`
const Info = styled.div`
position: absolute;
display: flex;
align-items: center;
justify-content: center;
width: 100%;
height: 100%;
border-radius: 50%;
&:hover{
    background-color: aliceblue;
    opacity: 0.4;
}
    
`
const Img = styled.img`
position: absolute;
object-fit: contain;
width: 300px;
height: 300px;
`
const Text = styled.h1`
font-family: 'Oswald', sans-serif;
position: absolute;
`
export default function Avatar() {
    const [WhichComp, setWhichComp] = useState(true)

    return (
        <>
            <Section>
            <Container>
                <Img src={profilePic}/>
                <Info onMouseOver={()=>{setWhichComp(!WhichComp);}} onMouseOut={()=>{setWhichComp(!WhichComp);}}>
                    {WhichComp?"":<Text>Abhay Madaan</Text>}
                </Info>
            </Container>
            <Base/>
            </Section>
        </>
    )
}
