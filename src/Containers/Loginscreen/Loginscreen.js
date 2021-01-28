import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import Login from '../../Components/Login/Login';
import Register from '../../Components/Register/Register';
import './Loginscreen.css'

class Loginscreen extends Component {
    constructor (props) {
        super (props);
        this.state = {
            Loginscreen: [],
            loginmessage:'Please Login',
            isLogin : true
        }
    }
    componentDidMount(){
        let loginscreen=[];
        loginscreen.push(<Login parentContext={this} />);
        let loginmessage = "Not registered yet, Register Now";
        this.setState({
                      loginscreen:loginscreen,
                      loginmessage:loginmessage
                        })
      }
    handleClick(event){
    // console.log("event",event);
    let loginmessage;
    let loginscreen=[];
    if(this.state.isLogin){
      loginscreen.push(<Register parentContext={this} appContext={this.props.appContext}/>);
      loginmessage = "Already registered.Go to Login";
      <Redirect to='/Register' />
      this.setState({
                     loginscreen:loginscreen,
                     loginmessage:loginmessage,
                     buttonLabel:"Login",
                     isLogin:false
                   })
    }
    else{
      loginscreen.push(<Login parentContext={this}/>);
      loginmessage = "Not Registered yet.Go to registration";
      <Redirect to='/Login' />
      this.setState({
                     loginscreen:loginscreen,
                     loginmessage:loginmessage,
                     isLogin:true
                   })
    }
  }
    render () {
        return (
            <div>
                 {this.state.loginmessage}
                 <div>
                     <button name="Login" onClick= { () => this.handleClick(this)}> Login</button>
                     <button name="Register" onClick= { () => this.handleClick(this)}> Register</button>
                 </div>
                 {this.state.loginscreen}
            </div>
        )
    }
};
export default Loginscreen;