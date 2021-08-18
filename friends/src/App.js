import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from "./components/Login";
import Logout from "./components/Logout";

function App() {
	return (
		<Router>
			<div className="App">
				<ul>
					<li>
						<Link to="/login">Login</Link>
					</li>
					<li>
						<Link to="/logout">Logout</Link>
					</li>
				</ul>

				<Switch>
					<Route path="/logout" component={Logout} />
					<Route path="/login" component={Login} />
					<Route path="/" component={Login} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
