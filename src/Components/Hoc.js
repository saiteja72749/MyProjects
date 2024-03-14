import React, { useRef, useState } from 'react'

const HigherComp = (props) => {
    const [count, setCount] = useState(false);
    const { children: C } = props;
    const Child = React.cloneElement(C, { count })
    return <>
        {Child}
        <button onClick={() => setCount(!count)}></button>
    </>
}


const HigherComp2 = (Components) => {
    // const [count, setCount] = useState(false);
    let count = true;
   
    return <>
        <Components count={count} />
        {/* <button onClick={() => setCount(!count)}></button> */}
    </>
}

export { HigherComp2 };
export default HigherComp;