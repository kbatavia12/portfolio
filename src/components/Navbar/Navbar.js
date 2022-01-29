import React from 'react';
import classes from './Navbar.module.css';
import NavbarLinks from './NavbarLinks';

const Navbar = () => {
    return (
        <div className={classes.navbar}>

            <div className={classes.navbar__left}>
                <NavbarLinks linkName="About" />
                <NavbarLinks linkName="Work" />
                <NavbarLinks linkName="Contact" />
            </div>

            <div className={classes.navbar__center}>
                <p>D</p>
            </div>


            <div className={classes.navbar__right}>
                <NavbarLinks linkName="I1" />
                <NavbarLinks linkName="I2" />
                <NavbarLinks linkName="I3" />
            </div>

        </div>
    )
};

export default Navbar;
