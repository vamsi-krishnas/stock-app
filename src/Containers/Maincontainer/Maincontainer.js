import React, { Component } from 'react';
import '../Maincontainer/Maincontainer.css';
import Loginscreen from '../Loginscreen/Loginscreen';

class  Maincontainer extends Component {
    constructor(props){
        super(props);
        this.state={
          loginPage:[]
        }
      }
      
    componentDidMount(){
        var loginPage =[];
        loginPage.push(<Loginscreen parentContext={this}/>);
        this.setState({
                      loginPage:loginPage
                        })
      }
      render () {
        return (
            <div className="container">
                {this.state.loginPage}
            </div>
        )
      }
    
};

export default Maincontainer;