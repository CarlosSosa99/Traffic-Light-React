import React, { useState } from "react";



//create your first component
const Light = () => {
	
	const [lightColor, setLightColor] = useState ('');
	

	return (
		<div>
			<div className=" container bg-dark mt-5" id="containerHolder"></div>
			<div className="container bg-dark py-5 d-flex flex-column justify-content-around align-items-center" id="container">
				<div className={`bg-danger circleLight ${lightColor === 'red' ? 'selected': ''}`}  onClick={() => setLightColor('red')}></div>
				<div className={`bg-warning circleLight ${lightColor === 'yellow' ? 'selected': ''}`}  onClick={() => setLightColor('yellow')}></div>
				<div className={`bg-success circleLight ${lightColor === 'green' ? 'selected': ''}`}  onClick={() => setLightColor('green')}></div>
			</div>
		</div>
	);
};

export default Light;