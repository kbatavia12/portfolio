import React from 'react';
import classes from './WorkCard.module.css';

const WorkCard = (props) => {

    console.log(props.classNumber)

    return (
        <div className={`${classes.workcard} ${props.classNumber}`} >
            <div className= {classes.workcard__image_container} >
                <img className= {classes.workcard__image} src="https://picsum.photos/200/200" />
                <h1>Name</h1>
            </div>
            <div className = {classes.workcard__text_container} >
                <p className = {classes.workcard__text} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolor nesciunt ad temporibus ipsa illum dolore, cumque rem quas culpa exercitationem ducimus! Autem sed eveniet quos nemo dignissimos, ipsam corporis!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolor nesciunt ad temporibus ipsa illum dolore, cumque rem quas culpa exercitationem ducimus! Autem sed eveniet quos nemo dignissimos.</p>
            </div>
        </div>
    )
};

export default WorkCard;
