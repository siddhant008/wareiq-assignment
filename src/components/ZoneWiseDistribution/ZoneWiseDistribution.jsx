import ZoneWiseDistributionGraph from "./ZoneWiseDistributionGraph";
import { Box } from "@mui/material";
import Card from "../Cards/Card";

function ZoneWiseDistribution() {
	return (
		<Card
			title={"Zone Wise Distribution"}
			subtitle={"(07-05-2024 to 06-06-2024)"}
			footerPercentage={"11.5%"}
			footerText="of your orders are in short shipping range"
		>
			<Box
				sx={{
					height: "400px",
					mb: 2,
					display: "flex",
					justifyContent: "center",
				}}
			>
				<ZoneWiseDistributionGraph />
			</Box>
		</Card>
	);
}

export default ZoneWiseDistribution;
