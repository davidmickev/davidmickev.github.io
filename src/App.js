import React from 'react';
import Fade from 'react-reveal/Fade';
import styled from 'styled-components';
import './App.css';
// Rand color interaction with header
import randColor from './headerStyle';
// Froggy footer
import frog from './images/froggy.jpg';
import svgAnim from './images/liquidMask1.svg';
import './loader.scss';
// GQL4 query and display
import Ghdata from './displayCards.js';
// Saving resume PDF
import { saveAs } from 'file-saver';
// Icons for socials using fortawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faLinkedin, faMailchimp } from '@fortawesome/free-brands-svg-icons';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
library.add(faGithub,faLinkedin,faMailchimp,faFilePdf);

export const Icon = styled.div
  `width: 9ch;
height: 9ch;
margin-right: 2ch;
background: transparent;
border-radius: ${props => props.radius};
filter: drop-shadow(2px 2px 5px rgba(192,192,192, 0.5));
background-size: cover;
background-position: center center;
background-image: url(${props => props.icon});
transition: box-shadow 1s;
will-change: transform;
cursor: pointer;
color: black;
`

const openInNewTab = (url) => {
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
  if (newWindow) newWindow.opener = null
};

const saveFile = () => {
  saveAs(
    process.env.PUBLIC_URL +'/dmr.pdf',
    "Deividas Mickevicius Resume.pdf"
  );
};

