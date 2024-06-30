import DeliveryTimelineGraph from "./DeliveryTimelineGraph";
import { Box } from "@mui/material";
import Card from "../Cards/Card";

function DeliveryTimeline() {
	return (
		<Card
			title={"Delivery Timeline"}
			subtitle={"(07-05-2024 to 06-06-2024)"}
			footerPercentage={"53.5%"}
			footerText="of your orders are delivered in 1-2 days"
		>
			<Box
				sx={{
					height: "400px",
					mb: 2,
					display: "flex",
					justifyContent: "center",
				}}
			>
				<DeliveryTimelineGraph />
			</Box>
		</Card>
	);
}

export default DeliveryTimeline;
