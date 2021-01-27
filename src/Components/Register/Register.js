import  { Component } from 'react';
class Register extends Component {
    constructor (props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }
    render() {
        return (
            <div>
                <h2>Register</h2>
                <div>
                    <label>User Name</label>
                    <input type='text' name="User Name" onChange= { (event, newValue) => this.setState ({username: newValue})} />
                </div>
                <div>
                <label>Password</label>
                    <input type='password' name="Password" onChange= { (event, newValue) => this.setState ({password: newValue})} />
                </div>
                    <button name="Register" onClick= {(event) => this.handleClick(event)} />
            </div>
            
        )
    }

}
export default Register;