import { Fragment } from 'react';
import { NavLink } from "react-router-dom";

import HeaderCartButton from './HeaderCartButton';

import classes from './Header.module.css';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1><NavLink to="home">K-W Electronics</NavLink></h1>
        <nav>
          <ul>
            <li><NavLink to="home">Home</NavLink></li>
            <li><NavLink to="products">Products</NavLink></li>
            <li><NavLink to="contact">Contact us</NavLink></li>
          </ul>
        </nav>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      
    </Fragment>
  );
};

export default Header;
