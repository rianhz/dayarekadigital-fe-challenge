import React from "react";
import "./rightcontent.css";
import { Col, Container, Row } from "react-bootstrap";
import { ReactComponent as GrafikBottom } from "../../imagess/bottom-right.svg";
import { ReactComponent as CircleOne } from "../../imagess/Ellipse13.svg";
import { ReactComponent as CircleTwo } from "../../imagess/Ellipse14.svg";
import { ReactComponent as CircleThree } from "../../imagess/Ellipse15.svg";
import { ReactComponent as NumberOne } from "../../icons/numberOne.svg";

const RightContent = () => {
	return (
		<Container>
			<Row className="mt-4">
				<Col>
					<div className="right-content-wrapper">
						<p id="analytics-text">See Analytics of the Customer Clearly</p>
						<button id="analytics">See Analytics</button>
						<CircleOne className="circleDec" />
						<CircleTwo className="circleDec" />
						<CircleThree className="circleDec" />
					</div>
				</Col>
			</Row>
			<Row className="mt-4">
				<Col>
					<div className="right-second-content">
						<NumberOne
							style={{ position: "absolute", right: "35px", top: "80px" }}
						/>
						<div className="title-second-content">
							<span id="top">Top Menu</span>
							<span id="week">This Week</span>
						</div>
						<div className="date-second-content">
							<p id="date">10 - 12 Agustus 2023</p>
						</div>
						<div className="menu-second-content">
							<p id="menu-title">Nasi Goreng Jamur Special Resto Pak Min</p>
							<ol>
								<li>Tongseng Sapi Gurih</li>
								<li>Nasi Gudeg Telur Ceker</li>
								<li>Nasi Ayam Serundeng</li>
								<li>Nasi Goreng Seafood</li>
							</ol>
							<GrafikBottom style={{ marginRight: "10px" }} />
						</div>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default RightContent;
