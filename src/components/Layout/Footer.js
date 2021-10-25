import { Fragment } from "react"
import { NavLink } from "react-router-dom"

import classes from './Footer.module.css'

const Footer = () => {
    return (
        <Fragment>
        <footer className={classes.footer}>
            <div>
                <h2>K-W Electronics</h2>
                <p>Copyright &copy; 2021</p>
            </div>
            <nav>
                <ul>
                <li><NavLink to="home">Home</NavLink></li>
                <li><NavLink to="products">Products</NavLink></li>
                <li><NavLink to="contact">Contact us</NavLink></li>
                </ul>
            </nav>
            <div>
                <h3>Address</h3>
                <p>79 Florence Ave</p>
                <p>Kitchener, ON</p>
                <h3>Phone</h3>
                <p>519-722-0063</p>
            </div>
            </footer>
        </Fragment>
    )
}

export default Footer