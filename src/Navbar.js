import React from 'react';

const Navbar = () => {
  return (
    <nav className="teal lighten-1">
      <div className="nav-wrapper">
        <a href="" className="author name">Sadric Bonner</a>
        <a href="#" data-activates="mobile-demo" className="button-collapse right">
          {/* <i className="material-icons">menu</i> */}
        </a>
        <ul id="mobile-demo" className="right hide-on-med-and-down">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;