import React from 'react'
import "./intro.css"
import mypic from "../../assets/myimage.png"
import { Link } from 'react-scroll'

export default function Intro() {
  return (
        <section id="intro">
          <div className="introcont">
            <span className="hello">Hello,</span>
            <span className="introtxt">I'm <span className='introname'>Karthik J</span><br/>Aspiring Full Stack Developer</span>
            <p className="intropara">I am an aspiring full stack developer, and i am fully motivated to jump into the ocean of web development!</p>
            <Link><button className="btn">Hire me!</button></Link>
          </div>
        <img src={mypic} alt="Profile" className="bg" />
      </section>
  )
}
