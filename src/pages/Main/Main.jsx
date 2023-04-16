import React from "react";
import "./main.css";
import LeftMenu from "../../components/Navigation/LeftMenu";
import HeaderLink from "../../components/headerLink/HeaderLink";
import ContentMain from "../../components/mainContent/ContentMain";
import { Col, Container, Row } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import SettingsUser from "../Settings/SettingsUser";
import RestaurantsList from "../Restaurants/RestaurantsList";
import DesignPage from "../Designs/DesignPage";
import Customerss from "../Customerss/CustomersPage";
import StockComp from "../Stock/StockComp";
import StockIntegration from "../Stock/StockIntegration";
import Reports from "../Reports/ReportPage";
import RoleAdmin from "../RoleAdmin/RoleAdmin";
import SupplyPage from "../Supply/SupplyPages";
import RightContent from "../../components/sideContent/RightContent";
import Promo from "../Promo/Promo";
import Voucher from "../Voucher/Voucher";

const Main = () => {
	return (
		<Container fluid>
			<Row>
				<Col lg={2} className="ps-0 pe-0 pt-4">
					<LeftMenu />
				</Col>
				<Col lg={10}>
					<HeaderLink />
					<Row>
						<Col lg={9}>
							<Routes>
								<Route path="/" element={<ContentMain />} />
								<Route path="/setting" element={<SettingsUser />} />
								<Route path="/restaurant" element={<RestaurantsList />} />
								<Route path="/design" element={<DesignPage />} />
								<Route path="/stock" element={<StockComp />} />
								<Route
									path="/stock-integration"
									element={<StockIntegration />}
								/>
								<Route path="/report" element={<Reports />} />
								<Route path="/customer" element={<Customerss />} />
								<Route path="/role" element={<RoleAdmin />} />
								<Route path="/supply" element={<SupplyPage />} />
								<Route path="/promo" element={<Promo />} />
								<Route path="/voucher" element={<Voucher />} />
							</Routes>
						</Col>
						<Col lg={3}>
							<RightContent />
						</Col>
					</Row>
				</Col>
			</Row>
		</Container>
	);
};

export default Main;
