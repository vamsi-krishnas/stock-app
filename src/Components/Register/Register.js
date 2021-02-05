import  { Component } from 'react';
import Input from '../UI/Input/Index';

class Register extends Component {
    constructor (props) {
        super(props);
        this.state = {

            firstName: '',
            lastName: '',
            email: '',
            password: ''
        }
    }
    render() {
        return (
            <div className="register">
                <h1>Registration Form</h1>
                
                <Container fluid="justify-content-md-center">
                    <Row style={{ marginTop: "30px" }}>
                        <Col md={{ span: 8, offset: 2 }}>
                            <Form>
                                
                                <Row>
                                    <Col >
                                        <Input
                                            label="FirstName"
                                            type="text"
                                            // placeholder="Enter your Firstname"
                                            onChange={(event, newValue) => this.setState ({firstName: newValue})}
                                        />
                                    </Col>
                                    <Col >
                                        <Input
                                            label="LastName"
                                            type="text"
                                            value=""
                                            // placeholder="Enter your Lastname"
                                            onChange={(event, newValue) => this.setState ({lastName: newValue})}
                                        />
                                    </Col>
                                    <Col >
                                        <Input
                                            label="Email  Id"
                                            type="text"
                                            value=""
                                            // placeholder="Enter your Email address"
                                            onChange={(event, newValue) => this.setState ({email: newValue})}
                                        />
                                    </Col>
                                    <Col md={6}>
                                        <Input
                                            label="Password"
                                            type="password"
                                            value=""
                                            // placeholder="Enter your Password"
                                            onChange={(event, newValue) => this.setState ({password: newValue})}
                                        />
                                    </Col>

                                </Row>

                                <button type="submit" className="btn btn-primary">SIGN UP</button>
                            </Form>

                        </Col>
                    </Row>
                </Container>
            </div>
            // <div>
            //     <h2>Register</h2>
            //     <div>
            //         <label>User Name</label>
            //         <input type='text' name="User Name" onChange= { (event, newValue) => this.setState ({username: newValue})} />
            //     </div>
            //     <div>
            //     <label>Password</label>
            //         <input type='password' name="Password" onChange= { (event, newValue) => this.setState ({password: newValue})} />
            //     </div>
            //         <button name="Register" onClick= {(event) => this.handleClick(event)} />
            // </div>
            
        )
    }

}
export default Register;