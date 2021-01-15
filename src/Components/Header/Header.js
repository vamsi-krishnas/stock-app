import React from 'react';
import Aux from '../../hoc/Auxilary';
import './Header.css'
import Logo from '../../logo.svg'

const Header = ( props ) => {
    return(
    <Aux>
        <nav>
            <div className="logo">
                <img src={Logo} alt="logo" />
            </div>
            <ul className="navigation">
                <li><a href='/'>Link 1</a></li>
                <li><a href='/'>Link 2</a></li>
                <li><a href='/'>Link 3</a></li>
            </ul>
        </nav>
    </Aux>
    )}

export default Header;