import "./App.css";
import Data from "./components/Data";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import CreateData from "./components/CreateData";
import DataCard from "./components/DataCard";

function App() {
	return (
		<div>
			<Home />
		</div>

		// <Router>
		// 	<Home />
		// 	<Data />
		// 	<Routes>
		// 		{/* <Route exact path='/newdata' component={CreateData} /> */}
		// 	</Routes>
		// 	<Data />
		// </Router>
	);
}

export default App;
