import { worksData } from "./Data.js";
import github from './images/github.png'

export default function () {
    return (
        <section className="recent-works">
            <div className="works-title">
                <h3>My Recent Work</h3>
                <p>Here are a few past design projects I've worked on. Want to see more? {' '}
                    <a href="mailto:giopatrick11@gmail.com">Email me.</a> 
                </p>
            </div>

            <div className="works-grid">
                {worksData.map((work) => (
                    <div key={work.id} className="work-card">
                    <img src={work.image} alt={work.title} />
                    <div className="overlay">
                        <h4>{work.title}</h4>
                    </div>
                    </div>
                ))}
            </div>
            <ul className="nav-links">
                <li>
                    <a href="#" className='seemore'>
                    <img src={github} alt="Github Icon" className="icon"/>    See more on Github</a></li>
            </ul>
        </section>
        
    )
}