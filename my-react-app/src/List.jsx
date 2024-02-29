import PropTypes from "prop-types"

function List (props){
    
    const category = props.category;
    const itemList = props.items;

    const listItems = itemList.map(item => <li key={item.id}>
                                        {item.name}: &nbsp; <b>
                                        {item.calories}</b> </li>);

    /*
        fruits.sort((a, b) => a.name.localeCompare(b.name)); //For Alphabetical order.
        fruits.sort((a, b) => b.name.localeCompare(a.name)); //For reverse Alphabetical order
        fruits.sort((a, b) => a.calories - b.calories); //For Numeric order
        fruits.sort((a, b) => b.calories - a.calories); // For reverse Numeric order.

        const listItems = fruits.map(fruit => <li key={fruit.id}>
        {fruit.name}: &nbsp; <b>
        {fruit.calories}</b> </li>); 
    */                  

    /*                          //HOW TO USE FILTER METHOD
        const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
        
        const listItems = lowCalFruits.map(lowCalFruit => <li key={lowCalFruit.id}>
            {lowCalFruit.name}: &nbsp; <b>
            {lowCalFruit.calories}</b> </li>);
    */
    /*
        const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);

        const listItems = highCalFruits.map(highCalFruit => <li key={highCalFruit.id}>
                                    {highCalFruit.name}: &nbsp; <b>
                                    {highCalFruit.calories}</b> </li>);
    */
    
    return(
        <>
            <h3 className="list-category">{category}</h3>
            <ul className="list-items">{listItems}</ul>
        </>
    );
}
List.defaultProps = {
    category: "Category",
    items: [],
}
List.propTypes = {     //To confirm Props dataType.
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({id:   PropTypes.number,
                                                    name: PropTypes.string,
                                                    calories: PropTypes.number})),
}    

export default List