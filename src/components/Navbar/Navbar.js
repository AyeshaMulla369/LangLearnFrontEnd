import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import './Navbar.css';
import { useAuth } from '../../context/AuthContext';

function Navbar() {
  const [click, setClick] = useState(false);
  const { isAuthenticated, user, login, logout } = useAuth();
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => {
    setClick(false);
    
  };
  console.log(user);

  const Logoutfcn = ()=>{
    const { logout } = useAuth();
    logout();
    setClick(false);
  }

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <HashLink smooth to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Bilingo
            <i class='fas fa-wind' />
          </HashLink>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <HashLink 
                smooth to='/' 
                className='nav-links' 
                onClick={closeMobileMenu}>
                Home
              </HashLink>
            </li>
            {isAuthenticated?(
              <li className='nav-item'>
                <HashLink
                  smooth to='/Leaderscore'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Stats
                </HashLink>
            </li>
            ):(<li className='nav-item'>
                <HashLink
                  smooth to='/#contactPage'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Connect
                </HashLink>
            </li>
            )}
            {isAuthenticated?(
              <li className='nav-item'>
                <HashLink
                  smooth to='/'
                  className='nav-links'
                  onClick={Logoutfcn}
                >
                  Logout
                </HashLink>
            </li>
            ):(<li className='nav-item'>
                <HashLink
                  smooth to='/Login'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Login
                </HashLink>
            </li>
            )}

          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;