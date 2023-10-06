import React from 'react';
import './Nav.css';
import {Link} from 'react-router-dom';
function Nav() {
  return (
    <>
  <ul>
        <Link to='/'> <li> home</li></Link>
        <Link to='/'> <li> about</li></Link>
        <Link to='/'> <li> contact</li></Link>
  </ul>
  </>
  );
}
export default Nav;

/*<a href='/'> <li>Home</li></a>
  <a href='/about'> <li>About</li></a> 
  <a href='/contact'> <li>Contact</li></a> 
  </ul>
  */
  