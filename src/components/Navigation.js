import React from 'react';
import { Link } from 'react-router-dom';

import * as routes from '../constants/routes';

const Navigation = () =>
  <div>
    <Header />
  </div>

const Header = () => (
  <nav className="pa3 pa4-ns">
    <Link to={routes.HOME}
      className="link dim black b f1 f-headline-ns tc db mb3 mb4-ns"
      href="#"
      title="Home"
    >
      Dima Ostrovs
    </Link>
    <div className="tc pb3">
      <Link to={routes.ABOUT} className="link dim gray f6 f5-ns dib mr3" href="#" title="About">
        About
      </Link>
      <Link to={routes.PORTFOLIO} className="link dim gray f6 f5-ns dib mr3" href="#" title="Store">
        Portfolio
      </Link>
      <Link to={routes.CONTACT} className="link dim gray f6 f5-ns dib" href="#" title="Contact">
        Contact
      </Link>
    </div>
  </nav>
);

export default Navigation;