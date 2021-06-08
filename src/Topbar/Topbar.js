import React from 'react';

import classees from './Topbar.module.css';

const Topbar = (props) =>{
    return( 
            <header>
                <nav className={classees.Topbar}>
                <img src="https://pngimg.com/uploads/amazon/amazon_PNG6.png" alt="Amazon Logo" />
            </nav> 
            </header>
     );
}
 
export default Topbar;