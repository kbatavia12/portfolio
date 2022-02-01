import React, { useEffect, useRef } from 'react';
import Layout from '../../components/Layout/Layout';
import useIntersection from '../../hooks/useIntersection';
import classes from './Work.module.css';
import WorkCard from './WorkCard/WorkCard';

const Work = () => {


    const headingContainerRef = useRef(null);
    const headingUnderlineRef = useRef(null);

    const isVisible = useIntersection(headingContainerRef);
    
    console.log(classes.one)

    useEffect(() => {
        if (isVisible) {
            window.location.href = "#work";
            document.title = "My Work";
            headingUnderlineRef.current.classList.add(classes.underline__animate)
        }


    }, [isVisible])
  return (
      <Layout>

          <div id = "work" className= {classes.work} >
            <div ref = {headingContainerRef} className= {classes.work__heading} >
                <h1 className= {classes.work__heading_text}>My Work</h1>
                <div ref = {headingUnderlineRef} className={classes.heading__underline}></div>
            </div>

            <div className= {classes.workcard__container} >
              <WorkCard classNumber = {classes.one} />
              <WorkCard classNumber = {classes.two} />
              <WorkCard classNumber = {classes.three} />
              <WorkCard classNumber = {classes.four} />
            </div>
          </div>
      </Layout>
  )
};

export default Work;
