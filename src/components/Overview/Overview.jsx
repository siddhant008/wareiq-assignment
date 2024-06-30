import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import ShippingInfo from "../Cards/OverviewCard";

const overviewData = [
	{
		title: "Shipping",
		dateRange: "(07-05-2024 to 06-06-2024)",
		shippingData: [
			{ title: "Active Shipments", value: 7, percentage: null, subValue: null },
			{ title: "Yet to be Picked", value: "14.3%", subValue: 1 },
			{ title: "Open Shipments", value: "0%", subValue: 0 },
			{ title: "Closed Shipment", value: "85.7%", subValue: 6 },
		],
	},
	{
		title: "NDR",
		dateRange: "(07-05-2024 to 06-06-2024)",
		shippingData: [
			{ title: "NDR Raised", value: 0, percentage: null, subValue: null },
			{ title: "NDR Active", value: "0%", subValue: 0 },
			{ title: "NDR Delivered", value: "0%", subValue: 0 },
			{ title: "RTO Post NDR", value: "0%", subValue: 0 },
		],
	},
];

const Overview = () => {
	return (
		<Box>
			<Typography
				fontWeight="bold"
				variant="h6"
				gutterBottom
				sx={{ borderBottom: "1px solid grey", pb: 2, mb: 2 }}
			>
				Overview
			</Typography>
			<Grid container spacing={2}>
				{overviewData.map((item, index) => (
					<Grid item xs={12} sm={12} md={12} lg={12} xl={6} key={index}>
						<ShippingInfo
							title={item.title}
							dateRange={item.dateRange}
							shippingData={item.shippingData}
						/>
					</Grid>
				))}
			</Grid>
		</Box>
	);
};

export default Overview;
