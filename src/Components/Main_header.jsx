import React from 'react';
import { Link } from 'react-router-dom';

const Main_header = () => {
  return (
    <div>

      <header className='d-flex justify-content-between mx-4 my-4'>
        <div className='logo'>
          <h1>ApiBOX</h1>
        </div>
        <div className='menu'>
          <ul>
            <li>
              <Link to='/'>HOME</Link>
            </li>
            <li>
              <Link to='/about-us'>ABOUT US</Link>
            </li>
           
          </ul>
        </div>
        <div className='contact_btn'>
            <button>Contact Us</button>
        </div>
      </header>
    </div>

  )
}

export default Main_header
