import dash from "../icons/dash.png";
import customer from "../icons/customer.png";
import design from "../icons/design.png";
import integstock from "../icons/integstock.png";
import report from "../icons/report.png";
import restaurant from "../icons/restaurant.png";
import roleadmin from "../icons/roleadmin.png";
import settings from "../icons/setting.png";
import stock from "../icons/stock.png";
import supply from "../icons/supply.png";

export const dataMenu = [
	{
		icon: dash,
		cap: "Dashboard",
		notif: 4,
		link: "/",
	},
	{
		icon: stock,
		cap: "Stock",
		notif: 0,
		link: "/stock",
	},
	{
		icon: customer,
		cap: "Customer",
		notif: 0,
		link: "/customer",
	},
	{
		icon: restaurant,
		cap: "Restaurant",
		notif: 0,
		link: "/restaurant",
	},
	{
		icon: design,
		cap: "Design",
		notif: 0,
		link: "/design",
	},
	{
		icon: report,
		cap: "Report",
		notif: 0,
		link: "/report",
	},
	{
		icon: roleadmin,
		cap: "Role & Admin",
		notif: 0,
		link: "/role",
	},
	{
		icon: settings,
		cap: "Settings",
		notif: 0,
		link: "/setting",
	},
];

export const dataIntegration = [
	{
		icon: integstock,
		cap: "Stock",
		notif: 0,
		link: "/stock-integration",
	},
	{
		icon: supply,
		cap: "Supply",
		notif: 0,
		link: "/supply",
	},
];
