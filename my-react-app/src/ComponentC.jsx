/*
    UseContext():- Is a React hook that allows you to share values
                    between multiple levels of components without
                    passing props through each level.
*/

import React, {useContext} from 'react';
import {userContext } from "./ComponentA.jsx";
import ComponentD from "./ComponentD.jsx"

function ComponentC(){

    const user = useContext(userContext)

    return(
        <div className="box">
            <h1>ComponentC</h1>
            <h2>{`Hello again ${user}`}</h2>
            <ComponentD/>
        </div>
    );
}

export default ComponentC