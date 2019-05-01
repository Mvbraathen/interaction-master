import React from 'react';
import { Switch, Redirect } from 'react-router';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'
import Home from './pages/home/Home';
import ResourceExtractionPage from './pages/resourceExtraction/ResourceExtractionPage';
import UsePage from './pages/use/UsePage';
import DesignPage from './pages/design/DesignPage';
import DistributionPage from './pages/distribution/DistributionPage';
import ManufacturingPage from './pages/manufacturing/ManufacturingPage';
import EndOfLifePage from './pages/endOfLife/EndOfLifePage';
import NotFound from './pages/components/notFound/NotFound';
import './App.css';

function App() {
  return (
  	<Router>
	    <div>
	    	<Switch>
	    		<Route path="/start" component={Home}/>
	    		<Route path="/resource-extraction" component={ResourceExtractionPage}/>
	    		<Route path="/use" component={UsePage}/>
	    		<Route path="/design" component={DesignPage}/>
	    		<Route path="/distribution" component={DistributionPage}/>
	    		<Route path="/manufacturing" component={ManufacturingPage}/>
	    		<Route path="/end-of-life" component={EndOfLifePage}/>
	    		<Redirect exact from="/" to="/start" />
	    		<Route path="/" component={NotFound} />
	    	</Switch>
	    </div>
	</Router>
  );
}

export default App;
