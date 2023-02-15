import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import BigSpinner from './Components/BigSpinner'
import Home from './Pages/Home'
import About from './Pages/About'
import Education from './Pages/Education'
import Projects from './Pages/Projects'
import Contact from './Pages/Contact'
import InputForm from './Pages/InputForm';
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from 'styled-components';


const router = createBrowserRouter([
  {
    path: "/",
    element: <InputForm/>
  },
  {
    path: "/home",
    element: <Home />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/contact",
    element: <Contact />
  },
  {
    path: "/education",
    element: <Education />
  },
  {
    path: "/projects",
    element: <Projects/>
  },
]);


export default function App() {
  const theme = {
    breakpoints:{
      xs:"0px",
      sm:"600px",
      md: '900px',
      lg:"1200px",
      xl:"1536px"
    }
  }
  return (
    <AnimatePresence>
      <ThemeProvider theme={theme}>
    <RouterProvider
    router={router}
    fallbackElement={<BigSpinner />}
  />
  </ThemeProvider>
  </AnimatePresence>
  )
}
