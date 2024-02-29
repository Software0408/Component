/* 
    Reach Hook:- Is a special function that allow functional com-
    ponent to use React features without writing class component;
    useState, useEffect, useContext, useReducer, useCallback etc).
    useState():- A React hook that alows the creation of a stateful
    variable And a setter function to update its value in the 
    Virtual DOM [name, setName].
    onChange:-  Is an event handler primarily with form elements
    including <Input>, <textarea>, <select>, <radio>.
    It trigger a function every time the value changes.
*/

import React, {useState} from "react"

function MyComponent(){
    const [name, setName] = useState("Guest");
    const [quantity, setQuantity] = useState("1");
    const [comment, setComment] = useState();
    const [payment, setPayment] = useState("What's Your Payment Choice?");
    const [shipping, setShipping] = useState("Shipping choice");
          

    function handleNameChange(event){
        setName(event.target.value);
    }
    function handleQuantityChange(event){
        setQuantity(event.target.value);
    }
    function handleCommentChange(event){
        setComment(event.target.value);
    }
    function handlePaymentChange(event){
        setPayment(event.target.value);
    }
    function handleShippingChange(event){
        setShipping(event.target.value);
    }

    return(
        <div>
            <input type="text" value={name} onChange={handleNameChange}/>
            <p>Name: {name}</p>

            <input  value={quantity} onChange={handleQuantityChange} />
            <p>Quantity: {quantity}</p>

            <textarea placeholder="User Comment" cols="30" rows="5" 
                        value={comment} onChange={handleCommentChange}/>
            <p>Comments: {comment}</p>

            <select value={payment} onChange={handlePaymentChange}>
                <option value="Dropdown">Select an option</option>
                <option value="Visa">Visa</option>
                <option value="Mastercard">Mastercard</option>
                <option value="Giftcard">Giftcard</option>
            </select>
            <p>Payment: {payment}</p> 

            <label>
                <input type="radio" value="Pick Up"
                checked={shipping === "Pick Up"}
                onChange={handleShippingChange}/>
                Pick Up
            </label><br />
            <label>
            <input type="radio" value="Delivery"
                checked={shipping === "Delivery"}
                onChange={handleShippingChange}/>
                Delivery
            </label>
            <p>Shipping: {shipping}</p>
        </div>
    );
}

export default MyComponent
