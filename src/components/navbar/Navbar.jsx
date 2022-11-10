import React from 'react';
import './navbar.css';

const Navbar = () =>{
    return(
        <div class="navbarContainer">
            <div class="navbarContent-left">
                <a class="home" href='Home'><i id="home" class="fa-solid fa-house-user"></i></a>
            </div>
            <div class="navbarContent-right">
                <a class="projects" href='Projects'>Projects </a>
                <a class="resume" href='Resume'>Resume </a>
                <a class="contacts" href='Contacts'>Contacts</a>
            </div>
        </div>
    )
} 

export default Navbar;