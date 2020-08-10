import * as React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Details from './views/Details';
import Pizza from './views/Home';
import Edit from './views/Edit';
import Add from './views/Add';
import Login from './views/Login';
import Register from './views/Register';
import PrivateRoute from './components/PrivateRoute';

const App: React.FC<AppProps> = (props) => {
	return (

		<BrowserRouter>
			<Switch>
				<Route exact path="/">
					<Pizza />
				</Route>

				<Route exact path="/login">
					<Login />
				</Route>


				<Route exact path="/register">
					<Register />
				</Route>


				<PrivateRoute exact path="/add">
					<Add />
				</PrivateRoute>


				<Route exact path="/details/:todoid">
					<Details />
				</Route>

				<Route exact path="/edit/:todoid">
					<Edit />
				</Route>


			</Switch>
		</BrowserRouter>
	);
}

interface AppProps { }

export default App;
