import React, { Component } from "react";
import Form from "react-bootstrap/Form";

import axios from "axios";





export default class Signup extends Component {
    constructor(props) {
        super(props); 
        this.onChangePersonName = this.onChangePersonName.bind(this);
        this.onChangePersonEmail = this.onChangePersonEmail.bind(this);
        this.onChangePersonPassword = this.onChangePersonPassword.bind(this);
        
        this.onSubmit = this.onSubmit.bind(this);


        this.state = {
            person_name :'',
            person_email :'',
            person_password : '',
        }
    }

    onChangePersonName(e){
        this.setState({
            person_name : e.target.value
        });
    }

    onChangePersonEmail(e){
        this.setState({
            person_email: e.target.value
        });
    }

    onChangePersonPassword(e){
        this.setState({
            person_password: e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();
       const obj = {
         person_name : this.state.person_name,
         person_email : this.state.person_email,
         person_password : this.state.person_password,
           
       };

       axios.post('http://localhost:4000/person/add, obj').then(res=> console.log(res.data));

       this.setState({
           person_name :'',
           person_email :'',
           person_password :''
       })


    }






  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <h3>Signup Form</h3>
        <Form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Name </label>
            <input type="text" className="form-control" />
          </div>

          <div className="form-group">
            <label>Email </label>
            <input type="text" className="form-control" />
          </div>

          <div className="form-group">
            <label>Password </label>
            <input type="text" className="form-control" />
          </div>

          <div className="form-group">
            <input type="submit" value="Signup" className="btn btn-primary" />
          </div>
        </Form>
      </div>
    );
  }
}
