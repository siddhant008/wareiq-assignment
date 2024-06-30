import { useRef, useEffect, useState } from "react";
import * as d3 from "d3";

const data = [
	{ name: "Amazon", value: 1328, color: "#1f77b4" },
	{ name: "Flipkart", value: 1370, color: "#ff7f0e" },
	{ name: "Shopify", value: 1277, color: "#2ca02c" },
	{ name: "WooCommerce", value: 1251, color: "#d62728" },
	{ name: "Custom", value: 1374, color: "#9467bd" },
	{ name: "Manual", value: 93, color: "#8c564b" },
	{ name: "Demomkt", value: 29, color: "#e377c2" },
];

const PieChart = () => {
	const svgRef = useRef();

	const [dimensions, setDimensions] = useState({
		width: 400,
		height: 400,
	});

	useEffect(() => {
		const handleResize = () => {
			const boundingRect = svgRef.current.parentElement.getBoundingClientRect();
			setDimensions({
				width: boundingRect.width,
				height: boundingRect.height,
			});
		};

		window.addEventListener("resize", handleResize);
		handleResize();

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		const svg = d3.select(svgRef.current);
		const width = dimensions.width;
		const height = dimensions.height;
		const radius = Math.min(width, height) / 2.5;

		svg.attr("width", width).attr("height", height);
		svg.selectAll("*").remove(); // Clear previous SVG elements

		const color = d3
			.scaleOrdinal()
			.domain(data.map((d) => d.name))
			.range(data.map((d) => d.color));

		const pie = d3.pie().value((d) => d.value);

		const arc = d3
			.arc()
			.innerRadius(0)
			.outerRadius(radius - 40);

		const arcLabel = d3
			.arc()
			.innerRadius(radius - 30)
			.outerRadius(radius - 30);

		const arcs = pie(data);

		const g = svg
			.append("g")
			.attr("transform", `translate(${width / 2},${height / 2.5})`);

		// Draw arcs
		g.selectAll(".arc")
			.data(arcs)
			.enter()
			.append("g")
			.attr("class", "arc")
			.each(function (d) {
				const group = d3.select(this);

				group.append("path").attr("d", arc).style("fill", color(d.data.name));

				const [x, y] = arcLabel.centroid(d);

				group
					.append("text")
					.attr("transform", `translate(${x * 1.5},${y * 1.15})`)
					.attr("dy", ".35em")
					.style("text-anchor", "middle")
					.text(
						(
							(d.data.value / data.reduce((sum, item) => sum + item.value, 0)) *
							100
						).toFixed(1) > 15
							? `${d.data.name} ${d.data.value} (${(
									(d.data.value /
										data.reduce((sum, item) => sum + item.value, 0)) *
									100
							  ).toFixed(1)}%)`
							: ""
					);
			});

		// Legend
		const legend = svg
			.append("g")
			.attr("transform", `translate(${width / 2 - 200}, ${height - 50})`);

		legend
			.selectAll(".legend")
			.data(data)
			.enter()
			.append("g")
			.attr("class", "legend")
			.attr(
				"transform",
				(d, i) => `translate(${(i % 4) * 100}, ${Math.floor(i / 4) * 20})`
			)
			.each(function (d) {
				const group = d3.select(this);

				group
					.append("rect")
					.attr("x", -18)
					.attr("width", 18)
					.attr("height", 18)
					.style("fill", color(d.name));

				group
					.append("text")
					.attr("x", 10)
					.attr("y", 9)
					.attr("dy", "0.35em")
					.style("text-anchor", "start")
					.text(d.name);
			});
	}, [dimensions]);

	return <svg ref={svgRef}></svg>;
};

export default PieChart;
