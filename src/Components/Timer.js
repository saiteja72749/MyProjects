import React, { useEffect, useState, useRef } from 'react';
// style={{border: '2px solid', margin:'20px auto', width: '600px'}}
import './timer.css'
function Timer() {
        const [count, setCount] = useState(0)
        const [sta, setSta] = useState(false)
        const [pau, setPau] = useState(true)
        const [res, setRes] = useState(true)
        const [rest, setRest] = useState(true)
        const timerRef = useRef()
        function tick() {
                setCount(prevCount => prevCount + 1)
        }

        const start = () => {
                setSta(true)
                setPau(false)
                timerRef.current = setInterval(tick, 1000)
                console.log('timer started')
        }
        const pause = () => {
                clearInterval(timerRef.current)
                setPau(true)
                setRes(false)
                setRest(false)
                console.log('timer paused')
        }
        const resume = () => {
                timerRef.current = setInterval(tick, 1000)
                console.log('timer resumed')
                setRes(true)
                setRest(true)
                setPau(false)
        }
        const reset = () => {
                clearInterval(timerRef.current)
                setCount(0)
                setRest(true)
                setRes(true)
                setSta(false)
                console.log('reset done')
        }

        return (
                <center>
                        <div className='whole' >
                                <div className='count'>{<div className='number'>{count}</div>}</div>
                                <br />
                                <button className='start' onClick={() => start()} disabled={sta} >start</button>
                                <button onClick={() => pause()} disabled={pau}>pause</button>
                                <button onClick={() => resume()} disabled={res}>resume</button>
                                <button onClick={() => reset()} disabled={rest}>reset</button><br />
                                {sta ? '' : <i className='me'>Click start to start</i>}
                                {pau ? '' : <i className='me'>Click pause to pause</i>}
                                {res ? '' : <i className='me'>Click resume to resume</i>}<br />
                                {rest ? '' : <i className='me'>Click reset to reset</i>}
                        </div>
                </center>
        )
}

export default Timer