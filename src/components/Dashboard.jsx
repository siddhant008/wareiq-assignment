import { Box, Container, CssBaseline, Grid, Typography } from "@mui/material";
import ZoneWiseDistribution from "./ZoneWiseDistribution/ZoneWiseDistribution";
import DeliveryTimeline from "./DeliveryTimeline/DeliveryTimeline";
import OrdersRevenue from "./OrdersReveue/OrdersRevenue";
import ChannelDistibution from "./ChannelDistribution/ChannelDistibution";
import StatCard from "./Cards/StatCard";
import Overview from "./Overview/Overview";

const Dashboard = () => {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				mt: 9,
				overflowY: "auto",
				overflowX: "auto",
				height: "700px",
				width: "auto",
				// border: "1px solid red",
			}}
		>
			<CssBaseline />
			<Box
				component="main"
				sx={{
					flexGrow: 1,
					flexWrap: "wrap",
					// bgcolor: "background.default",
					// p: 3,
					// marginLeft: 30,
					mt: 3,
					// border: "1px solid red",
					// width: "100%",
				}}
			>
				<Container maxWidth="xl">
					<Typography variant="h4" sx={{ mb: 4 }}>
						Welcome, <span style={{ fontWeight: "bold" }}>Origin</span>
					</Typography>
					<Box
						display="flex"
						justifyContent="space-between"
						mb={3}
						flexWrap={"wrap"}
					>
						<StatCard
							title="Orders"
							value="84"
							changeUp="54.84%"
							previous="229"
						/>
						<StatCard
							title="Revenue"
							value="21"
							changeDown="56.42%"
							previous="301"
						/>
						<StatCard
							title="Picked"
							value="78"
							changeDown="6.02%"
							previous="101"
						/>
						<StatCard
							title="Delivered"
							value="54"
							changeUp="18.18%"
							previous="86"
						/>
						<StatCard
							title="RTO/DTO"
							value="15"
							changeUp="36.26%"
							previous="12"
						/>
					</Box>
					<Overview />
				</Container>
			</Box>
			<Container
				maxWidth="xl"
				sx={{ p: "24px !important" }}
			>
				<Grid container spacing={3} sx={{}}>
					<Grid item xs={12}>
						<OrdersRevenue />
					</Grid>
					<Grid item xs={12} md={6}>
						<ZoneWiseDistribution />
					</Grid>
					<Grid item xs={12} md={6}>
						<DeliveryTimeline />
					</Grid>
					<Grid item xs={12} md={6}>
						<ChannelDistibution />
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default Dashboard;
