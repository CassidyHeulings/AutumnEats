import React from 'react';
import img1 from './images/autumn_cafe_entrance.jpg'
import img2 from  './images/leaves_piles.png'
import { Link } from "react-router-dom"
import './css/main_page.css'

const Main = () => {
  return (
    <div>
      <header>
        <h1>Autumn Cafe</h1>
        <p>Fall in Love with Every Sip, Only at Autumn Cafe!</p>
      </header>
           
      <>
      <Navbar/>
      </>

      <img src={img1} alt="View of front entrance of Autumn Cafe"/>
      <img src={img2} alt="leaf pile"/>

      <footer>
        <p>&copy; 2023 Autumn Cafe. All rights reserved.</p>
      </footer>
    </div>
  );
};

function Navbar() {
    return <nav class="main_nav">
        <Link to="https://www.google.com/">Menu</Link>
        <Link to="/OnlineOrder">Online Ordering</Link>
        <Link to="/Careers">Careers</Link>
        <Link to="/Directions">Locations</Link>
        <Link to="/ContactUs">Contact</Link>
    </nav>
}

export default Main;
  
