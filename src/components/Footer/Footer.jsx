import React from "react";
import AbleCorp from "../../assets/Able-Corp.jpeg";
import "./Footer.css";

function Footer() {
	return (
		<div className="footer">
			<div>
				<img
					src={AbleCorp}
					style={{
						height: "150px",
						objectFit: "contain",
						marginRight: "10px",
						borderRadius: "25px",
					}}
				/>
				<h2 style={{ color: "black" }}>
					&copy; Able Corporation {new Date(Date.now()).getFullYear()}
				</h2>
			</div>

			<div
				style={{
					margin: "20px",
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					flexWrap: "wrap",
					minWidth: "400px",
				}}
			>
				<h2 style={{ color: "black", marginBottom: "2px" }}>
					Built by:
				</h2>
				<div
					style={{
						color: "#000000",
						display: "flex",
						justifyContent: "flex-start",
						alignItems: "flex-start",
					}}
				>
					<ul style={{ listStyleType: "none", padding: 0 }}>
						<li style={{ textAlign: "center" }}>
							Joshua Mukisa Kiryowa, IB1 <br />{" "}
							<b>Founder & Chairman</b>
						</li>
						<li style={{ textAlign: "center" }}>
							{/* <br /> */}
							<br /> Emmanuel Asiimwe, IB1 <br />
							<b>Research & Development Manager</b>
						</li>
						<li style={{ textAlign: "center" }}>
							{/* <br /> */}
							<br /> Tahsan Samin, IB1 <br />
							<b>Quality Assurance & Deployment Specialist</b>
						</li>
						<li style={{ textAlign: "center" }}>
							<br /> Khush Shah, IB1 <br />
							<b>Marketing and Public Relations Strategist</b>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Footer;
