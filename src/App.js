import React from 'react';
import { Switch, Redirect } from 'react-router';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'
import Home from './application/pages/home/Home';
import ResourceExtraction from './application/pages/resource-extraction/ResourceExtraction';
import Use from './application/pages/use/Use';
import Design from './application/pages/design/Design';
import Distribution from './application/pages/distribution/Distribution';
import Manufacturing from './application/pages/manufacturing/Manufacturing';
import EndOfLife from './application/pages/end-of-life/EndOfLife';
import NotFound from './application/pages/not-found/NotFound';
import './App.css';

function App() {
  return (
  	<Router>
	    <div>
	    	<Switch>
	    		<Route path="/home" component={Home}/>
	    		<Route path="/design" component={Design}/>
	    		<Route path="/resource-extraction" component={ResourceExtraction}/>
	    		<Route path="/manufacturing" component={Manufacturing}/>
	    		<Route path="/distribution" component={Distribution}/>
	    		<Route path="/use" component={Use}/>
	    		<Route path="/end-of-life" component={EndOfLife}/>
	    		<Redirect exact from="/" to="/home" />
	    		<Route path="/" component={NotFound} />
	    	</Switch>
	    </div>
	</Router>
  );
}

export default App;
