import { useState } from "react";
import QuizzAble from "../../assets/Quizzable.png";
import reactLogo from "../../assets/react.svg";
import "./Home.css";

function Home() {
	return (
		<div className="App">
			<div>
				{/* <a href="https://vitejs.dev" target="_blank">
					<img src="/vite.svg" className="logo" alt="Vite logo" />
				</a>
				<a href="https://reactjs.org" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a> */}
				<h1>Click to answer</h1>
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
				</button>

				{/* <h1>Welcome to QuizzAble</h1>
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.jsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p> */}
			</div>
		</div>
	);
}

export default Home;
