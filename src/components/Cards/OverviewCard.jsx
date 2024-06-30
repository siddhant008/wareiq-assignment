import React from "react";
import { Card, CardContent, Typography, Box, Divider } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";

const ShippingInfo = ({ title, dateRange, shippingData }) => {
	return (
		<Box>
			<Typography variant="h7" gutterBottom fontWeight={"bold"}>
				{title} <span style={{fontWeight: 'normal', fontSize: 12}}>{dateRange}</span>
			</Typography>
			<Card sx={{mt: 2}}>
				<CardContent>
					<Box
						display="flex"
						justifyContent="space-between"
						alignItems="center"
					>
						{shippingData.map((item, index) => (
							<React.Fragment key={index}>
								<Box mx={2} mb='auto'>
									<Box
										sx={{
											display: "flex",
											alignItems: "center",
											verticalAlign: "middle",
										}}
									>
										<Typography variant="caption" color="textSecondary">
											{item.title}
										</Typography>
										<InfoIcon fontSize="small" style={{ marginLeft: 4 }} />
									</Box>
									<Typography variant="h6" color="primary">
										{item.value}
									</Typography>
									{item.subValue !== null && (
										<Typography variant="body2" color="textSecondary">
											({item.subValue})
										</Typography>
									)}
								</Box>
								{index < shippingData.length - 1 && (
									<Divider orientation="vertical" flexItem />
								)}
							</React.Fragment>
						))}
					</Box>
				</CardContent>
			</Card>
		</Box>
	);
};

export default ShippingInfo;
