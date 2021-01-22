import React from 'react';
import '../Maincontainer/Maincontainer.css';
import Loginscreen from '../Loginscreen/Loginscreen';
import Login from '../../Components/Login/Login';

const Maincontainer = props => {

    return (
        <div className="container">
            <Login></Login>
        </div>
    )
};

export default Maincontainer;