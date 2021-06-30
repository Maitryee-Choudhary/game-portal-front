import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
function Navbar(){
	return(
	<div className="navbar-fixed">
	<nav className="transparency">
    <div className="transparency nav-wrapper" >
      <Link to="/" className="brand-logo ">Logo</Link>
      <ul id="nav-mobile" className="right hide-on-med-and-down ">
        <li><Link to="#">Game List</Link></li>
        <li><Link to="#">About</Link></li>
        <li><Link to="#">Features</Link></li>
		<li><Link to="#">Subscribe</Link></li>
      </ul>
    </div>
  </nav>
	</div>
  );
}
export default Navbar;