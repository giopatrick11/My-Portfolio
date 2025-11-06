import './App.css';
import logo from './images/logod.png'


export default function Navbar() {
  return (  
    <nav className="navbar">
        <div className="gg">
            <img src={logo} alt='logo' className='logo'/>
        </div>


        <ul className="nav-links">
            <li><a href="#" className='sayhello'>Say Hello!</a></li>
        </ul>

    </nav>

  );
}