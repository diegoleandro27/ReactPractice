import React from 'react';
// import {Rimenu3Line, RicloseLine} from "react-icons/ri";
import './navbar.css';
import logo from "../../assets/logo.svg";


const Navbar = () => {
  return (
    <nav className='gpt3__navbar'>
      <div className='gpt3___navbar-links'>
        <div className='gpt3___navbar-links_logo'>
          <img  src={logo} alt='logo'/>
        </div>
        <div className='gpt3___navbar-links_containers'>
          <p><a href='#home'>Home</a></p>
          <p><a href='#wgpt3'>What is GPT-3?</a></p>
          <p><a href='#possibility'>Open AI</a></p>
          <p><a href='#features'>Case Studies</a></p>
          <p><a href='#blog'>Library</a></p>
        </div>
      </div>
      <div className='gpt3___navbar-sign '>
          <p>Sign in</p>
          <button type='button'>Sign Up</button>
      </div>
    </nav>
  )
}

export default Navbar