import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
	return (
		<>
			<Header />
			<Sidebar>{children}</Sidebar>
		</>
	);
};

export default Layout;
