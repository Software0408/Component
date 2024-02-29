/*
    useState:- Re-render the component when the state value changes.
    
    useRef:- "use Reference" does not re-renders when its value changes.
             when you want a component to 'remember' some information,
             but you don't want that information to trigger new renders.

    1. Accessing/Interacting with DOM elemets
    2. Handling Focus, Animation and Transitions.
    3. Managing Timers and Intervals.
*/

import Reat, {useState, useEffect, useRef} from 'react';

function UseReference(){

    const ref = useRef(0);
    console.log(ref);

    useEffect(() => {
        console.log("COMPONENT RENDERED");
    });

    function handleClick(){
        ref.current++;
        console.log(ref.current);
    }

    return(
        <div>
            <button onClick={handleClick}>Click Me!</button><br />
            <input type="text" />
        </div>
    );   
}

export default UseReference;