import { Download, InfoRounded } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

const Card = ({ children, title, subtitle, footerText, footerPercentage }) => {
	return (
		<Box
			sx={{
				height: "100%",
				width: "100%",
				borderRadius: "8px",
				bgcolor: "white",
				boxShadow: 3,
			}}
		>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					borderBottom: "1px solid black",
					p: 2,
					mb: 2,
				}}
			>
				<Box display={"flex"} gap={1} alignItems="center">
					<Box>
						<Typography variant="h6">{title}</Typography>
					</Box>
					<Box>
						<Typography variant="body2">{subtitle}</Typography>
					</Box>
					<Box>
						<InfoRounded fontSize="small" sx={{ color: "#024d83", verticalAlign: 'middle' }} />
					</Box>
					<Box sx={{ ml: "auto" }}>
						<Download color={"primary"} fontSize="small" />
					</Box>
				</Box>
			</Box>
			{children}
			{(footerPercentage || footerText) && (
				<Box
					sx={{
						display: "flex",
						bgcolor: "#024d83",
						justifyContent: "center",
						width: "fit-content",
						m: "auto",
						borderRadius: 8,
						p: 1,
						color: "white",
						mb: 2,
					}}
				>
					<Box sx={{ mr: 1, ml: 1 }}>
						<InfoRounded sx={{ verticalAlign: "-webkit-baseline-middle" }} />
					</Box>
					<Box sx={{ mr: 1 }}>
						<Typography variant="h6" sx={{ display: "inline-block" }}>
							{footerPercentage}
						</Typography>{" "}
						<Typography sx={{ display: "inline-block" }}>
							{footerText}
						</Typography>
					</Box>
				</Box>
			)}
		</Box>
	);
};

export default Card;
