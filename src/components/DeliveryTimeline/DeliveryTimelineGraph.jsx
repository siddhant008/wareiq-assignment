import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

const data = [
	{ label: "1 - 2 Days", value: 1002, percentage: 53.5, color: "#1f77b4" },
	{ label: "3 - 4 Days", value: 686, percentage: 36.6, color: "#ff7f0e" },
	{ label: "5 Days", value: 160, percentage: 8.5, color: "#2ca02c" },
	{ label: ">5 Days", value: 26, percentage: 1.4, color: "#d62728" },
];

function DeliveryTimelineGraph() {
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
		const radius = Math.min(width, height) / 4;

		svg.selectAll("*").remove(); // Clear previous SVG elements

		const color = d3
			.scaleOrdinal()
			.domain(data.map((d) => d.label))
			.range(data.map((d) => d.color));

		const arc = d3
			.arc()
			.outerRadius(radius - 10)
			.innerRadius(radius - (radius / 2));

		const pie = d3
			.pie()
			.sort(null)
			.value((d) => d.value);

		const g = svg
			.attr("width", width)
			.attr("height", height)
			.append("g")
			.attr("transform", `translate(${width / 2},${height / 3})`);

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
				const labelX = (radius - 20) * (x / hypotenuse);
				const labelY = (radius - 20) * (y / hypotenuse);
				return `translate(${labelX},${labelY})`;
			})
			.attr("dy", ".35em")
			.style("text-anchor", (d) => (arc.centroid(d)[0] > 0 ? "start" : "end"))
			.text((d) => `${d.data.label} (${d.data.percentage}%)`);

		// Legend
		const legend = svg
			.append("g")
			.attr("transform", `translate(0, ${height / 2 + 20})`);

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
		g.append("text")
			.attr("text-anchor", "middle")
			.style("font-size", "16px")
			.style("font-weight", "bold")
			.attr("dy", "-0.5em")
			.text("2.5");

		g.append("text")
			.attr("text-anchor", "middle")
			.style("font-size", "14px")
			.attr("dy", "0.5em")
			.text("avg days");
	}, [dimensions]);

	return (
		<div style={{ width: "100%", maxWidth: "600px", margin: "0 auto" }}>
			<svg ref={svgRef}></svg>
		</div>
	);
}

export default DeliveryTimelineGraph;
