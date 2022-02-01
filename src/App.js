import { useEffect, useRef, useState } from 'react';
import classes from './App.module.css';
import About from './screens/About/About';
import Home from './screens/Home/Home';
import Work from './screens/Work/Work';

function App() {



	return (
		<div className= {classes.main} >
			<Home />
			<About />
			<Work />
		</div>
	);
}

export default App;
