import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';
import './Login.css'

const loginurl = 'https://loginapilive.onrender.com/api/auth/login'

export default class Login extends Component {
  constructor(){
    super();
    this.state={
      email:'',
      password:'',
      message:''
    }
  }
  handleChange(e){
    this.setState({[e.target.name]:e.target.value})
  }
  handleSubmit(){
    // console.log('hello')
    axios.post(loginurl, (this.state))
    .then((res)=>{
      console.log(res)
      if(res.data.auth === false){
        this.setState({message: res.data.token});
      }
      else{
        // console.log(res)
        sessionStorage.setItem('loginToken', res.data.token);
        this.props.history.push('/');
      }
    })
  }

  render() {
    return (
        <React.Fragment>
          <Header/>
          <div className='login'>
            <div className='form'>
              <div className='login-heading'>Login</div>
              <label htmlFor="InputEmail" className="email-label">Email address</label>
              <input required type="email" className="email" name='email' id="InputEmail" onChange={(e)=>this.handleChange(e)} aria-describedby="emailHelp"/>

              <label htmlFor="InputPassword" className="password-label">Password</label>
              <input required type="password" className="password" name='password' id="InputPassword" onChange={(e)=>this.handleChange(e)}/> 
              <Link to={`/register`}>
                <div className='new-user'>
                  New User? Register Now.
                </div>
              </Link>  
              <div>{this.state.message}</div>             
              <button type="submit" className="login-submit-btn" onClick={(e)=>{this.handleSubmit()}}>Submit</button>
            </div>
          </div>
        </React.Fragment>
    )
  }
}
