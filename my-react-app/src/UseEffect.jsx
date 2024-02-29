/*
    useEffect():- React Hook that tells React to do some code when one of this is run;
                        This component re-renders
                        This component mounts
                        The state of value changed.

    useEffect(function, [dependecies])

    1. useEffect(()=> {})       Runs after every rfe-render
    2. useEffect(() => {} [])   Runs only on mount
    3. useEffect(() => {}, [])  Runs on mount + when value changes.

    USES
    1. Event Listerrners
    DOM manipulation
    Subscriptions (real time updates)
    4. Fetching Data from API
    5. Clean up when a component unmounts.
*/

import React, {useState, useEffect} from 'react'

function UseEffect1(){

    const [count, setCount] = useState(0)
    const [color, setColor] = useState('blue')

    useEffect(() => {
        document.title = `My Counter Program:  ${color} ${count}`;
    }, [count, color]);

    function addCount(){
        setCount(c => c + 1);
    }
    function subtractCount(){
        setCount(c => c - 1);
    }
    function changeColor(){
        setColor(c => c === 'blue' ? 'red': 'blue');
    }

    return(
        <div>
            <p style={{color: color}}>Count: {count}</p>
            <button onClick={addCount}>Add</button>
            <button onClick={subtractCount}>Subtract</button><br />
            <button onClick={changeColor}>Change Color</button>
        </div>
    );
}

export default UseEffect1