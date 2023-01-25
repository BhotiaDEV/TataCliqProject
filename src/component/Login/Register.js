import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';
import './Register.css';

const registerurl = 'https://loginapilive.onrender.com/api/auth/register'

export default class Register extends Component {
  constructor(){
    super();
    this.state={
      name:'',
      email:'',
      phone:'',
      password:''
    }
  }
  handleChange(e){
    this.setState({[e.target.name]: e.target.value})
  }
  handleSubmit(){
    axios.post(registerurl, (this.state))
    .then(this.props.history.push('/'))
  }
  render() {
    return (
      <React.Fragment>
        <Header/>
        <div className='register'>
            <form>
              <div className='register-heading'>Register</div>
              <label for="InputName" className="name-label">Name</label>
              <input required name='name' type="name" className="name" id="InputName" onChange={(e)=>this.handleChange(e)} aria-describedby="nameHelp"/>

              <label for="InputEmail" className="email-label">Email address</label>
              <input required name='email' type="email" className="email" id="InputEmail" onChange={(e)=>this.handleChange(e)} aria-describedby="emailHelp"/>
              
              <label for="InputPhone" className="phone-label">Phone Number</label>
              <input required name='phone' type="phone" className="phone" id="InputPhone" onChange={(e)=>this.handleChange(e)} aria-describedby="phoneHelp"/>

              <label for="InputPassword" className="password-label">Password</label>
              <input required name='password' type="password" className="password" onChange={(e)=>this.handleChange(e)} id="InputPassword"/> 
              <Link to={`/login`}>
                <div className='registered-user'>
                  Already have Account? Login.
                </div>
              </Link>                  
              <button type="submit" className="register-submit-btn" onClick={()=>this.handleSubmit()}>Submit</button>
            </form>
          </div>
      </React.Fragment>
    )
  }
}
