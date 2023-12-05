import React from 'react';
import autumn_cafe from '../images/autumn_cafe_entrance.jpg'
import leaf_pile from  '../images/leaves_piles.png'
import { Link } from "react-router-dom"
import '../css/main_page.css'

const Main = () => {
  return (
    <div>
      <header>
        <h1>Autumn Eats</h1>
        <p className='slogan'>Fall in Love with Every Sip, Only at Autumn Cafe!</p>
      </header>
           
      <Navbar/>

      <img src={autumn_cafe} alt="View of front entrance of Autumn Cafe"/>
      <img className="leaves" src={leaf_pile} alt="leaf pile"/>

      <footer>
      <p>&copy; 2023 Autumn Cafe. All rights reserved.</p>
      </footer>
    </div>
  );
};

function Navbar() {
    return <nav class="main_nav">
        <Link to="/Menu">Menu</Link>
        <Link to="/OnlineOrder">Online Ordering</Link>
        <Link to="/Careers">Careers</Link>
        <Link to="/Directions">Locations</Link>
        <Link to="/ContactUs">Contact</Link>
    </nav>
}

export default Main;
  
