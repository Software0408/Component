/*
    UseContext():- Is a React hook that allows you to share values
                    between multiple levels of components without
                    passing props through each level.
   
    PROVIDER COMPONENT
        1. Import {createContext} from 'react';
        2. Export const Mycontext = createContext();
        3. <MyContext.Provider value={value}> 
                <Child/> 
        </MyContext.Provider>
    
    CONSUMER COMPONENTS
        1. Import React, {useContext} from 'react';
            Import {MyContext} from "./ComponentA";
        2. const value = useContext(MyContext);
*/

import React, {useState, createContext} from "react";
import ComponentB from "./ComponentB.jsx";

export const userContext = createContext();

function ComponentA(){
    const [user, setUser] = useState("Software");

    return(
        <div className="box">
            <h1>ComponentA</h1>
            <h2>{`Hello ${user}`}</h2>
            <userContext.Provider value={user}>
                 <ComponentB user={user}/>
            </userContext.Provider>
        </div>
    );
}

export default ComponentA