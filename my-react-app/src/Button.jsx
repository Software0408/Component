/* Click Event:- An interaction when a user click on a 
            specific element. We can respond to clicks 
            by passing a callback to the onclick event handler.
*/

function Button(){

    const imgUrl = "./src/assets/profile.jpg";
    
    const handleClick = (e) => e.target.style.display = "none";
    
    return (
        <img onClick={(e) => handleClick(e)} src={imgUrl} alt="" />
    );

    /*const handleClick = (e) => console.log(e); // SyntheticBaseEvent
    return (
        <button onClick={(e) => handleClick(e)}>Click Me</button>
    );*/
}

export default Button