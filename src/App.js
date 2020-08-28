import React from 'react';
import logo from './logo.svg';
import './App.css';
import randColor from './headerStyle';
import styled from 'styled-components';
import lii from './icons/linkedin-icon.png';
import ghi from './icons/github-icon.png';
import ci from './icons/contact-icon.png';

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
    
    {/*name info*/}

    <div id="links">
    <Icon radius='100px' icon={lii} />
    <Icon radius='100px' icon={ghi} />
    <Icon radius='100px' icon={ci} />
    
    
  <button className="purple" style={{color: "blue"}}>About</button>
  <button className="blue">Portfolio</button>
  <button className="green">Contact</button>

</div>



<section class="et-hero-tabs">
    <h1>
    <div id="name">
  <span className="logo">
    {/*<span id="1" className="letter" classNameName="hovered">D</span>*/}
  <span id="1" className="letter" style={{color:randColor()}} >D</span>
  <span id="2" className="letter" style={{color:randColor()}} >a</span>
  <span id="3" className="letter" style={{color:randColor()}} >v</span>
  <span id="4" className="letter" style={{color:randColor()}} >i</span>
  <span id="5" className="letter" style={{color:randColor()}} >d</span>
  </span>
  <span className="logo">
    <span id="6" className="letter" style={{color:randColor()}} >M</span>
    <span id="7" className="letter" style={{color:randColor()}} >i</span>
    <span id="8" className="letter" style={{color:randColor()}} >c</span>
    <span id="9" className="letter" style={{color:randColor()}} >k</span>
    <span id="10" className="letter" style={{color:randColor()}} >e</span>
    <span id="11" className="letter" style={{color:randColor()}} >v</span>
    <span id="12" className="letter" style={{color:randColor()}} >i</span>
    <span id="13" className="letter" style={{color:randColor()}} >c</span>
    <span id="14" className="letter" style={{color:randColor()}} >i</span>
    <span id="15" className="letter" style={{color:randColor()}} >u</span>
    <span id="16" className="letter" style={{color:randColor()}} >s</span>
    
    <p>My desire is to create.</p>
    <p>Website down 8/4 changing format and interactions.</p>
  </span>
</div>


    </h1>
    <h3>Sliding content with sticky tab nav</h3>
    <div class="et-hero-tabs-container">
      <a class="et-hero-tab" href="#tab-es6">ES6</a>
      <a class="et-hero-tab" href="#tab-flexbox">Flexbox</a>
      <a class="et-hero-tab" href="#tab-react">React</a>
      <a class="et-hero-tab" href="#tab-angular">Angular</a>
      <a class="et-hero-tab" href="#tab-other">Other</a>
      <span class="et-hero-tab-slider"></span>
    </div>
  </section>

  <main class="et-main">
    <section class="et-slide" id="tab-es6">
      <h1>ES6</h1>
      <h3>something about es6</h3>
    </section>
    <section class="et-slide" id="tab-flexbox">
      <h1>Flexbox</h1>
      <h3>something about flexbox</h3>
    </section>
    <section class="et-slide" id="tab-react">
      <h1>React</h1>
      <h3>something about react</h3>
    </section>
    <section class="et-slide" id="tab-angular">
      <h1>Angular</h1>
      <h3>something about angular</h3>
    </section>
    <section class="et-slide" id="tab-other">
      <h1>Other</h1>
      <h3>something about other</h3>
    </section>
  </main>


</div>
      
  
  );
}




export default App;
