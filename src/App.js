import './App.css';
import React from 'react';

function App() {
  return (

    <div className="App">

      <header>

        <div className='left-header'>
          <a href='#home-section'>Home</a>
          <a href='#about-section'>About</a>
          <a href='#skills-section'>Skills</a>
          <a href='#projects-section'>Projects</a>
          <a href='#contact-section'>Contact</a>
          <a href="https://drive.google.com/file/d/11REPi8_dVGCWm5uQHD4ee4JROQLmp-4f/view?usp=share_link" download alt=' ' rel='noopener noreferrer' target="_blank">Resume</a>
        </div>

        <div className='right-header'>

          <div className='github-header'>
            <a className='github-link' href='https://github.com/sherget15'>
              <img className='gh1' src="https://cdn.simpleicons.org/github/white" alt='' />
            </a>
          </div>

          <div className='linkedin-header'>
            <a className='linkedin-link' href='https://www.linkedin.com/in/stephen-herget-50522942/'>
              <img className='l1' src="https://cdn.simpleicons.org/linkedin" alt='' />
            </a>
          </div>

          <div className='gmail-header'>
            <a className='gmail-link' href='mailto:herget06@gmail.com'>
              <img className='g1' src="https://cdn.simpleicons.org/gmail" alt='' />
            </a>
          </div>

        </div>

      </header>


      <section className='home' id='home-section'>
        <div className='second-home'>
          <h1>Hello, my name is <span className='span-b1'>&lt;Stephen&gt;</span> Herget.</h1>
          <h2>I'm a web developer.</h2>
        </div>
      </section>


      <section className='about-me' id='about-section'>
        <div className='about-me2'>
          <h1>ABOUT ME</h1>
          <h2>I'm a detail oriented full-stack software developer driven by knowledge, collaboration, and problem solving. I apply vision, innovation, and a creative perspective in all environments with a focus on timely, cost effective, and quality final project/product delivery. I always enjoy new challenges, and equally enjoy looking for new creative approaches to challenges.</h2>
        </div>
      </section>


      <section className='skills' id='skills-section'>

        <div className='skills-top'></div>

        <div className='skills-div'>
          <div className='skills-title'>
            <h1>SKILLS</h1>
            <br />
          </div>

          {/* link to simple-icons site & site with slugs for logos below 
          https://github.com/simple-icons/simple-icons/blob/master/slugs.md 
          https://github.com/simple-icons/simple-icons*/}

          <div className='skills-logos'>
            <div><img className='skills-size' src="https://cdn.simpleicons.org/html5" alt='' /></div>
            <div><img className='skills-size' src="https://cdn.simpleicons.org/javascript" alt='' /></div>
            <div><img className='skills-size' src="https://cdn.simpleicons.org/css3" alt='' /></div>
            <div><img className='skills-size' src="https://cdn.simpleicons.org/ruby" alt='' /></div>
            <div><img className='skills-size' src="https://cdn.simpleicons.org/rubyonrails" alt='' /></div>
            <div><img className='skills-size' src="https://cdn.simpleicons.org/react" alt='' /></div>
            <div><img className='skills-size' src="https://cdn.simpleicons.org/nodedotjs" alt='' /></div>
            <div><img className='skills-size' src="https://cdn.simpleicons.org/express" alt='' /></div>
            <div><img className='skills-size' src="https://cdn.simpleicons.org/mongodb" alt='' /></div>
            {/* <div><img className='skills-size' src="https://cdn.simpleicons.org/sqlite" alt='' /></div> */}
            <div><img className='skills-size' src="https://cdn.simpleicons.org/postgresql" alt='' /></div>
          </div>

        </div>

        <div className='skills-bottom'></div>

      </section>


      <section className='projects' id='projects-section'>
        <div className='projects-div'>
          <h1>RECENT PROJECTS</h1>
          <a className='p1-link' href='https://sherget15.github.io/Cocktail-Connoisseur/'><img className='p1-img' src='https://i.imgur.com/smBirji.jpg' alt='' ></img></a>
          <a className='p2-link' href='https://p2-zengarden.netlify.app'><img className='p2-img' src='https://i.imgur.com/cwySkeU.jpg' alt='' ></img></a>
          <a className='p3-link' href='https://playlistify4real.netlify.app/'><img className='p3-img' src='https://i.imgur.com/Y7Dr5jD.jpg' alt='' ></img></a>
        </div>
      </section>


      <section className='contact'>
        <div className='contact-div'>

          <h1>CONTACT ME</h1>
          <div className='contact-form' id='contact-section'>
            <div className='github-div'>
              <a className='github-link2' href='https://github.com/sherget15'>
                <img className='gh2' src="https://cdn.simpleicons.org/github/white" alt='' />
              </a>
            </div>

            <div className='linkedin-div'>
              <a className='linkedin-link2' href='https://www.linkedin.com/in/stephen-herget-50522942/'>
                <img className='l2' src="https://cdn.simpleicons.org/linkedin" alt='' />
              </a>
            </div>

            <div className='gmail-div'>
              <a className='gmail-link2' href='mailto:herget06@gmail.com'>
                <img className='g2' src="https://cdn.simpleicons.org/gmail" alt='' />
              </a>
            </div>
          </div>

        </div>
      </section>


    </div>
  );
}

export default App;
