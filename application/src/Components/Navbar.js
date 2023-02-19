import React from 'react'
import styled from 'styled-components'
import codingNinja from '../resources/codingNinja.jpg'
import GFG from '../resources/icons8-geeksforgeeks-48.png'
import facebook  from '../resources/icons8-facebook-48.png'
import instagram from '../resources/icons8-instagram-48.png'
import linkedin from '../resources/icons8-linkedin-48.png'

const Container = styled.div`
margin: 0;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
@media (max-width: ${props=>props.theme.breakpoints.sm}){
justify-content: center;
}
`
const Left = styled.div`
display: flex;
flex-direction: row;
align-items: center; 
justify-content: center;
gap: 10px;
`
const Right = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
gap: 10px;
@media (max-width: ${props=>props.theme.breakpoints.sm}){
display: none;
}
`
const Item = styled.div`
&hover{
  cursor: pointer;
}
`
const Text = styled.h2`
font-family: 'Oswald', sans-serif;
`
const Link = styled.a`
text-decoration: none;
color: black;
cursor: pointer;
`
const Img = styled.img`
width: 24px;

`

export default function Navbar() {
  const weeks = ["#MondayFunday", "#TransformationTuesday", " #WorkoutWednesday","#ThankfulThursday","#FearlessFriday","#SaturdayNightFever","#StartupSunday"];
  const months = ["January", "February", "March","April","May","June","Juy","August", "September","October","November","December"];
  function getWeek(){
    const event = new Date();
    const ind = event.getDay();
    if(ind == 0) return weeks[6];
    return weeks[ind-1];
  }
  function getTime(){
    const event = new Date();
    const indD = event.getDate();
    const indM = event.getMonth();
    const indY = event.getFullYear();
    const obj = {
      date: indD,
      month: months[indM],
      year: indY
    }
    return obj;
  }

  return (
    <>
    <Container>
      <Left>
        <Item>
          <Text> {getWeek()}</Text>
        </Item>
        <Item>
          <Text>{getTime().date + " " + getTime().month + " " + getTime().year}</Text>
        </Item>
      </Left>
      <Right>
        <Item>
          <Link href='https://www.linkedin.com/in/abhay-madaan-709175205/' target='blank'><Img src={linkedin}/></Link>
        </Item>
        <Item>
          <Link href='https://www.facebook.com/abhay.madaan.568/' target='blank'><Img src={facebook}/></Link>
        </Item>
        <Item>
          <Link href='https://www.instagram.com/madaan_abhay/' target='blank'><Img src={instagram}/></Link>
          
        </Item>
        <Item>
          <Img src={codingNinja}/>
        </Item>
        <Link>
        <Item>
          <Link href='https://auth.geeksforgeeks.org/user/madaanabhay9/' target='blank'><Img src={GFG}/></Link>
          
        </Item>
        </Link>
      </Right>
    </Container>
    </>
  )
}
