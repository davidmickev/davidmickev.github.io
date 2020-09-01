import React from 'react';
import './App.css';
import randColor from './headerStyle';
import styled from 'styled-components';
import linkedini from './icons/linkedin-icon.png';
import githubi from './icons/github-icon.png';
import contacti from './icons/contact-icon.png';
import resumei from './icons/resume-icon.png';
import './loader.scss';
import svgAnim from './images/liquidMask1.svg';
import frog from './images/froggy.jpg';

const Icon = styled.div
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
cursor: pointer;`


function App() {


  return (
    <div className="App">

      {/*Links*/}

      <div id="links">
        <button className="icon" style={{ color: randColor() }}>
          Linked In
      <Icon radius='100px' icon={linkedini} />
        </button>

        <button className="icon" style={{ color: randColor() }}>
          GitHub
          Hellooo
      <Icon radius='100px' icon={githubi} />
        </button>


        <button className="icon" style={{ color: randColor() }}>
          Contact
      <Icon radius='100px' icon={contacti} />
        </button>

        <button className="icon" style={{ color: randColor() }}>
          Resume
      <Icon radius='100px' icon={resumei} />
        </button>

      </div>



      <section class="et-hero-tabs">
        <h1>
          <div id="name">


            <span className="logo">

              {/*<span id="1" className="letter" classNameName="hovered">D</span>*/}
              <span id="1" className="letter" style={{ color: randColor() }} >D</span>
              <span id="2" className="letter" style={{ color: randColor() }} >a</span>
              <span id="3" className="letter" style={{ color: randColor() }} >v</span>
              <span id="4" className="letter" style={{ color: randColor() }} >i</span>
              <span id="5" className="letter" style={{ color: randColor() }} >d</span>
            </span>
            <span className="logo">
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

              
              <p>I'm a software engineer based in the Chicago ,IL. I specializing in building and designing applications, implementing advanced algorithms, and everything in between.</p>
              <p>My desire is to create.</p>
            </span>
          </div>


        </h1>
        <h3>Sliding content with sticky tab nav</h3>
        <div class="et-hero-tabs-container">
          <a class="et-hero-tab" href="#tab-es6">About</a>
          <a class="et-hero-tab" href="#tab-flexbox">Projects</a>
          <a class="et-hero-tab" href="#tab-react">Experience</a>
          <a class="et-hero-tab" href="#tab-angular">Other</a>
          <a class="et-hero-tab" href="#tab-other">Contact</a>
          <span class="et-hero-tab-slider"></span>
        </div>
      </section>

      <main class="et-main">
        <section class="et-slide" id="tab-es6">
          <h1>About me</h1>
          <p>
            Hello! My name is David, a software engineer based in Chicago. <br></br>
        I enjoy creation and implementation of ideas, my focus is designing applications, creation and implementation of algorithms and everything in between. <br></br>
        My goal and focus is producing scalable code and technologies that meet modern space and time complexity associated with computation. <br></br>
        I am researching algorithmic implementations and application design. <br></br>
        I am graduating from University of Illinois in Chicago Spring 2021 majoring in Computer Science and Math. <br></br>
        Here are a few technologies I've been working with recently: <br></br>
        .... TODO
      </p>
        </section>

        <section class="et-slide" id="tab-flexbox">
          <h1>Projects</h1>
          <h3>TODO:</h3>
        </section>
        <section class="et-slide" id="tab-react">
          <h1>Experience</h1>
          <h3>TODO:</h3>
        </section>
        <section class="et-slide" id="tab-angular">
          <h1>Other</h1>
          <h3>TODO:</h3>
        </section>
        <section class="et-slide" id="tab-other">
          <h1>Contact</h1>
          <h3>TODO</h3>
        </section>

        <div class="mainfrog">
          <svg viewBox="0 0 630 352" xmlns="http://www.w3.org/2000/svg">
            <mask id="m1">
              <image class="m" href={svgAnim} y="-1" width="630" height="10620" />
            </mask>
            <mask id="m2">
              <image class="m maskImg" href={svgAnim} y="-1" width="630" height="10620" />
            </mask>
            <image mask="url(#m2)" href={frog} width="630" height="420" />
            <g mask="url(#m1)">
              <image class="frog" href={frog} width="630" height="420" />
            </g>
          </svg>
        </div>

      </main>

    </div>
  );
}
export default App;
