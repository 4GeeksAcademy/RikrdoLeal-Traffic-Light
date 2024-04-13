import React from "react";
import { useState } from "react";

export function Home() {
	const [color, setColor] = useState("");
	return (
		<div className="container">
			<div className="traffic-pole"></div>
			<div className="traffic-light">
				<div onClick={() => setColor("red")}
					className={"light red" + (color === "red" ? " glowRed" : "")} ></div>
				<div onClick={() => setColor("yellow")}
					className={"light yellow" + (color === "yellow" ? " glowYellow" : "")} ></div>
				<div onClick={() => setColor("green")}
					className={"light green" + (color === "green" ? " glowGreen" : "")} ></div>
			</div>
		</div>
	);
};

export default Home;