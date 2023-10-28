import { useEffect, useState } from "react";
import QuizzAble from "../../../public/Quizzable.png";
import "./Home.css";

function Home() {
	const [heading, setHeading] = useState("Click to answer!");
	const [buttonClicked, setButtonClicked] = useState(false);
	const [spamMessage, setSpamMessage] = useState("");
	const [spamClicked, setSpamClicked] = useState(false);

	// messages will change based on the admin from the server end
	// TODO: bug that makes the main 10s timer only count from last spam unresolved
	useEffect(() => {
		let buttonTimer;
		let spamTimer;

		if (buttonClicked && spamClicked == false) {
			setHeading("Answer Saved");
			buttonTimer = setTimeout(() => {
				setHeading("Click to answer!");
				setButtonClicked(false);
			}, 10000); // Revert after 10 seconds
		}

		if (spamClicked) {
			setSpamMessage("Answer already submitted. Please wait.");
			spamTimer = setTimeout(() => {
				setSpamMessage("");
				setSpamClicked(false);
			}, 3000); // Clear the spam message after 3 seconds
		}

		return () => {
			clearTimeout(buttonTimer);
			clearTimeout(spamTimer);
		};
	}, [buttonClicked, spamClicked]);

	const handleClick = () => {
		if (!buttonClicked) {
			setButtonClicked(true);
		} else if (buttonClicked && !spamClicked) {
			setSpamClicked(true);
		}
	};

	return (
		<div className="App" id="root">
			<div>
				<h1>Quizzable - Live Contest Quizzing App 🧠🎉</h1>
				<br />
				<h1>{heading}</h1>
				<h2>{spamMessage}</h2> {/* Display spam message here */}
				<button className="outlined-button" onClick={handleClick}>
					<div>
						<img
							src={QuizzAble}
							className="logo"
							alt="QuizzAble button logo"
							style={{
								borderWidth: "200px",
								height: "200px",
								objectFit: "contain",
								borderRadius: "200px",
							}}
						/>
					</div>
				</button>
			</div>
		</div>
	);
}

export default Home;
