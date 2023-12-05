import '../css/online_order.css';
import React from 'react';
import leaves from '../images/leaves_spiral.png';
import { Link } from "react-router-dom";
import { useState } from 'react';

document.body.style = 'background: #FBBA72;';

function App() {
 return (

  <div>
    <h1>Online Ordering</h1>
    <nav class="navbar background">
      <ul class="nav-list">
        <li>
          <Link to="/Main">Home</Link>
        </li>
        <li>
          <Link to="/Menu">Menu</Link>
        </li>
        <li>
          <Link to="/Careers">Career</Link>
        </li>
        <li>
          <Link to="/Directions">Directions</Link>
        </li>
        <li>
          <Link to="/ContactUS">Contact</Link>
        </li>
      </ul>
      <div class="rightNav">
        <button>Pickup</button>
        <button>Delivery</button>
      </div>
    </nav>
    <Menu />
    <br></br>
    <div class="img">
      <img src={leaves} alt="Fall Leaves" />
    </div>
  </div>
 )
}

/**
function Menu() {
  const Menu = () => {
    const [buttonClicked, setButtonClicked] = useState(false)

    const handleClick = () => {
      setButtonClicked(true);
    };

    return (
    <div class="menu">
      <p class="title">Menu</p>
      <br></br>
      <p>Appetizer</p>
      <button class="app" onClick={handleClick}>Salmon and Asparagus Reuben Canapes</button>
      <br></br>
      <p>First Course</p>
      <button class="first" onClick={handleClick}>Mixed Greens Garden Salad</button>
      <br></br>
      <p>Main Course</p>
      <button class="main" onclick={handleClick}>Baked Lemon Chicken</button>
      <button class="main" onclick={handleClick}>Grilled Filet Mignon</button>
      <button class="main" onClick={handleClick}>Edamame Pilaf</button>
      <br></br>
      <p>Desserts</p>
      <button class="desserts" onClick={handleClick}>Chocolate Raspberry Wedding</button>
      <button class="desserts" onClick={handleClick}>Cake French Vanilla Ice Cream</button>
      <button class="desserts" onClick={handleClick}>Macaroons</button>
    </div>
    );
  };
}
*/

function Menu() {
  const [clickedButtons, setClickedButtons] = useState([]);

  const handleClick = (buttonText) => {
    // Toggle the button's click status
    const isClicked = clickedButtons.includes(buttonText);
    if (isClicked) {
      // Remove the button from the clickedButtons array
      setClickedButtons((prevButtons) =>
        prevButtons.filter((button) => button !== buttonText)
      );
    } else {
      // Add the button to the clickedButtons array
      setClickedButtons((prevButtons) => [...prevButtons, buttonText]);
    }
  };

  return (
    <div className="menu">
      <p className="title">Menu</p>
      <br />
      <p>Appetizer</p>
      <button
        className={`app ${clickedButtons.includes('Salmon and Asparagus Reuben Canapes') ? 'clicked' : ''}`}
        onClick={() => handleClick('Salmon and Asparagus Reuben Canapes')}
      >
        Salmon and Asparagus Reuben Canapes {clickedButtons.includes('Salmon and Asparagus Reuben Canapes') && 'X'}
      </button>
      <br />
      <p>First Course</p>
      <button
        className={`first ${clickedButtons.includes('Mixed Greens Garden Salad') ? 'clicked' : ''}`}
        onClick={() => handleClick('Mixed Greens Garden Salad')}
      >
        Mixed Greens Garden Salad {clickedButtons.includes('Mixed Greens Garden Salad') && 'X'}
      </button>
      <br />
      <p>Main Course</p>
      <button
        className={`main ${clickedButtons.includes('Baked Lemon Chicken') ? 'clicked' : ''}`}
        onClick={() => handleClick('Baked Lemon Chicken')}
      >
        Baked Lemon Chicken {clickedButtons.includes('Baked Lemon Chicken') && 'X'}
      </button>
      <button
        className={`main ${clickedButtons.includes('Grilled Filet Mignon') ? 'clicked' : ''}`}
        onClick={() => handleClick('Grilled Filet Mignon')}
      >
        Grilled Filet Mignon {clickedButtons.includes('Grilled Filet Mignon') && 'X'}
      </button>
      <button
        className={`main ${clickedButtons.includes('Edamame Pilaf') ? 'clicked' : ''}`}
        onClick={() => handleClick('Edamame Pilaf')}
      >
        Edamame Pilaf {clickedButtons.includes('Edamame Pilaf') && 'X'}
      </button>
      <br />
      <p>Desserts</p>
      <button
        className={`desserts ${clickedButtons.includes('Chocolate Raspberry Wedding') ? 'clicked' : ''}`}
        onClick={() => handleClick('Chocolate Raspberry Wedding')}
      >
        Chocolate Raspberry Wedding {clickedButtons.includes('Chocolate Raspberry Wedding') && 'X'}
      </button>
      <button
        className={`desserts ${clickedButtons.includes('Cake French Vanilla Ice Cream') ? 'clicked' : ''}`}
        onClick={() => handleClick('Cake French Vanilla Ice Cream')}
      >
        Cake French Vanilla Ice Cream {clickedButtons.includes('Cake French Vanilla Ice Cream') && 'X'}
      </button>
      <button
        className={`desserts ${clickedButtons.includes('Macaroons') ? 'clicked' : ''}`}
        onClick={() => handleClick('Macaroons')}
      >
        Macaroons {clickedButtons.includes('Macaroons') && 'X'}
      </button>
    </div>
  );
}

export default App;