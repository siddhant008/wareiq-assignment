import { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

const data = [
	{ label: "Zone D", value: 4086, percentage: 79.7, color: "#ff7f0e" },
	{ label: "Zone E", value: 440, percentage: 8.6, color: "#2ca02c" },
	{ label: "Zone A + B", value: 590, percentage: 11.5, color: "#1f77b4" },
	{ label: "Zone C", value: 10, percentage: 0.2, color: "#d62728" },
];

function ZoneWiseDistributionGraph() {
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
	}, []);

	useEffect(() => {
		const svg = d3.select(svgRef.current);
		const width = dimensions.width;
		const height = dimensions.height;
		const radius = Math.min(width, height) / 3;

		svg.selectAll("*").remove(); // Clear previous SVG elements

		const color = d3
			.scaleOrdinal()
			.domain(data.map((d) => d.label))
			.range(data.map((d) => d.color));

		const arc = d3
			.arc()
			.outerRadius(radius - 10)
			.innerRadius(0);

		const pie = d3
			.pie()
			.sort(null)
			.value((d) => d.value);

		const g = svg
			.append("g")
			.attr("transform", `translate(${width / 2},${height / 2})`);

		const arcs = g
			.selectAll(".arc")
			.data(pie(data))
			.enter()
			.append("g")
			.attr("class", "arc");

		arcs
			.append("path")
			.attr("d", arc)
			.style("fill", (d) => color(d.data.label));

		arcs
			.append("text")
			.attr("transform", (d) => {
				const [x, y] = arc.centroid(d);
				const hypotenuse = Math.sqrt(x * x + y * y);
				const labelX = (radius + 10) * (x / hypotenuse);
				const labelY = (radius + 10) * (y / hypotenuse);
				return `translate(${labelX},${labelY})`;
			})
			.attr("dy", ".35em")
			.style("text-anchor", (d) => (arc.centroid(d)[0] > 0 ? "start" : "end"))
			.text((d) => `${d.data.label} (${d.data.percentage}%)`);

		// Legend
		const legend = svg
			.append("g")
			.attr("transform", `translate(40, ${height / 2 + 100})`);

		legend
			.selectAll(null)
			.data(data)
			.enter()
			.append("g")
			.attr("transform", (d, i) => `translate(${i * 20}, 0)`)
			.call((g) => {
				g.append("rect")
					.attr("width", 18)
					.attr("height", 18)
					.attr("x", (d, i) => 40 + 100 * i)
					.attr("y", 50)
					.style("fill", (d) => d.color);

				g.append("text")
					.attr("x", (d, i) => 60 + 100 * i)
					.attr("y", 60)
					.attr("dy", "0.35em")
					.text((d) => d.label);
			});
	}, [dimensions]);

	return (
		<div
			style={{
				width: "100%",
				height: "100%",
				maxWidth: "600px",
				margin: "0 auto",
			}}
		>
			<svg ref={svgRef} width="100%" height="400"></svg>
		</div>
	);
}

export default ZoneWiseDistributionGraph;
