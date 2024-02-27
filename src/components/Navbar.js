import React, {useState} from 'react'
import { Link } from "react-router-dom";
import './Navbar.css';
import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faTimes, faBars } from '@fortawesome/free-solid-svg-icons';


function Navbar() {
const [click, setClick ] = useState(false);
const [button, setButton] = useState(true);

const handleClick = () => setClick(!click);
const closeMobileMenu = () => setClick(false);

const showButton = () =>{
  if(window.innerWidth <= 960){
    setButton(false)
  }else {
    setButton(true)
  }
};

window.addEventListener('resize', showButton);

  return (
    <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                <i class="fa-solid fa-code"></i>
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                  <i className={click ? 'fas fa-times': 'fas fa-bars'} />
                </div>
                <ul className={click? 'nav-menu active': 'nav-menu'}>
                <li className='nav-iten'>
                  <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                    Home
                  </Link>
                </li>
                <li className='nav-iten'>
                    <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                      Services
                    </Link>
                  </li>
                  <li className='nav-iten'>
                    <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                      Products
                    </Link>
                  </li>
                  <li className='nav-iten'>
                    <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                      Sign Up
                    </Link>
                  </li> 
                </ul>
                {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
            </div>
        </nav>
      
    </>
  )
}

export default Navbar
