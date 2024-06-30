import React from "react";
import Card from "../Cards/Card";
import { Box } from "@mui/material";
import ChannelDistributionGraph from "./ChannelDistributionGraph";

const ChannelDistibution = () => {
	return (
		<Card
			title={"Channel Distribution"}
			subtitle={"(07-05-2024 to 06-06-2024)"}
		>
			<Box
				sx={{
					mb: 2,
					display: "flex",
					justifyContent: "center",
				}}
			>
				<ChannelDistributionGraph />
			</Box>
		</Card>
	);
};

export default ChannelDistibution;
