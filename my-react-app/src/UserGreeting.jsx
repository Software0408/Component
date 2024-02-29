//Conditional Rendering:-   It allow to control what get rendered in your application based on certain condition

function UserGreeting(props){
    
        if(props.isLoggedIn){
            return  <h2 className="Welcome-message">Welcome {props.username}</h2>
        }
        else{
            return  <h2 className="login-prompt">Please Login To continue</h2>
        }
        /* OR return (props.isLoggedIn  ?   <h2>Welcome {props.username}</h2> :
                                            <h2>Please Login To Continue</h2>);
                                        OR
            const welcomeMessage = <h2 className="Welcome-message">Welcome {props.username}</h2>
            const loginPrompt =  <h2 className="login-prompt">Please Login To continue</h2>
            return(props.isLoggedIn ? welcomeMessage : loginPrompt)
        */
}

UserGreeting.propType = {
    username: PropType.string,
    isLoggedIn: PropTypes.bool,
}
UserGreeting.defaultProps = { //Are default value for Props incase someone logged in without a username.
    username: "Guest",
    isLoggedIn: false,
}

export default UserGreeting