import React, { Component } from "react";
import Form from "react-bootstrap/Form";

export default class Result extends Component {
  static navigationOptions={
      title:"Result",
  };
  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <h3>App_Name</h3>

        <Form>
         <div className="restaurants">
                <button name="r1" id="res">Restaurant 1</button>
                <button name="r2" id="res">Restaurant 2</button> 
                <br></br>
                <button name="r3" id="res">Restaurant 3</button>
                <button name="r4" id="res">Restaurant 4</button>
                <br></br>
                <button name="r5" id="res">Restaurant 5</button>
                <button name="r6" id="res">Restaurant 6</button>
          </div> 
        </Form>
      </div>
    );
  }
}
