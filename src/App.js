import React from 'react';
import Fade from 'react-reveal/Fade';
import './App.css';
import './loader.scss';

// Rand color interaction with header
import randColor from './headerStyle';
import styled from 'styled-components';

// Froggy footer
import svgAnim from './images/liquidMask1.svg';
import frog from './images/froggy.jpg';

// Saving resume PDF
import { saveAs } from 'file-saver';

// Icons for socials using fortawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core'

import { faGithub , faLinkedin ,faMailchimp } from '@fortawesome/free-brands-svg-icons';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'
library.add(faGithub,faLinkedin,faMailchimp,faFilePdf)

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

        <button className="button" style={{ color: '#009900' }} onClick={() => {openInNewTab("mailto:davidmickev@gmail.com")}}>
          <FontAwesomeIcon  size = "4x" icon={faMailchimp} />
          <span id ="textlink"> Contact </span>
        </button>
        
        <button className="button" style={{ color: 'red' }} onClick={(saveFile)}  >
          <FontAwesomeIcon size = "4x" icon={faFilePdf}></FontAwesomeIcon>
          <span id ="textlink"> Resume </span>
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

              <p>I'm a software engineer based in the Chicago ,IL.
              <br/>I specializing in building and designing applications, implementing ideas, researching algorithms, and everything in between.
              <br/>My desire is to create.</p>
            </span>
          </div>

          <div className="content">
            <div className="content__container">
              <p className="content__container__text">
                Hello
                </p>

              <ul className="content__container__list">
                <li className="content__container__list__item">creators</li>
                <li className="content__container__list__item">developers</li>
                <li className="content__container__list__item">designers</li>
                <li className="content__container__list__item">everybody!</li>
              </ul>
            </div>
          </div>
        
        </h1>
        {/*<h3>hi</h3>*/}

        <div className="et-hero-tabs-container">
          <a className="et-hero-tab" href="#tab-es6">About</a>
          <a className="et-hero-tab" href="#tab-flexbox">Projects</a>
          <a className="et-hero-tab" href="#tab-react">Experience</a>
          <a className="et-hero-tab" href="#tab-angular">Other</a>
          <a className="et-hero-tab" href="#tab-other">Contact</a>
          <span className="et-hero-tab-slider"></span>
        </div>
      </section>

      <main className="et-main">
        <section className="et-slide" id="tab-es6">
          <Fade top>
            <h1>About me</h1>
            <p>
            Hello! My name is David, a software engineer based in Chicago. <br/>
            I enjoy creation and implementation of ideas; My focus is designing applications, creation and implementation of algorithms and everything in between. <br/>
            My goal and focus is producing scalable code and technologies that meet modern space and time complexity associated with computation. <br/>
            I am researching algorithmic implementations and application design. <br/>
            Graduating from University of Illinois in Chicago Spring 2021 BS in Computer Science and Math. <br/>
            Below are the tools and technologies I enjoy and have experience with <br/>
            </p>
          </Fade>
        </section>

        <section className="et-slide" id="tab-flexbox">
          <Fade top>
            <h1>Skills</h1>
            <h3>
            •	LANGUAGES <br/>
              Python | Java | Scala | C/C++ | R | SQL 
              <br/><br/>
            •	TECHNOLOGIES <br/>
              Akka | Git | Docker | Linux | Unix | Jupyter | Gradle | Maven | sbt 
            </h3>
          </Fade>
        </section>

        <section className="et-slide" id="tab-react">
          <Fade top>
            <h1>Projects</h1>
            <h3>TODO:</h3>
          </Fade>
        </section>

        <section className="et-slide" id="tab-angular">
          <Fade top>
            <h1>Other:</h1>
            <p>
              My current research focus is based on Algorithm design and implementation while being versitile in java and Python <br/>
              A recent interest of mine has been GPU rendering and graphic design, from front-end all the way to Image reconstruction and rendering using ML. <br/>
              I also enjoy photography and have years of experience using Photoshop and Lightroom. <br/>
              In my spare time Im learning how to play the piano and production with Ableton. <br/>
            </p>
          </Fade>
        </section>
        <section className="et-slide" id="tab-other">
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
