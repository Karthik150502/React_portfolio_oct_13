import "./works.css"
import form from "../../assets/loginproj.png"
import djangocrm from "../../assets/djangoportfolio.png"
import djangoportfolio from "../../assets/Djangocrm.png"
import loadingani from "../../assets/loading_animation2.png"
import gamesite from "../../assets/gamesite.png"



import React from 'react'

export default function works() {
  return (
    <section id="works">
        <div className="scroller">
        <div class="main">
        <h1>My Works</h1>
        <p class="titledisc">Here are some of my major works of Frontend projects using HTML/ CSS/ JS and Backend using Python framework <i>Django</i> with the GitHub's source code!</p>
        <ul class="cards">

            <li class="cards_item">
            <div class="card">
                <div class="card_image"><img src={form}/></div>
                <div class="card_content">
                <h2 class="card_title">A basic registration form with subtle styling</h2>
                <p class="card_text">A basic registraion form, with subtle styling added with some basic error validations and error notifications!.</p>
                <div className="btns">

                    <a href="https://github.com/Karthik150502/LogIn_Page" target="_blank" class="btn card_btn">Source</a>
                    <a class="btn card_btn">Demo</a>
                </div>
                </div>
            </div>
            </li>




            <li class="cards_item">
            <div class="card">
                <div class="card_image"><img src={gamesite}/></div>
                <div class="card_content">
                <h2 class="card_title">An modern day Online Games Page</h2>
                <p class="card_text">An online Games site, with eye soothing HTML and CSS styling.</p>
                <div className="btns">
                    <button class="btn card_btn">Source dode</button>
                    <button class="btn card_btn">Demo</button>
                </div>
                </div>
            </div>
            </li>

            <li class="cards_item">
            <div class="card">
                <div class="card_image"><img src={loadingani}/></div>
                <div class="card_content">
                <h2 class="card_title">A unique Loading animation - Only with HTML/ CSS</h2>
                <p class="card_text">A aesthetic loading animation, with an aesthetic font! Only done using HTML and CSS, one of the best from my repo.</p>
                <div className="btns">
                    <button class="btn card_btn">Source dode</button>
                    <button class="btn card_btn">Demo</button>
                </div>
                </div>
            </div>
            </li>
            
            <li class="cards_item">
            <div class="card">
                <div class="card_image"><img src={djangocrm}/></div>
                <div class="card_content">
                <h2 class="card_title">Django - An Interactive CRM app!</h2>
                <p class="card_text">A GUI prototype for managing customer database, with some basic CRUD operations.</p>
                <div className="btns">
                    <button class="btn card_btn">Source dode</button>
                    <button class="btn card_btn">Demo</button>
                </div>
                </div>
            </div>
            </li>

            <li class="cards_item">
            <div class="card">
                <div class="card_image"><img src={djangoportfolio}/></div>
                <div class="card_content">
                <h2 class="card_title">Django - Portfolio with SMTP</h2>
                <p class="card_text">A Django portfolio, with Mail transfer protocol enabled.</p>
                <div className="btns">
                    <button class="btn card_btn" >Source dode</button>
                    <button class="btn card_btn">Demo</button>
                </div>
                </div>
            </div>
            </li>
        </ul>
        </div>
        </div>
    </section>
  )
}
