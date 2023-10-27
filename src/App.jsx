import { useState } from "react";
import "./App.css";
import QuizzAble from "/Quizzable.png";
// import reactLogo from "/react.svg";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="App">
			<div>
				<h1>Press to answer</h1>
				{/* add onclick routing magic */}
				<button>
					<div>
						<img
							src={QuizzAble}
							className="logo"
							alt="React logo"
							style={{
								borderWidth: "200px",
								height: "200px",
								objectFit: "contain",
								borderRadius: "200px",
							}}
						/>
					</div>
					<div>count is {count}</div>
				</button>
				<p>
					<code>tester nigga</code>
				</p>
			</div>
		</div>
	);
}

export default App;
