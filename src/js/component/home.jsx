import React from "react";
import { useState } from "react";

export function Home() {
	const [color, setColor] = useState("");

	return (
		<div ClassName="container">
			<div className="traffic-pole"></div>
			<div className="traffic-light">
				<div onClick={() => setColor("red")}
					className={"light red" + (color === "red" ? " glow" : "")} ></div>
				<div onClick={() => setColor("yellow")}
					className={"light yellow" + (color === "yellow" ? " glow" : "")} ></div>
				<div onClick={() => setColor("green")}
					className={"light green" + (color === "green" ? " glow" : "")} ></div>
			</div>
		</div>
	);
};

export default Home;