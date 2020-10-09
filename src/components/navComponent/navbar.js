import React from 'react'
import './navbar.css';
import {Link} from 'react-scroll';
 let navbar=()=> {
    return (
        // <div className='navbar'>
           
              
            <nav class="navbar navbar-expand-lg navbar-light bg-success">
  
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <Link class="nav-link" to="home" smooth={true} duration={1000} >Home <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="about" smooth={true} duration={1000}>About</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="resume" smooth={true} duration={1500}>Resume</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link " to="contact" smooth={true} duration={1800}>Contact</Link>
      </li>
    </ul>
  </div>
</nav>


            
            
        // </div>
    )
}
export default navbar;
