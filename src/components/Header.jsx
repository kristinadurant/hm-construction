import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Spring } from 'react-spring/renderprops';

const Header = () => {    
    const [reverse, setReverse] = useState(false);
    let prevScrollpos = window.pageYOffset;

    window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
          //scroll up
        setReverse(false);
      } else {
          //scroll down
        setReverse(true);
      }
      prevScrollpos = currentScrollPos;
    };

    return (
        <Spring from={{marginTop: -50}} to={{marginTop: 0}} reset={true} reverse={reverse}>
            {props =>
        <header style={props}>
            <div className="inner">
                <Link to='/' className="logo">
                    HM
                </Link>
                <nav>
                    <ul>
                        <li><Link to='/carronade-park-floor-plans'>HOME</Link></li>
                        <li><Link to='/carronade-park-amenities'>SERVICES</Link></li>
                        <li><Link to='/carronade-park-gallery'>PROJECTS</Link></li>
                        <li><Link to='/carronade-park-neighborhood'>ABOUT US</Link></li>                       
                        <li><Link to='/carronade-park-schedule-tour'>CONTACT US</Link></li>             
                    </ul>
                </nav>
            </div>
        </header>
        }
        </Spring>
    )
}

export default Header;
