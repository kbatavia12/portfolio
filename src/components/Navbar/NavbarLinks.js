import React from 'react';
import classes from './NavbarLinks.module.css'

const NavbarLinks = (props) => {

    const { linkName } = props;

    const onLinkClick = () => {
        window.location.href = `#${linkName.toLowerCase()}`
    }

    return (
        <div onClick = {onLinkClick} className={classes.link} >
            <p className={classes.link__text} >{linkName}</p>
            <div className={classes.link__underline}></div>
        </div>
    );
};

export default NavbarLinks;
