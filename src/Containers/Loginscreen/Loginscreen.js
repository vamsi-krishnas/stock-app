import React, { Component } from 'react';
import Login from '../../Components/Login/Login';

class Loginscreen extends Component {
    constructor (props) {
        super (props);
        this.state = {
            Loginscreen: [],
            loginmessage:'',
            isLogin : true
        }
    }
    componentDidMount () {
        let Loginscreen = [];
        Loginscreen.push(<Login /> );
        console.log(' Inside componentWillMount')
        let loginmessage = "Not Registered yet, Register Now";
        this.setState = ( { 
                Loginscreen:Loginscreen,
                loginmessage:loginmessage
        })
    }
    handleClick (event) {
        let loginmessage;
        if(this.state.isLogin) {
            let Loginscreen= [];
            Loginscreen.push(<Login parentContext={this} />)
            this.setState({
                Loginscreen: Loginscreen,
                loginmessage: loginmessage,
                isLogin:true
            })   
        }
        else {
            var Loginscreen= [];
            Loginscreen.push()// create Register componet and logic for binding 
        }

    }
    render () {
        return (
            <div>
                 {this.state.loginmessage}
                 <div>
                     <button name="Login" onClick= { (event) => this.handleClick(event)} />
                 </div>
            </div>
        )
    }
};
export default Loginscreen;