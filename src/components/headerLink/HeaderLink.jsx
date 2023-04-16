import React from "react";
import { NavLink } from "react-router-dom";
import "./headerlink.css";
import { Col, Container, Row } from "react-bootstrap";

const HeaderLink = () => {
	return (
		<Container>
			<Row className="pt-4 ">
				<Col
					lg={6}
					md={12}
					sm={12}
					className="d-flex justify-content-between align-items-end"
				>
					<div className="main-header-cap">
						<span id="p-customer">Customer</span>
						<span id="p-text">
							You can manage and organize your customer and other things here
						</span>
					</div>
				</Col>
				<Col lg={6} md={12} sm={12}>
					<div className="main-header-link-items">
						<NavLink className="header-link" to="/customer">
							Customer
						</NavLink>
						<NavLink className="header-link" to="/promo">
							Promo
						</NavLink>
						<NavLink className="header-link" to="/voucher">
							Voucher
						</NavLink>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default HeaderLink;
