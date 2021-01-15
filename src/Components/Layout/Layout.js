import React from 'react';
import Aux from '../../hoc/Auxilary';
const Layout = (props) => (
   <Aux>
       <div>
           Links
       </div>
       <div>
           {props.children}
       </div>
   </Aux>

);

export default Layout;