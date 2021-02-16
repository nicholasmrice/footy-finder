import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import axios from 'axios';
import ReactDOM from 'react-dom';
//Components
import Home from './pages/parks/home.js'
import ShowPark from './pages/parks/show.js'
import FindAPark from './components/find_park.js'
//Bootstrap
// import Button from 'react-bootstrap/Button'


class App extends React.Component {
	state = {
		id: '',
	};

	 getId = (id) => {
		 this.setState({id:id})
	}

	render = ()=> {
		return (
				<Router>
						<React.Fragment>
								<Switch>
										<Route path='/parks/:id/' render={()=> <ShowPark id={this.state.id}/>}/>
										 <Route path='/' render={()=> <Home getId = {this.getId}/>} />
								</Switch>
						</React.Fragment>
				</Router>
		)
 }
}

export default App;
