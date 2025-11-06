import picturee from './images/Group-1.png'
import webdev from './images/weedev.png'
import tools from './images/tools.png'
import database from './images/datas.png'


export default function Content (){
     return (
    <>
      <section className="hero">
        <div className="hero-body">
          <h1>Frontend Developer</h1>
          <p>I code simple websites, and I love what I do.</p>
        </div>
      </section>

      <div className="picturee">
        <img src={picturee} alt="Programming" className="picturee" />
      </div>

      <div className="introduction">
        <div className="context">
            <h2>Hi, I’m Gio. Nice to meet you.</h2>
            <p>
                    I’m an IT graduate specializing in Database Systems with a passion for frontend web development.
                    I love creating clean, responsive, and user-focused websites that blend design and functionality.
            </p>
         </div>
      </div>

        <section className="skills">

            <div className="card-container">

                <div className="skills-category">
                 <img src={webdev} alt="Programming Logo" className="skills-icon"/>
                    <h3>Web Development</h3>
                    <p>I build structured, responsive websites using clean, semantic code and modern development standards.</p>
                    
                  <div className="skills-details" >
                    <h4>Things I build:</h4>
                    <ul>
                        <li>Portfolio Sites</li>
                        <li>Landing Sites</li>
                        <li>Dashboards</li>
                    </ul>
                  </div>
                </div>

                <div className="skills-category" >
                 <img src={tools} alt="Tools Logo" className="skills-icon"/>
                    <h3>Frontend Tools &amp; Frameworks</h3>
                    <p>I use lightweight and efficient tools to design, prototype, and deploy fast and accessible web interfaces.</p>
                  
                  <div className="skills-details">
                    <h4>Libraries &amp; Frameworks</h4>
                    <ul>
                        <li>React</li>
                        <li>Vite</li>
                        <li>Tailwind CSS</li>
                    </ul>
                  </div>
                </div>

                <div className="skills-category">
                 <img src={database} alt="Database Logo"  className="skills-icon"/>
                    <h3>Development Tools</h3>
                    <p>I manage and automate workflows through reliable development utilities and backend technologies.</p>
                    
                  <div className="skills-details">
                  <h4>Backend &amp; Automation</h4>
                    <ul>
                        <li>Laravel</li>
                        <li>MySQL</li>
                        <li>Batch Scripting (.bat)</li>
                        <li>RESTful APIs</li>
                    </ul>
                </div>
                </div>
            </div>
        </section>
    </>
  );
}
