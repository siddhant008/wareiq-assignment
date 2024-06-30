import React from "react";
import {
	AppBar,
	Toolbar,
	Typography,
	IconButton,
	Box,
	Button,
	TextField,
	InputAdornment,
} from "@mui/material";
import {
	Search,
	Notifications,
	WalletOutlined,
	ArrowDropDown,
	DownloadOutlined,
	Add,
	ViewInArOutlined,
} from "@mui/icons-material";
const Header = () => {
	return (
		<AppBar
			color="default"
			position="fixed"
			sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
		>
			<Toolbar>
				<Box display="flex" alignItems="center" flexGrow={1}>
					<ViewInArOutlined sx={{ color: "#024d83", mr: 1 }} />
					<Typography
						variant="h6"
						noWrap
						sx={{
							fontWeight: "bold",
							color: "#024d83",
						}}
					>
						WareIQ
					</Typography>
				</Box>
				<Box display="flex" alignItems="center">
					<Button
						variant="contained"
						sx={{
							marginRight: 2,
							backgroundColor: "#e1e1e1",
							color: "#024d83",
							textTransform: "none",
						}}
					>
						App Credits: ₹1702
					</Button>
					<Button
						variant="contained"
						sx={{
							marginRight: 2,
							backgroundColor: "#024d83",
							textTransform: "none",
						}}
						startIcon={<WalletOutlined />}
					>
						Recharge
					</Button>

					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							width: "250px",
							// height: "2 0px",
							p: 1,
							borderRadius: 2,
							border: "none",
						}}
					>
						<TextField
							variant="outlined"
							placeholder="Search"
							fullWidth
							InputProps={{
								startAdornment: (
									<InputAdornment position="start">
										<Search />
									</InputAdornment>
								),
								style: {
									borderRadius: 6,
									backgroundColor: "#dfdfdf",
									height: "40px", // Shorten the height
									border: "none", // Remove the border
									paddingRight: 0, // Remove padding
								},
							}}
						/>
					</Box>

					<IconButton
						sx={{ backgroundColor: "#dfdfdf", borderRadius: 2, mr: 2 }}
					>
						<Add />
					</IconButton>
					<IconButton
						sx={{ backgroundColor: "#dfdfdf", borderRadius: 2, mr: 2 }}
					>
						<DownloadOutlined />
					</IconButton>
					<IconButton
						sx={{ backgroundColor: "#dfdfdf", borderRadius: 2, mr: 2 }}
					>
						<Notifications />
					</IconButton>
					<Button
						sx={{ fontWeight: "bold", textTransform: "none" }}
						variant="text"
					>
						Switch back
					</Button>
					<Typography sx={{mr: 1, ml: 1}}>Signed in as demo@wareiq.com</Typography>
					<Button
						variant="text"
						endIcon={<ArrowDropDown />}
						sx={{ textTransform: "none", color: "black", fontWeight: "bold" }}
					>
						Origin
					</Button>
				</Box>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
