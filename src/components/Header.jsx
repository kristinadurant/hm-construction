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
                        <li><Link to='/carronade-park-floor-plans'>FLOOR PLANS</Link></li>
                        <li><Link to='/carronade-park-amenities'>AMENITIES</Link></li>
                        <li><Link to='/carronade-park-gallery'>GALLERY</Link></li>
                        <li><Link to='/carronade-park-neighborhood'>NEIGHBORHOOD</Link></li>                       
                        <li><Link to='/carronade-park-schedule-tour'>SCHEDULE A TOUR</Link></li>             
                    </ul>
                </nav>
            </div>
        </header>
        }
        </Spring>
    )
}

export default Header;
