import React from 'react';
import {
	Route,
	NavLink,
	HashRouter
} from "react-router-dom";

//import Circle from './components/circle/Circle';
import Menu from './components/menu/Menu';
import './App.css';

function App() {
  return (
  	<HashRouter>
	    <div>
	    	<Menu />
	    </div>
	</HashRouter>
  );
}

export default App;
