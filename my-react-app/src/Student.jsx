import PropTypes from "prop-types" //Is a good pratice to include propTypes and also good for Debugging.

function Student(props){
    return(
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    );
}
Student.propTypes = {     //To confirm Props dataType.
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}
Student.defaultProps = {  //Are default value for Props incase they are not pass from the parent component
    name: "Guest",
    age: 0,
    isStudent: false,
}
export default Student