import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import {
	ArrowDropDown,
	ArrowDropUp,
	InfoRounded,
	ShoppingBagOutlined,
} from "@mui/icons-material";

const StatCard = ({ title, value, changeUp, changeDown, previous }) => {
	return (
		<Box sx={{ display: "flex", flexDirection: "column" }}>
			<Box sx={{ mb: 2 }}>
				<Typography variant="h7" fontWeight={"bold"}>
					{title}
				</Typography>
				<InfoRounded
					fontSize="small"
					sx={{ color: "#024d83", verticalAlign: "middle" }}
				/>
			</Box>
			<Card sx={{ width: 230, marginBottom: 2, height: 100, borderRadius: 4 }}>
				<CardContent>
					<Box display={"flex"} gap={2}>
						<Box
							sx={{
								bgcolor: "#ebf6ff",
								borderRadius: 10,
								height: "fit-content",
								p: "8px 10px",
								mt: "auto",
								mb: "auto",
							}}
						>
							<ShoppingBagOutlined fontSize="small" />
						</Box>
						<Box>
							<Typography variant="caption" component="div">
								Today
							</Typography>
							<Box display={"flex"} flexWrap={"nowrap"}>
								<Typography
									variant="caption"
									component="div"
									color="primary"
									fontWeight="bold"
								>
									{value}
								</Typography>
								<Typography
									variant="caption"
									// color='red'
									color={changeUp ? "green" : "red"}
									sx={{ marginRight: 1 }}
								>
									{changeDown && (
										<ArrowDropDown
											color="error"
											sx={{ verticalAlign: "middle" }}
										/>
									)}
									{changeUp && (
										<ArrowDropUp
											color="success"
											sx={{ verticalAlign: "middle" }}
										/>
									)}{""}
									{changeUp || changeDown}
								</Typography>
							</Box>
							<Box display="flex" alignItems="center">
								<Typography variant="body2" color="textSecondary">
									Y'day - <span style={{ fontWeight: "bold" }}>{previous}</span>
								</Typography>
							</Box>
						</Box>
					</Box>
				</CardContent>
			</Card>
		</Box>
	);
};

export default StatCard;
