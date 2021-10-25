import { Fragment } from 'react';

import MealsSummary from './MealsSummary';
import AvailableMeals from './AvailableMeals';
import mainImage from '../../assets/main-image.jpg';

import classes from './Meals.module.css'

const Meals = () => {
  return (
    <Fragment>
    <div className={classes['main-image']}>
        <img src={mainImage} alt='A table full of delicious food!' />
      </div>
      <MealsSummary />
      <AvailableMeals />
    </Fragment>
  );
};

export default Meals;
