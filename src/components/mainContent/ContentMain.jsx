import React from "react";
import "./maincontent.css";
import { IoIosRefresh } from "react-icons/io";
import { AiOutlineFilter } from "react-icons/ai";
import { BsPrinter } from "react-icons/bs";
import { customers } from "../../data/customerData";
import { ReactComponent as Detail } from "../../icons/shield.svg";
import { ReactComponent as Edits } from "../../icons/edits.svg";
import { ReactComponent as Trash } from "../../icons/trash.svg";
import { Col, Container, Pagination, Row } from "react-bootstrap";

const ContentMain = () => {
	return (
		<Container>
			<Row>
				<Col className="p-0 mt-4">
					<div className="main-content-wrapper">
						<span className="customer">Customer</span>
						<span className="cap-text">
							On this menu you will be able to create, edit, and also delete the
							customer. Also you can manage easily
						</span>
						<div className="button-wrapper">
							<button id="add-customer">+ Add New Customer</button>
							<div className="input-wrapper">
								<input type="radio" id="inputRadio" />
								<input
									type="text"
									id="inputText"
									placeholder="Search Customer"
								/>
								<button id="search">Search</button>
							</div>
							<div className="main-btn">
								<button id="filter">
									<AiOutlineFilter />
									Filter
								</button>
								<button id="refresh">
									<IoIosRefresh /> Refresh
								</button>
								<button id="printer">
									<BsPrinter />
								</button>
							</div>
						</div>
					</div>

					<table>
						<thead>
							<tr>
								<th>Customer Name</th>
								<th>Level</th>
								<th>Favorite Menu</th>
								<th>Total Transaction</th>
								<th>Action</th>
							</tr>
						</thead>

						<tbody>
							{customers.map((el, i) => {
								return (
									<tr key={i}>
										<td>{el.customerName}</td>
										<td>
											<p
												className={
													el.level === "Warga"
														? "warga"
														: el.level === "Juragan"
														? "juragan"
														: el.level === "Sultan"
														? "sultan"
														: "konglomerat"
												}
											>
												{el.level}
											</p>
										</td>
										<td>{el.menu}</td>
										<td>{el.transaction}</td>
										<td className="d-flex justify-content-around align-items-center flex-wrap">
											<button className="details-btn">
												<Detail />
												Detail
											</button>
											<button className="edits-btn">
												<Edits />
											</button>
											<button className="del-btn">
												<Trash />
											</button>
										</td>
									</tr>
								);
							})}
						</tbody>
					</table>

					<div id="footcap">
						Showing 10 Data Customers
						<Pagination>
							<Pagination.Item active className="ms-auto bg-success">
								{1}
							</Pagination.Item>
							<Pagination.Item>{2}</Pagination.Item>
							<Pagination.Item>{3}</Pagination.Item>
							<Pagination.Ellipsis />
							<Pagination.Item>{38}</Pagination.Item>{" "}
							<Pagination.Next>Next</Pagination.Next>
							<Pagination.Next />
						</Pagination>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default ContentMain;
