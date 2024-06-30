import React from "react";
import {
	Badge,
	Box,
	Drawer,
	List,
	ListItem,
	ListItemIcon,
	Typography,
} from "@mui/material";
import {
	Assessment,
	People,
	Store,
	Settings,
	ExitToApp,
	HomeOutlined,
	InventoryOutlined,
	ShoppingCartOutlined,
	AssessmentOutlined,
	AttachMoneyOutlined,
} from "@mui/icons-material";

const Sidebar = ({ children }) => {
	const items = [
		{ text: "Home", icon: <HomeOutlined /> },
		{ text: "Inventory", icon: <InventoryOutlined /> },
		{ text: "Orders", icon: <ShoppingCartOutlined /> },
		{ text: "Control Tower", icon: <AssessmentOutlined /> },
		{ text: "Billing", icon: <AttachMoneyOutlined /> },
		{ text: "Analytics", icon: <Assessment /> },
		{ text: "Customers", icon: <People /> },
		{ text: "App Store", icon: <Store /> },
		{ text: "Settings", icon: <Settings /> },
		{ text: "Sign Out", icon: <ExitToApp /> },
	];

	return (
		<Box sx={{ display: "flex" }}>
			<Box sx={{ width: 160, height: "100vh" }}>
				<Drawer
					variant="permanent"
					anchor="left"
					sx={{
						width: 160,
						// flexShrink: 0,
						[`& .MuiDrawer-paper`]: { width: 160, boxSizing: "border-box" },
					}}
				>
					<List
						sx={{
							bgcolor: "#024d83",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							flexDirection: "column",
							mt: 8,
						}}
					>
						{items.map((item, index) => (
							<Badge
								color="success"
								// overlap="rectangular"
								key={index}
								badgeContent={item.text === "App Store" ? "New" : 0}
							>
								<ListItem
									sx={{
										display: "flex",
										flexDirection: "column",
										color: item.text === "Home" ? "#024d83" : "white",
										bgcolor: item.text === "Home" ? "white" : "#024d83",
										borderRadius: 2,
										alignItems: "center",
										width: "120px",
										height: "70.2px",
										pl: 0,
										pr: 0,
									}}
								>
									<ListItemIcon
										sx={{
											minWidth: "auto",
											color: "inherit",
										}}
									>
										{item.icon}
									</ListItemIcon>
									<Typography variant="body2" sx={{ textAlign: "center" }}>
										{item.text}
									</Typography>
								</ListItem>
							</Badge>
						))}
					</List>
				</Drawer>
			</Box>
			<Box sx={{ width: "-webkit-fill-available", overflow: 'auto' }}>{children}</Box>
		</Box>
	);
};

export default Sidebar;
