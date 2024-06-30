import * as d3 from "d3";

import PieChart from "./PieChart";
import { useEffect, useState } from "react";

const pieChartData = [
	{ name: "Christians", value: 2_173_180_000 },
	{ name: "Muslims", value: 1_598_510_000 },
	{ name: "None", value: 1_126_500_000 },
	{ name: "Hindus", value: 1_033_080_000 },
	{ name: "Buddhists", value: 487_540_000 },
	{ name: "Folk Religionists", value: 405_120_000 },
	{ name: "Other Religions", value: 58_110_000 },
	{ name: "Jews", value: 13_850_000 },
];

const ChannelDistributionGraph = () => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const getData = async () => {
			setLoading(true);

			let populationData = {};
			await Promise.all([
				d3.csv(
					"https://res.cloudinary.com/tropicolx/raw/upload/v1/Building%20Interactive%20Data%20Visualizations%20with%20D3.js%20and%20React/world_population.csv",
					(d) => {
						populationData = {
							...populationData,
							[d.code]: +d.population,
						};
					}
				),
			]);

			setLoading(false);
		};

		getData();
	}, []);

	if (loading) return <div>Loading...</div>;

	return <PieChart data={pieChartData} />;
};

export default ChannelDistributionGraph;
