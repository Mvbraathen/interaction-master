import React from 'react';
import { Switch, Redirect } from 'react-router';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'

//import Circle from './components/circle/Circle';
import Home from './pages/home/Home';
import ResourceExtractionPage from './pages/resourceExtraction/ResourceExtractionPage';
import UsePage from './pages/use/UsePage';
import NotFound from './pages/components/notFound/NotFound';
import './App.css';

function App() {
  return (
  	<Router>
	    <div>
	    	<Switch>
	    		<Route path="/start" component={Home}/>
	    		<Route path="/resourceExtraction" component={ResourceExtractionPage}/>
	    		<Route path="/use" component={UsePage}/>
	    		<Redirect exact from="/" to="/start" />
	    		<Route path="/" component={NotFound} />
	    	</Switch>
	    </div>
	</Router>
  );
}

export default App;
