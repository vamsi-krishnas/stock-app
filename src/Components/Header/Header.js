import React from 'react';
import Aux from '../../hoc/Auxilary';
import './Header.css'
import Logo from '../../logo.svg'
import { Link } from 'react-router-dom';

const Header = ( props ) => {
    return(
    <Aux>
        <nav>
            <div className="logo">
                <img src={Logo} alt="logo" />
            </div>
            <ul className="navigation">
                <li><Link to='/'>Home</Link></li>
                <li><Link to="/Login">Login</Link></li>
                <li><Link to="/Register">Register</Link></li>
            </ul>
        </nav>
    </Aux>
    )}

export default Header;