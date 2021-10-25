import { NavLink } from "react-router-dom";
import classes from './Home.module.css'
import banner from '../assets/banner1.jpg'
import samsung from '../assets/logo-samsung-1.svg'
import apple from '../assets/Apple-1.svg'
import blackberry from '../assets/logo-blackberry-1.svg'
import google from '../assets/logo-google-1.svg'
import huawei from '../assets/logo-huawei-1.svg'
import lg from '../assets/logo-lg-1.svg'
import motorola from '../assets/logo-motorola-1.svg'
import { Fragment } from "react";

const Home = () => {
    return (
        <Fragment>
        <div className={classes.hero}>
            <NavLink to="products"><img src={banner}  alt='Front banner'></img></NavLink>
        </div>
        <div className={classes.brands}>
            <h1>Brands we work with</h1>
            <div>
                <img src={samsung} alt='Samsung logo'></img>
                <img src={apple} alt='Apple logo'></img>
                <img src={blackberry} alt='Blackberry logo'></img>
                <img src={google} alt='Google logo'></img>
                <img src={huawei} alt='Huawei logo'></img>
                <img src={lg} alt='LG logo'></img>
                <img src={motorola} alt='Motorola logo'></img>
            </div>
        </div>
        </Fragment>
        )
}

export default Home