import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SecurityPasscode() {
  const [value, setValue] = useState('');
  const [input, setInput] = useState('password');
  const [auth, setAuth] = useState(false);
  const [passwordCorrect, setpasswordCorrect] = useState(true);

  const inputRef = useRef(null);
  const navigate = useNavigate();

  const Focus = () => {
    inputRef.current.focus();
  };

  const showHide = () => {
    if (input === 'password') {
      setInput('text');
    } else {
      setInput('password');
    }
  };

  useEffect(() => {
    Focus();
  }, []);

  const handleInputChange = (event) => {
    setInput(event.target.value);
    setValue(event.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (value === '72749') {
      setpasswordCorrect(true);
      setAuth(true);
      // You can navigate to another route when authentication is successful
      navigate('/Treasure');
    } else if (value === '') {
      setpasswordCorrect(false);
      alert('Please enter the passcode');
    } else {
      setpasswordCorrect(false);
      setValue('');
    }
  };

  return (
    <div>
      <center>
        <form className='security'>
          <input
            type={input}
            value={value}
            onChange={handleInputChange}
            placeholder='Enter the Passcode'
            ref={inputRef}
          />
          <button type='button' onClick={showHide}>
            {input === 'password' ? 'Show' : 'Hide'}
          </button>
          <br /> &nbsp; &nbsp;
          <p className='errormsg'>{!passwordCorrect && 'Your password is incorrect'}</p>
          <br />

          <button type='button' onClick={() => setValue(value.slice(0, -1))} className='BackSpace'>
            Back Space
          </button>
          <br />

          <button type='button' onClick={() => setValue(value + '7')}>7</button>
          <button type='button' onClick={() => setValue(value + '8')}>8</button>
          <button type='button' onClick={() => setValue(value + '9')}>9</button>
          <br />

          <button type='button' onClick={() => setValue(value + '4')}>4</button>
          <button type='button' onClick={() => setValue(value + '5')}>5</button>
          <button type='button' onClick={() => setValue(value + '6')}>6</button>
          <br />

          <button type='button' onClick={() => setValue(value + '1')}>1</button>
          <button type='button' onClick={() => setValue(value + '2')}>2</button>
          <button type='button' onClick={() => setValue(value + '3')}>3</button>
          <br />

          <button type='button' onClick={() => setValue(value + '0')}>0</button>
          <button type='submit' onClick={handleClick} className='Enter'>Enter</button>
          <br />

          <button type='button' onClick={() => setValue('')} className='Clear'>Clear</button>
        </form>
      </center>
    </div>
  );
}

export default SecurityPasscode;
