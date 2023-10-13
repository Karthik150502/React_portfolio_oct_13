import React from 'react'
import Navbar from './Components/Navbar/navBar'
import Intro from './Components/Intro/intro'
import Skill from "./Components/Skill/skill"
import Work from "./Components/Portfolio/works"
import Contact from './Components/Contact/contact'
import Footer from './Components/Footer/footer'


const mainStyle = {
  height:"auto"
}


export default function App() {
  return (
    <div style={mainStyle}>
      <Navbar/>
      <Intro/>
      <Skill/>
      <Work/>
      <Contact/>
      <Footer/>

    </div>
  )
}
