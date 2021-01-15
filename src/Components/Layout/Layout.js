import React from 'react';
import Aux from '../../hoc/Auxilary';
import Header from '../Header/Header';
import Maincontainer from '../../Containers/Maincontainer/Maincontainer';
const Layout = (props) => (
   <Aux>
       <Header></Header>
       <Maincontainer></Maincontainer>
   </Aux>

);

export default Layout;