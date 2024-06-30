import { Box, Button, ButtonGroup, Typography } from "@mui/material";
import OrdersRevenueChart from "./OrdersRevenueChart";
import Card from "../Cards/Card.jsx";

const OrdersRevenue = () => {
	return (
		<Card title={"Orders & Revenue"} subtitle={"(07-05-2024 to 06-06-2024)"}>
			<Box
				gap={2}
				sx={{
					display: "flex",
					justifyContent: "space-between",
					ml: 2,
					mr: 2,
					flexWrap: "wrap",
				}}
			>
				<Box
					sx={{
						display: "flex",
						justifyContent: "space-between",
						gap: 2,
					}}
				>
					<Box
						sx={{
							bgcolor: "#f8f8f8",
							borderRadius: 4,
							p: 2,
							minWidth: 150,
						}}
					>
						<Typography variant="body1">Total Orders</Typography>
						<Typography
							variant="body2"
							color={"blue"}
							fontWeight={400}
							fontStyle={"bold"}
						>
							6,430
						</Typography>
					</Box>
					<Box
						sx={{
							bgcolor: "#f8f8f8",
							borderRadius: 4,
							p: 2,
							minWidth: 150,
						}}
					>
						<Typography variant="body1">Total Revenue</Typography>
						<Typography variant="body2" color={"blue"}>
							₹79,87,987
						</Typography>
					</Box>
				</Box>
				<Box sx={{ alignItems: "flex-end" }}>
					<ButtonGroup
						color="primary"
						aria-label="outlined primary button group"
						style={{ marginTop: "10px" }}
					>
						<Button variant="contained">Orders</Button>
						<Button>Picked</Button>
						<Button>Delivered</Button>
					</ButtonGroup>
				</Box>
			</Box>
			<Box sx={{ height: "400px", mb: 2 }}>
				<OrdersRevenueChart />
			</Box>
		</Card>
	);
};

export default OrdersRevenue;
