import React from 'react';
import Rand from './headerStyle'
import logo from './logo.svg';
import './App.css';
import randColor from './headerStyle';


function App() {
  return (
    <div className="App">
    
    {/*name info*/}

    <div id="links">
  <button className="purple" style={{color: "blue"}}>About</button>
  <button className="blue">Portfolio</button>
  <button className="green">Contact</button>
</div>
<div id="content">
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
    
  </span>
</div>


<p>My desire is to create.</p>
<p>Website down 8/4 changing format and interactions.</p>





</div>
      
    </div>
  );
}

export default App;
