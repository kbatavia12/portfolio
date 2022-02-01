import React, { useEffect, useRef } from 'react';
import useIntersection from '../../hooks/useIntersection';
import classes from './About.module.css';
import PP from '../../assets/pp.jpg'
import Layout from '../../components/Layout/Layout';

const About = () => {

    const aboutContainerRef = useRef(null);
    const PPRef = useRef(null);
    const aboutTextRef = useRef(null);
    const isVisible = useIntersection(aboutContainerRef);


    useEffect(() => {



        if (isVisible) {
            window.location.href = "#about";
            document.title = "About";
            PPRef.current.classList.add(classes.animated_image);
            aboutTextRef.current.classList.add(classes.animated_text);
        }


    }, [isVisible])


    return (
        <Layout>
        <div id = "about" className={classes.about} >
            {/* <div></div> */}
            <div  ref={aboutContainerRef} className={classes.about__pp_container} >
                <img ref = {PPRef} className={classes.about__pp} src={PP} />
            </div>
            <div ref = {aboutTextRef} className={classes.about__text_container}>
                <h1 className={classes.about__heading} >About</h1>
                <p className={classes.about__text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, aut perferendis corrupti impedit iste voluptate doloremque voluptas sint, consectetur fuga blanditiis mollitia praesentium laborum ullam nobis totam amet asperiores aspernatur?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, aut perferendis corrupti impedit iste voluptate doloremque voluptas sint, consectetur fuga blanditiis mollitia praesentium laborum ullam nobis totam amet asperiores aspernatur?</p>
            </div>
        </div>
        </Layout>

    );
};

export default About;
