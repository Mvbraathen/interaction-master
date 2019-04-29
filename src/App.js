import React from 'react';
import { Switch, Redirect } from 'react-router';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'

//import Circle from './components/circle/Circle';
import Home from './home/Home';
import Use from './home/menu/components/use/Use';
import NotFound from './home/menu/components/notFound/NotFound';
import './App.css';

function App() {
  return (
  	<Router>
	    <div>
	    	<Switch>
	    		<Route path="/start" component={Home}/>
	    		<Redirect exact from="/" to="/start" />
	    		<Route path="/use" component={Use}/>
	    		<Route path="/" component={NotFound} />
	    	</Switch>
	    </div>
	</Router>
  );
}

export default App;
