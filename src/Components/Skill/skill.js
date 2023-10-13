import React from 'react'
import "./skill.css"
import webdesg from "../../assets/webdesign.png"
import coding from "../../assets/coding.png"
import backend from "../../assets/backend.png"
import database from "../../assets/database.png"



export default function skill() {
  return (
    <section id="skills">
        <span className='skilltitle'>What i can do</span>
        <span className='skilldesc'></span>
        <div className='skillbars'>
          <div className="skillbar">
                    <img src={backend} alt="" />
                    <div className='skillbartxt'>
                         <h2>Backend Expertise</h2>
                         <p>I am decently proficient with Python framework - Django, gained experience while working with several minor projects. And open to learn any new tech stack with good efficieny in a short span if required!</p>
                    </div>
          </div>

          <div className="skillbar">
                    <img src={webdesg} alt="" />
                    <div className='skillbartxt'>
                         <h2>Web Design</h2>
                         <p>I have a pretty good eye for detailing, and i am a visual thinker. With the required knowledge of the basics, HTML/ CSS and JavaScript. And i have built this very website using ReactJS!</p>
                    </div>
          </div>

          <div className="skillbar">
                    <img src={database} alt="" />
                    <div className='skillbartxt'>
                         <h2>Database</h2>
                         <p>I understand the concept of Database management, which understood while learning the Oracle SQL plus, and i have used PostgreSQL's GUI <i>pgAdmin</i> to establish database connection in a mini Django project! And it is safe to say that i am capable work with any new DBMS or a RDBMS efficiently in a short period of time.</p>
                    </div>
          </div>

          <div className="skillbar">
                    <img src={coding} alt="" />
                    <div className='skillbartxt'>
                         <h2>Programming</h2>
                         <p>I have a good hold on programming languages like Python and JavaScript. With a decent grip in DSA and logic building.</p>
                    </div>
          </div>
        </div>

    </section>
  )
}
