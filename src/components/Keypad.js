import React from "react";

class Keypad extends React.Component {

     handleInputChange = () => {

    console.log("Entering password...");

  };

     render() {

    return <input type="password" onChange={this.handleInputChange} />;

  }
}

export default Keypad;
