import React from "react";

const Home = () => {
	require("react-dom");
	window.React2 = require("react");
	console.log(window.React1 === window.React2);
	return (
		<div>
			<h2>Welcome Home</h2>
		</div>
	);
};

export default Home;
