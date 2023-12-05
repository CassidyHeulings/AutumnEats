import '../css/online_order.css';
import React from 'react';
import leaves from '../images/leaves_spiral.png';
import { Link } from "react-router-dom";

console.log(leaves);
document.body.style = 'background: #FBBA72;';

function OnlineOrder() {
 return (
  <div>
    <h1>Online Ordering</h1>
    <nav class="navbar background">
      <ul class="nav-list">
        <li>
          <Link to="/Main">Home</Link>
        </li>
        <li>
          <Link to="https://www.google.com">Menu</Link>
        </li>
        <li>
          <Link to="/Careers">Career</Link>
        </li>
        <li>
          <Link to="/Directions">Directions</Link>
        </li>
        <li>
          <Link to="/ContactUs">Contact Us</Link>
        </li>
      </ul>
      <div class="rightNav">
        <button>Pickup</button>
        <button>Delivery</button>
      </div>
    </nav>

    <div class="menu">
      <p>Menu</p>
    </div>

    <div class="summary">
      <p>Order Summary</p>
    </div>
    
    <div class="img">
      <img src={leaves} alt="Fall Leaves" />
    </div>
  </div>
 )
}

export default OnlineOrder;