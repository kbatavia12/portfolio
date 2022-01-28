import React, { useEffect, useRef, useState } from 'react';
import classes from './FAB.module.css';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

// const iconStyles =  {

// }


const FABLike = () => {

    const likeIconRef = useRef(null);
    const [tooltipText, setTooltipText] = useState("Give a Thumbs UP!");
    // useEffect(() => {
    //     return () => {
    //         likeIconRef.current.classList.remove(classes.rotate);   
    //     }
    // }, [])

    const onLikeClick = () => {
        likeIconRef.current.classList.add(classes.rotate);
    }


    return (
        <div onClick = {onLikeClick} className={classes.fab__main} >
            <ThumbUpIcon ref = {likeIconRef} fontSize="large" className={classes.fab__icon} />
            <span className={classes.tooltiptext} >{tooltipText}</span>
        </div>
    );
};

export default FABLike;
