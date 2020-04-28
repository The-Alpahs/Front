import React, { Component } from "react";
import Form from "react-bootstrap/Form";

export default class Search extends Component {
  
  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <h3>App_Name</h3>
        <Form>
          <div className="budgetGroup">
            <input
             type ="text"

              name="budget"
              value="Enter Your Budget"
            />
          </div>

          <div className="veg-non_group">
            <button id="veg">Vegetarian</button>
            <button id="non-veg">Non-vegetarian</button>
          </div>

          <div className="no_people">
            <input list="number_people">
              <datalist id="numberlist">
                <option value="1"></option>
                <option value="2"></option>
                <option value="3"></option>
                <option value="4"></option>
                <option value="5"></option>
                <option value="6"></option>
              </datalist>
            </input>
          </div>

          <div className="food_preference">
            <button id="indian">Indian</button>
            <button id="chinese">Chinese</button>
            <br></br>
            <button id="pizza">Pizza</button>
            <button id="burgher">Burghers</button>
          </div>

          <div className="sub">
            <input type="submit" value="Submit" onclick="showResult()">
              {" "}
              SUBMIT
            </input>
          </div>
        </Form>
      </div>
    );
  }
}
