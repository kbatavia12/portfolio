import React from 'react';
import classes from './Navbar.module.css';

const Navbar = () => {
    return (
        <div className={classes.navbar}>
            
            <div className={classes.navbar__left}>
                <p className={classes.navbar__links} >Work</p>
                <p className={classes.navbar__links} >About</p>
                <p className={classes.navbar__links} >Contact</p>
            </div>

            <div className={classes.navbar__center}>
                <p>D</p>
            </div>


            <div className={classes.navbar__right}>
                <p className={classes.navbar__links} >I1</p>
                <p className={classes.navbar__links} >I2</p>
                <p className={classes.navbar__links} >I3</p>
            </div>

        </div>
    )
};

export default Navbar;
