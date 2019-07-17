import React from 'react';
import { Switch, Redirect } from 'react-router';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'
// All pages
import Home from './application/pages/home/Home';
import ResourceExtraction from './application/pages/resource-extraction/ResourceExtraction';
import Use from './application/pages/use/Use';
import Design from './application/pages/design/Design';
import Transport from './application/pages/transport/Transport';
import Manufacturing from './application/pages/manufacturing/Manufacturing';
import EndOfLife from './application/pages/end-of-life/EndOfLife';
import NotFound from './application/pages/not-found/NotFound';
// Styling
import './application/css/Desktop.css';
import './application/css/Mobile.css';
import './application/css/DesktopImpactMenu.css';
import './application/css/MobileImpactMenu.css';
import './application/css/InfoBox.css';
import './application/css/ImageWithCredit.css';
import './application/components/impact-selection-buttons/ImpactSelectionButtons.css';

function App() {
    return (
        <Router>
	    <div style={{margin: '0 auto', maxWidth: '1300px'}}>
	    	<Switch>
	    		<Route path="/home" component={Home}/>
	    		<Route path="/design" component={Design}/>
	    		<Route path="/resource-extraction" component={ResourceExtraction}/>
	    		<Route path="/manufacturing" component={Manufacturing}/>
	    		<Route path="/transport" component={Transport}/>
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