import React from 'react';
import './App.css';

import { motion } from 'framer-motion';
import ZoomOnScrollImage from './Zoom.js';
// Rand color interaction with header
import randColor from './headerStyle';
import laptophold from './images/laptophold.png';

// GQL4 query and display
import Ghdata from './displayCards.js';
import Links from './Links'; // Import the Links component

function App() {

  //const iconSize = useIconSize();
  
  return (
    <body>
    <div className="App">
    <section className="et-hero-tabs" data-image-source="./icons/dmlogo.png">
        {/* <h1>
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
        </h1> */}

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

    <div>
      
      <div style={{ height: '0vh', padding: '0px' }}>
        <ZoomOnScrollImage 
          src={laptophold} 
        />
      </div>
      
      <div style={{ 
          height: '100vh',
          padding: '20px', 
          }}>
      </div>
    </div>

      <main className="et-main">
      <Links/>
        <section className="et-slide" id="tab-about">
          <motion.div top>
            <div>
            <h1>About me</h1>
            <br/>
            <p>
            Hello! My name is David, a software engineer based in Chicago. <br/>
            My focus is designing applications, implementation of algorithms and ML within Data Science in generating adverse models with visualization. <br/>
            My current practice involves producing scalable code and technologies that implement fullstack design and explore functionalities of different frameworks. <br/>
            Performed research for Algorithm design, and image synthesis with GAN and application design in Computer Graphics, more info <a href="#tab-other">here</a> <br/>
            Graduated from University of Illinois in Chicago BS in Computer Science and Math. <br/>
            Below are the tools and technologies I enjoy and have experience with. <br/>
            <br></br>
            </p>
            </div>
          </motion.div>
        </section>

        <section className="et-slide" id="tab-skills">
          <motion.div top>
            <div>
            <br/>
    <h1>Skills and Coursework</h1>
            <h3>
            • LANGUAGES •
            </h3>
              <p>
                Python | Java | Scala | C/C++ | R | SQL 
              <br/>
              English | Lithuanian
              </p>
              <br/><br/><br/><br/><br/>
            <h3>
            • TECHNOLOGIES •
            </h3>
              <p>
              Akka | Git | Docker | Linux | Unix | Jupyter | Gradle | Maven | sbt <br/>
              Node | React | Spring
              </p>
              <br/><br/><br/><br/><br/>
            <h3>
            • RELEVANT COURSES & WORK •
            </h3>
              <p>
              Algorithms | Data Structures | Machine Learning | Cloud Computing | Networking 
              Machine Organization | Computer Design | Systems Programming Software Design 
              Obj-Oriented Langs & Envs | Database Systems | Android Development | Computer Graphics
              </p>
              <br/><br/><br/><br/><br/>
              </div>
          </motion.div>
        </section>
        
        <section className="et-slide" id="tab-projects">
          <motion.div top>
            <div><br/><br/><br/>
            <h1>Projects</h1>
            <br/>
            <p>
              GQL v4 to display
              <a href="https://github.com/davidmickev"> github </a> projects
            </p>
            </div>
          </motion.div>
        </section>

        <div>
          <Ghdata />
        </div>

        <section className="et-slide" id="tab-other">
          <motion.div top>
            <br/><br/><br/><div>
            <h1>Research</h1>
            <br/>
            <p>
            Undergraduate research for algorithm design and implementation of synthesis tree of gates. <br/>
            Focuses on image classifications in urban city and dense zones. <br></br>
            Generated and manipulate adverse training data utilizing Generative Adversarial Networks (GAN) to improve accuracy within models and explore multilabel classifications.
            Current research revolves collecting and creating visualization data and statistics for market strategies and trends within stocks and crypto.
            </p>
            </div>
            
            <div>
            <br/><br/><br/>
            <h1>Interests</h1>
            <br/>
            <p>
              Majority of my time spent is on Algorithm design, developing technical analasys tools and calculations for trading while being versitile in Java, Scala and Python <br/>
              My previous research involved algorithms and graphic design, from front-end, Web-GL, all the way to Image reconstruction and rendering using ML. <br/>
              This recent work has inspired me to take the path of implementing visualization for big data and trading technologies.
              I also enjoy photography and have years of experience using Photoshop and Lightroom. <br/>
              In my spare time I'm learning how to play the piano exploring tools such as Ableton. <br/>
            </p></div></motion.div>
            </section>
      
        
        <section className="et-slide" id="tab-contact">
          <motion.div top>
            <br/><br/><br/>
            <h1>Contact</h1>
            <br/>
            <p>
              Email me <a href="mailto:davidmickev@gmail.com">here </a> or visit any of the links above! <br/>
              Thanks for visiting!</p>
          </motion.div>
        </section>
        <br/><br/>
        

    <div id="name">
    <span className="logo">
    {Array.from("David Mickevicius").map((char, index) => (
      <span
        key={index}
        id={index + 1}
        className="letter"
        style={{ color: randColor() }}
        onMouseEnter={(e) => {
          e.target.style.color = randColor(); // Change color on hover
        }}
      >
        {char === "" ? <br /> : char}
      </span>
    ))}
  </span>
</div>


      </main>
    </div>
    </body>
  );
}
export default App;
