import React, { Component } from 'react';
import axios from "axios";

class App extends Component {
constructor(){
  super();
  this.state = {
    name : "",
    email : "",
    username : "",
    pass : ""

  }
  this.onChange = this.onChange.bind(this);
  this.onSubmit = this.onSubmit.bind(this);
}
onChange(e) {
  this.setState({ [e.target.name]: e.target.value });
}

onSubmit(event){
  event.preventDefault();
  const newCustomer = {
    name: this.state.name,
    email: this.state.email,
    username: this.state.username,
    pass: this.state.pass
    };
   
    axios.post("/users/register", newCustomer)
    .then(res => console.log(res.data))
    .catch(err => console.log(err));
    
  }
  render() {
    return (
      <div>
       <div className="limiter">
        <div className="container-login100">
          <div className="login100-more" style={{backgroundImage: 'url("images/bg-01.jpg")'}} />
          <div className="wrap-login100 p-l-50 p-r-50 p-t-72 p-b-50">
            <form onSubmit={this.onSubmit} className="login100-form validate-form">
              <span className="login100-form-title p-b-59">
                Sign Up
              </span>
              <div className="wrap-input100 validate-input" data-validate="Name is required">
                <span className="label-input100">Full Name</span>
                <input className="input100" type="text" name="name" placeholder="Name..." value={this.state.name} onChange={this.onChange} required/>
                <span className="focus-input100" />
              </div>
              <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                <span className="label-input100">Email</span>
                <input className="input100" type="text" name="email" placeholder="Email addess..." value={this.state.email} onChange={this.onChange} required/>
                <span className="focus-input100" />
              </div>
              <div className="wrap-input100 validate-input" data-validate="Username is required">
                <span className="label-input100">Username</span>
                <input className="input100" type="text" name="username" placeholder="Username..." value={this.state.username} onChange={this.onChange} required/>
                <span className="focus-input100" />
              </div>
              <div className="wrap-input100 validate-input" data-validate="Password is required">
                <span className="label-input100">Password</span>
                <input className="input100" type="password" name="pass" placeholder="*************" value={this.state.pass} onChange={this.onChange} required/>
                <span className="focus-input100" />
              </div>
             
              <div className="flex-m w-full p-b-33">
                <div className="contact100-form-checkbox">
                  <input className="input-checkbox100" id="ckb1" type="checkbox" name="remember-me" />
                  <label className="label-checkbox100" htmlFor="ckb1">
                   
                  </label>
                </div>
              </div>
              <div className="container-login100-form-btn">
                <div className="wrap-login100-form-btn">
                  <div className="login100-form-bgbtn" />
                  <button className="login100-form-btn">
                    Sign Up
                  </button>
                </div>
                <a href="/" className="dis-block txt3 hov1 p-r-30 p-t-10 p-b-10 p-l-30">
                  Sign in
                  <i className="fa fa-long-arrow-right m-l-5" />
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
      </div>
    );
  }
}

export default App;
