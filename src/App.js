import { useEffect, useRef, useState } from 'react';
import Layout from './components/Layout/Layout';
import useIntersection from './hooks/useIntersection';
import classes from './App.module.css';

function App() {

	const headingRef = useRef(null);
	const iAmRef = useRef(null);
	 //**  Hook created to check if the viewport is visible
	const isVisible = useIntersection(headingRef);


	 //**  Runs everytime the container is moved in and out of the viewport
	useEffect(() => {
		if (isVisible) {
			headingRef.current.classList.add(classes.letter__spacing)
			iAmRef.current.classList.add(classes.visible)
		} else {
			headingRef.current.classList.remove(classes.letter__spacing)
			iAmRef.current.classList.remove(classes.visible)
		}
	}, [isVisible])




	return (
		<Layout>
			<div className={classes.heading__container}>
				<div className= {classes.heading__wrapper} >
					<h1 ref = {iAmRef} className= {classes.iam}>I'm</h1>
					<h1 ref = {headingRef} className={classes.heading}>Karan Batavia</h1>
				</div>
			</div>
		</Layout>
	);
}

export default App;
