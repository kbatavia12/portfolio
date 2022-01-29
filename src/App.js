import { useEffect, useRef, useState } from 'react';
import classes from './App.module.css';
import About from './screens/About/About';
import Home from './screens/Home/Home';

function App() {



	return (
		<div className= {classes.main} >
			<Home />
			<About />
		</div>
	);
}

export default App;
