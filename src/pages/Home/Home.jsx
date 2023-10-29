import React, { useEffect, useState } from "react";
import QuizzAble from "../../assets/Quizzable.png";
import buzzerAudio from "../../assets/buzzer.mp3"; // Import the audio file
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import "./Home.css";

function Home() {
	const [heading, setHeading] = useState("Click to answer!");
	const [buttonClicked, setButtonClicked] = useState(false);
	const [spamMessage, setSpamMessage] = useState("");
	const [spamClicked, setSpamClicked] = useState(false);
	const buzzerSound = new Audio(buzzerAudio); // Create an Audio object for the sound

	// messages will change based on the admin from the server end
	// TODO: bug that makes the main 10s timer only count from last spam unresolved
	useEffect(() => {
		let buttonTimer;
		let spamTimer;

		if (buttonClicked && spamClicked === false) {
			setHeading("Answer Saved");
			buttonTimer = setTimeout(() => {
				setHeading("Click to answer!");
				setButtonClicked(false);
			}, 10000); // Revert after 10 seconds
		}

		if (spamClicked) {
			setSpamMessage("Button is locked. Please wait.");
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

	const handleClick = async () => {
		if (
			!buttonClicked &&
			localStorage.getItem("name") !== null &&
			localStorage.getItem("name").trim() !== "" &&
			localStorage.getItem("code") !== null &&
			localStorage.getItem("code").trim() !== "" &&
			(localStorage.getItem("code").trim() === "senior" ||
				localStorage.getItem("code").trim() === "junior")
		) {
			setButtonClicked(true);
			buzzerSound.play(); // Play the sound here when the button is pressed properly

			const FIREBASE_URL =
				"https://quizzable-a1610-default-rtdb.firebaseio.com/";

			const currentTime = new Date(Date.now());
			const hours = currentTime.getHours().toString().padStart(2, "0");
			const minutes = currentTime
				.getMinutes()
				.toString()
				.padStart(2, "0");
			const seconds = currentTime
				.getSeconds()
				.toString()
				.padStart(2, "0");

			const formattedTime = `${hours}:${minutes}:${seconds}`;

			const data = {
				team: localStorage.getItem("name"),
				time: formattedTime.toString(),
			};

			console.log(data);

			const response = await fetch(`${FIREBASE_URL}/contestants.json`, {
				method: "POST",
				body: JSON.stringify(data),
				headers: {
					"Content-Type": "application/json",
				},
			});
		} else if (buttonClicked && !spamClicked) {
			setSpamClicked(true);
		}
	};

	return (
		<div>
			<NavBar />
			<div
				className="App"
				id="root"
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					marginTop: "100px",
				}}
			>
				<div style={{ marginTop: "-10px" }}>
					<div style={{ marginLeft: "-30px" }}>
						<h2>
							Welcome {localStorage.getItem("name")} to
							<br />
							Quizzable - Live Contest Quizzing App 🧠🎉
						</h2>
						<br />
						<div>
							<button
								className="outlined-button"
								style={{
									borderRadius: "50px",
									padding: "10px",
								}}
								onClick={handleClick}
							>
								<h2 style={{ color: "white" }}>{heading}</h2>
								<h2 style={{ color: "white" }}>
									{spamMessage}
								</h2>
								<img
									src={QuizzAble}
									className="logo"
									alt="QuizzAble button logo"
									style={{
										height: "180px",
										objectFit: "contain",
									}}
								/>
							</button>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default Home;
