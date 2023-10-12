import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import SecurityPasscodeMsg from './SecurityPasscodeMsg';

function SecurityPasscode() {
  const [value, setValue] = useState('');
  const [input, setInput] = useState('password');
  const [auth, setAuth] = useState(false);
  const [attempts, setAttempts] = useState(0);
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
    setAuth(true)
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (value === '72749') {
      setpasswordCorrect(true);
      setAuth(true);
      console.log("correct passcode")
      // You can navigate to another route when authentication is successful
      navigate('/Treasure');
    } else if (value === '') {
      setpasswordCorrect(false);
      console.log("Please enter the passcode")
      alert('Please enter the passcode');
    }else{
      console.log("wrong")
        setAttempts(attempts+2)
        // setValue('')
      if(attempts>=3){
          console.log("max attempts reached")
          // setMessage('')
          const url=`https://api.whatsapp.com/send?phone=918520953164 &text=${"someone is trying to access your treasure"}`
          window.location.href=url
    } 
    // else {
    //   setpasswordCorrect(false);
    //   console.log("Incorrect Passcode")
    //   setValue('');
    // }
  }
}

  // <SecurityPasscodeMsg/>

  return (
    <div>
      <center><>
        <form className='security'>
          <input
            type={input}
            value={value}
            onChange={handleInputChange}
            placeholder='Enter the Passcode'
            ref={inputRef}
            className='inputfield'
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
        </>
      </center>
    </div>
  );
}

export default SecurityPasscode;