import React from "react";
import Light from "/workspace/react-hello/src/js/component/light.jsx";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div>
			<Light/>
		</div>
	);
};

export default Home;