function App() {
  
  return (
    <body>
    <div className="App">
      <div id="links">
        <button className="button" style={{ color: '#0e76a8' }} onClick={() => {openInNewTab("https://www.linkedin.com/in/davidmickev/")}}>
          <FontAwesomeIcon  size = "4x" icon={faLinkedin} />
          <span id ="textlink"> Linkedin </span>
        </button>
      
        <button className="button" style={{ color: '#333' }} onClick={() => {openInNewTab("https://github.com/davidmickev")}}>
          <FontAwesomeIcon  size = "4x" icon={faGithub} />
          <span id ="textlink">  Github </span>
        </button>

        <button className="button" style={{ color: 'red' }} onClick={(saveFile)}  >
          <FontAwesomeIcon size = "4x" icon={faFilePdf}></FontAwesomeIcon>
          <span id ="textlink"> Resume </span>
        </button>

        <button className="button" style={{ color: 'black' }} onClick={() => {openInNewTab("mailto:davidmickev@gmail.com")}}>
          <FontAwesomeIcon  size = "4x" icon={faMailchimp} />
          <span id ="textlink"> Contact </span>
        </button>
      </div>

      <section className="et-hero-tabs" data-image-source="./icons/dmlogo.png">
        <h1>
          <div id="name">
            <span className="logo">
              {/*Name Animation*/}
              <img id="./icons/dmlogo.png" alt=""></img>
              <span id="1" className="letter" style={{ color: randColor() }} >D</span>
              <span id="2" className="letter" style={{ color: randColor() }} >a</span>
              <span id="3" className="letter" style={{ color: randColor() }} >v</span>
              <span id="4" className="letter" style={{ color: randColor() }} >i</span>
              <span id="5" className="letter" style={{ color: randColor() }} >d</span> <br/>
              <span id="6" className="letter" style={{ color: randColor() }} >M</span>
              <span id="7" className="letter" style={{ color: randColor() }} >i</span>
              <span id="8" className="letter" style={{ color: randColor() }} >c</span>
              <span id="9" className="letter" style={{ color: randColor() }} >k</span>
              <span id="10" className="letter" style={{ color: randColor() }} >e</span>
              <span id="11" className="letter" style={{ color: randColor() }} >v</span>
              <span id="12" className="letter" style={{ color: randColor() }} >i</span>
              <span id="13" className="letter" style={{ color: randColor() }} >c</span>
              <span id="14" className="letter" style={{ color: randColor() }} >i</span>
              <span id="15" className="letter" style={{ color: randColor() }} >u</span>
              <span id="16" className="letter" style={{ color: randColor() }} >s</span>
              <br></br>

              <p>
              I'm a software engineer from Chicago ,IL.
              <br/>
              My passion is Software Engineering, Algorithm design and Machine Learning.
              <br/>
              </p>
            </span>
          </div>

          <div className="content">
            <div className="content__container">
              <p className="content__container__text"> Hello </p>
              <ul className="content__container__list">
                <li className="content__container__list__item">developers</li>
                <li className="content__container__list__item">creators</li>
                <li className="content__container__list__item">engineers</li>
                <li className="content__container__list__item">everybody!</li>
              </ul>
            </div>
          </div>
        </h1>
        

        <div className="et-hero-tabs-container">
          <a className="et-hero-tab" href="#tab-about">About</a>
          <a className="et-hero-tab" href="#tab-skills">Skills</a>
          <a className="et-hero-tab" href="#tab-projects">Projects</a>
          <a className="et-hero-tab" href="#tab-other">Other</a>
          <a className="et-hero-tab" href="#tab-contact">Contact</a>
          <span className="et-hero-tab-slider"></span>
        </div>
        <br></br>
      </section>

      <main className="et-main">
        <section className="et-slide" id="tab-about">
          <Fade top>
            <div>
            <h1>About me</h1>
            <br/>
            <p>
            Hello! My name is David, a software engineer based in Chicago. <br/>
            My focus is designing applications, implementation of algorithms and ML within Data Science in generating adverse models with visualization. <br/>
            My current practice involves producing scalable code and technologies that implement fullstack design and explore functionalities of different frameworks. <br/>
            Performed research for Algorithm design, and image synthesis with GAN and application design in Computer Graphics, more info <a href="#tab-other">here</a> <br/>
            Graduated from University of Illinois in Chicago May 2021 BS in Computer Science and Math. <br/>
            Below are the tools and technologies I enjoy and have experience with. <br/>
            <br></br>
            </p>
            </div>
          </Fade>
        </section>

        <section className="et-slide" id="tab-skills">
          <Fade top>
            <div>

              <h1>Skills and Coursework</h1>
                <br/>

            <h3>
            • LANGUAGES •
              
            </h3>
              <p>
              <br/>
              Python | Java | Scala | C/C++ | R | SQL 
              English | Lithuanian
              </p>
            
            <h3>
            • TECHNOLOGIES •
            </h3>
              <p>
              Akka | Git | Docker | Linux | Unix | Jupyter | Gradle | Maven | sbt <br/>
              Node | React | Spring
              </p>
              
            <h3>
            • RELEVANT COURSES •
            </h3>
              <p>
              Algorithms | Data Structures | Machine Learning | Cloud Computing | Networking 
              Machine Organization | Computer Design | Systems Programming Software Design 
              Obj-Oriented Langs & Envs | Database Systems | Android Development | Computer Graphics
              </p>
              </div>
          </Fade>
        </section>
        
        <section className="et-slide" id="tab-projects">
          <Fade top>
            <div>
            <h1>Projects</h1>
            <br/>
            <p>
              GQL v4 to display
              <a href="https://github.com/davidmickev"> github </a> projects
            </p>
            </div>
          </Fade>
        </section>

        <div>
          <Ghdata />
        </div>

        <section className="et-slide" id="tab-other">
          <Fade top>
            <div>
            <h1>Research</h1>
            <p>
            Research Fall 2020 for algorithm design and implementation of synthesis tree of gates. <br/>
            Undergraduate research that focuses on image classifications dense zones. <br></br>
            Generated and manipulate adverse training data utilizing Generative Adversarial Networks (GAN) to improve accuracy within models and explore multilabel classifications.
            Current research revolves collecting and creating visualization data and statistics for market strategies and trends within stocks and crypto.
            <br/><br/>
            </p>
            
            <br/><br/>
            </div>
            <div>
            <br/><br/>
            <h1>Other</h1>
            <p>
              Majority of my time spent is on Algorithm design, developing technical analasys tools and calculations for trading while being versitile in Java, Scala and Python <br/>
              My previous research involved algorithms and graphic design, from front-end, Web-GL, all the way to Image reconstruction and rendering using ML. <br/>
              This recent work has inspired me to take the path of implementing visualization for big data and trading technologies.
              I also enjoy photography and have years of experience using Photoshop and Lightroom. <br/>
              In my spare time I'm learning how to play the piano exploring tools such as Ableton. <br/>
            </p>
            
            </div>

          </Fade>
        </section>
        <section className="et-slide" id="tab-contact">
          <Fade top>
            <h1>Contact</h1>
            <p>
              Email me <a href="mailto:davidmickev@gmail.com">here </a> or visit any of the links above! <br/>
              Thanks for visiting!</p>
          </Fade>
        </section>

        <div className="mainfrog">
          <svg viewBox="0 0 630 352" xmlns="http://www.w3.org/2000/svg">
            <mask id="m1">
              <image className="m" href={svgAnim} y="-1" width="630" height="10620" />
            </mask>
            <mask id="m2">
              <image className="m maskImg" href={svgAnim} y="-1" width="630" height="10620" />
            </mask>
            <image mask="url(#m2)" href={frog} width="630" height="420" />
            <g mask="url(#m1)">
              <image className="frog" href={frog} width="630" height="420" />
            </g>
          </svg>
        </div>

      </main>
    </div>
    </body>
  );
}
export default App;
