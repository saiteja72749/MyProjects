import React from 'react';
import { useNavigate } from 'react-router-dom';

function Treasure() {
  const navigate = useNavigate();
  return (
    <div>
      <center>
        <p className='treasure'>Welcome! Here's your treasure. Common! Take your treasure and have a blissful experience with it.</p>
        <button onClick={() => navigate('/')}>Logout</button>
      </center>
    </div>
  );
}

export default Treasure;