import { Fragment } from 'react';

import HeaderCartButton from './HeaderCartButton';
import mainImage from '../../assets/main-image.jpg';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>K-W Electronics</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={mainImage} alt='A table full of delicious food!' />
      </div>
    </Fragment>
  );
};

export default Header;
