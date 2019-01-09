import React from 'react';
import { Link, Route } from 'react-router-dom';

const NavBar = props => ((
  <nav className='navbar navbar-expand-lg navbar-light bg-light'>
    <Link className='navbar-brand'>
      <img src='./images/home-icon.png' alt='Falcon' />
    </Link>
    <div>
      <ul className='navbar-nav mr-auto'>
        <li className='nav-item active'>
	  <Link className='nav-link' redirect='/'>
	  </Link>
	</li>
      </ul>
    </div>
  </nav>

  <nav>
    <Link to='/home'>Home </Link>
    <Link to='/astero'>Astero </Link>
    <Link to='/login'>Login </Link>
    <Link to='/signin'>Sign in </Link>
    <Route path='/home' redirect='/' />
    <Route path='/astero' render={() => <h1>ASTERO</h1>} />
  </nav>
));

export default NavBar;
