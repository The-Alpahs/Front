import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
// import {browserHistory} from "react-router-dom";
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class Login extends Component {
                //  onNavigateHome() {
                //    browserHistory.push("/home")
                //  }

                state = {
                  person_email:"",
                  person_password:"",

                }

                 constructor(props) {
                   super(props);
                   this.onChangePersonEmail = this.onChangePersonEmail.bind(
                     this
                   );
                   this.onChangePersonPassword = this.onChangePersonPassword.bind(
                     this
                   );
                   this.onSubmit = this.onSubmit.bind(this);

                   this.state = {
                     person_email: "",
                     person_password: "",
                   };
                 }

                 onChangePersonEmail(e) {
                   this.setState({
                     person_email: e.target.value,
                   });
                 }

                 onChangePersonPassword(e) {
                   this.setState({
                     person_password: e.target.value,
                   });
                 }

                 onSubmit(e) {
                   e.preventDefault();
                   const obj = {
                     person_email: this.state.person_email,
                     person_password: this.state.person_password,
                   };

                   axios
                     .post("http://localhost:4000/person/add, obj")
                     .then((res) => console.log(res.data));

                   this.setState({
                     person_email: "",
                     person_password: "",
                     emailErro:"",
                     

                   });
                 }

                 render() {
                   return (
                     <div style={{ marginTop: 10 }}>
                       <h3>Login Form</h3>
                       <Form onSubmit={this.onSubmit}>
                         <div className="form-group">
                           <label>Email </label>
                           <input
                             type="text"
                             className="form-control"
                             placeholder="John@gmail.com"
                             value={this.state.person_email}
                             onChange={this.onChangePersonEmail}
                           />
                         </div>

                         <div className="form-group">
                           <label>Password </label>
                           <input
                             type="text"
                             className="form-control"
                             value={this.state.person_password}
                             onChange={this.onChangePersonPassword}
                           />
                         </div>

                         <div className="form-group">
                           <input
                             type="submit"
                             value="Login"
                             className="btn btn-primary "
                           />
                         </div>

                         



                       </Form>
                     </div>
                   );
                 }
               } 


