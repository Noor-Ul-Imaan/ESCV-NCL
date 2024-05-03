import React, {useState} from 'react';
import logo from './logo.png' 
import './Navbar.css';
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown';

function Navbar() {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false); 

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
      if(window.innerWidth < 960) {
        setDropdown(false)
      }
      else {
        setDropdown(true)
      }
    }
    const onMouseLeave = () => {
      if(window.innerWidth < 960) {
        setDropdown(false)
      }
      else {
        setDropdown(false)
      }
    }

    return (
    <>
    <nav className='navbar'>
          <div className='navbar-container'>
              <div className='logo-container'>
                <Link to='/' className='navbar-logo'>
                  <img className='escv-logo' src={logo}></img>
                  <h3>EMBEDDED SYSTEMS & COMPUTER VISION LAB</h3>
                </Link>
              </div>

              <div className='menu-icon' onClick={handleClick}>
                <i className={click? 'fas fa-times' : 'fas fa-bars'}/>
              </div>

              <div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                  <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                      Home
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to='/team' className='nav-links' onClick={closeMobileMenu}>
                      Team
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to='/honors-and-achievements' className='nav-links' onClick={closeMobileMenu}>
                      Honors and Achievements
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                      Products
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to='/publications' className='nav-links' onClick={closeMobileMenu}>
                      Publications
                    </Link>
                  </li>
                  <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                    <Link to='/phd' className='nav-links' onClick={closeMobileMenu}>
                      Capacity Building<i className='fas fa-caret-down'/>
                    </Link>
                    {dropdown && <Dropdown/>}
                  </li>
                  <li className='nav-item'>
                    <Link to='/collaborations' className='nav-links' onClick={closeMobileMenu}>
                      Collaborations
                    </Link>
                  </li>
                </ul>
              </div>
                
                
          </div>
 
    </nav>

    </>
    );
}

export default Navbar;



/*
<Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
  <img src='/path/to/your/logo.png' alt='Your Logo' className='logo-image' />
</Link>
<div className='menu-icon' onClick={handleClick}>
  <img
    src={click ? '/path/to/your/close-icon.png' : '/path/to/your/menu-icon.png'}
    alt={click ? 'Close Menu' : 'Open Menu'}
    className='menu-image'
  />
</div>


*/