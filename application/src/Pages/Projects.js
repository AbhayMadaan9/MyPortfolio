import React from 'react'
import styled from 'styled-components'
import Leftbar from '../Components/Leftbar'
import logo1 from '../resources/code.png'
import logo2 from '../resources/molecule.png'
import logo3 from '../resources/bitcoin.png'
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';


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
const Timeline = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
padding: 1rem;
`
const TimlineContent = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const Dot = styled.img`
width: 5rem;
height: 5rem;
cursor: pointer;
margin-inline: 15px;
`
const TimelineConnector = styled.hr`
background-color: black;
width: 100%;
height: 1px;
`
function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>ANIMATED UI</DialogTitle>
      
    </Dialog>
  );
}
export default function Projects() {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Container>
        <Leftbar />
        <Main>
          <Heading>
            <Text>PROJECTS</Text>
          </Heading>

          
          <Timeline>
            <TimlineContent onClick={()=>{setOpen(!open)}}>
              <p>Animated UI</p>
              <Dot src={logo1}/>
              <p>Jul 26, 2022</p>
            </TimlineContent>
            <SimpleDialog
        open={open}
        onClose={()=>{setOpen(!open)}}
      />
          <TimelineConnector/>
          <TimlineContent>
             <p>DrugAtlas</p>
              <Dot src={logo1}/>
              <p> Aug 17, 2022</p>
            </TimlineContent>
          <TimelineConnector/>
          <TimlineContent>
             <p>CoronaMap</p>
              <Dot src={logo2}/>
              <p>Aug 23, 2022</p>
            </TimlineContent>
          <TimelineConnector/>
          <TimlineContent>
             <p>RealTimeChatApplication</p>
              <Dot src={logo2}/>
              <p> Oct 15, 2022</p>
            </TimlineContent>
          <TimelineConnector/>
          <TimlineContent>
             <p>EcommerceWebsite</p>
              <Dot src={logo2}/>
              <p> Jan 1, 2023</p>
            </TimlineContent>
          <TimelineConnector/>
          <TimlineContent>
             <p>WeatherApplication-</p>
              <Dot src={logo2}/>
              <p>Jan 5, 2023</p>
            </TimlineContent>
          <TimelineConnector/>
          <TimlineContent>
             <p>SocialMediaApplication</p>
              <Dot src={logo2}/>
              <p>Jan 22, 2023</p>
            </TimlineContent>
          </Timeline>















        </Main>
      </Container>
    </>
  )
}
