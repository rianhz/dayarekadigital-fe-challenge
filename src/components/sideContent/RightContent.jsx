import React from "react";
import "./rightcontent.css";
import { Col, Container, Row } from "react-bootstrap";
const RightContent = () => {
	return (
		<Container>
			<Row className="mt-4">
				<Col>
					<div className="right-content-wrapper">
						<p id="analytics-text">See Analytics of the Customer Clearly</p>
						<button id="analytics">See Analytics</button>
					</div>
				</Col>
			</Row>
			<Row className="mt-4">
				<Col>
					<div className="right-second-content">
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
						</div>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default RightContent;
