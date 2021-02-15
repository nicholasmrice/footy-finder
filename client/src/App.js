import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import axios from 'axios';
import ReactDOM from 'react-dom';
//Components
import Home from './pages/parks/home.js'
import ShowPark from './pages/parks/show.js'
import FindAPark from './components/find_park.js'

class App extends React.Component {
	render = () => {
		return (
				<Router>
						<React.Fragment>
								<Switch>
										<Route path='/' exact component={Home} />
										<Route path='/show/' component={ShowPark}/>
								</Switch>
						</React.Fragment>
				</Router>
		)
 }
}

 //ReactDOM.render(<App></App>, document.querySelector('main'));

export default App;
