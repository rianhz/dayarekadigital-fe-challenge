import React from "react";
import logo from "../../icons/logos.png";
import { dataIntegration, dataMenu } from "../../data/menuData";
import "./leftMenu.css";
import { NavLink } from "react-router-dom";
import profileIcons from "../../icons/login-icons.png";
import { ReactComponent as LogoutIcons } from "../../icons/logout.svg";

const LeftMenu = () => {
	return (
		<div className="container-menu">
			<NavLink to="/" className="logo-wrapper">
				<img src={logo} alt="logo" id="logo" />
			</NavLink>
			<div className="main-wrapper">
				<span className="span-left-menu">Menu</span>
				{dataMenu.map((el, i) => {
					return (
						<div className="menu-item" key={i}>
							<NavLink className="icons-cap" to={el.link}>
								<img src={el.icon} alt={el.cap} className="icons" />
								<span className="cap">{el.cap}</span>
							</NavLink>
							{el.notif === 0 ? "" : <div className="notif">{el.notif}</div>}
						</div>
					);
				})}

				<span className="span-left-integ">Integration</span>
				{dataIntegration.map((el, i) => {
					return (
						<div className="menu-item" key={i}>
							<NavLink className="icons-cap" to={el.link}>
								<img src={el.icon} alt={el.cap} className="icons" />
								<span className="cap">{el.cap}</span>
							</NavLink>

							{el.notif === 0 ? "" : <div className="notif">{el.notif}</div>}
						</div>
					);
				})}
			</div>
			<div className="profiles">
				<div className="menu-item">
					<div className="icons-cap">
						<img src={profileIcons} alt="profile" className="prof-prof" />
						<div className="name-prof">
							<span className="cap-name">Savannah N</span>
							<span className="cap-status">Food Quality Manager</span>
						</div>
					</div>
				</div>
				<button className="logout">
					<LogoutIcons />
					<span className="logout-user">Logout</span>
				</button>
			</div>
		</div>
	);
};

export default LeftMenu;
