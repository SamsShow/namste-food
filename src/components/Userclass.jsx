import React from "react";

class UserClass extends React.Component{

    // Whenever we create a class component, we need to create a constructor.
    // And we need to pass props to the constructor.
    // Whenever a new instnace of a class is created this constructor is called.
    // Then thsi prop is extracted and now props can be used in this class anywhere.

    constructor(props){
        super(props);
    }

    render(){
        return (
          <div className="p-2 m-2 border">
            <h2>Name: {this.props.name}</h2>
            <h3>Location: India</h3>
            <h4>Conatct: sakshamtyagi2008@gmail.com</h4>
          </div>
        );
    }
}

export default UserClass;

// Now this is a class component, and we can use state in this component.