import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

const rawData = [
	{ date: "2024-05-06", orders: 50, revenue: 200000 },
	{ date: "2024-05-07", orders: 80, revenue: 300000 },
	{ date: "2024-05-08", orders: 120, revenue: 500000 },
	{ date: "2024-05-09", orders: 100, revenue: 400000 },
	{ date: "2024-05-10", orders: 140, revenue: 600000 },
	{ date: "2024-05-11", orders: 160, revenue: 700000 },
	{ date: "2024-05-12", orders: 180, revenue: 750000 },
	{ date: "2024-05-13", orders: 220, revenue: 850000 },
	{ date: "2024-05-14", orders: 200, revenue: 800000 },
	{ date: "2024-05-15", orders: 190, revenue: 780000 },
	{ date: "2024-05-16", orders: 180, revenue: 760000 },
	{ date: "2024-05-17", orders: 170, revenue: 740000 },
	{ date: "2024-05-18", orders: 160, revenue: 720000 },
	{ date: "2024-05-19", orders: 150, revenue: 700000 },
	{ date: "2024-05-20", orders: 140, revenue: 680000 },
	{ date: "2024-05-21", orders: 130, revenue: 660000 },
	{ date: "2024-05-22", orders: 120, revenue: 640000 },
	{ date: "2024-05-23", orders: 110, revenue: 620000 },
	{ date: "2024-05-24", orders: 100, revenue: 600000 },
	{ date: "2024-05-25", orders: 90, revenue: 580000 },
	{ date: "2024-05-26", orders: 80, revenue: 560000 },
	{ date: "2024-05-27", orders: 70, revenue: 540000 },
	{ date: "2024-05-28", orders: 60, revenue: 520000 },
	{ date: "2024-05-29", orders: 50, revenue: 500000 },
	{ date: "2024-05-30", orders: 40, revenue: 480000 },
	{ date: "2024-05-31", orders: 30, revenue: 460000 },
	{ date: "2024-06-01", orders: 20, revenue: 440000 },
	{ date: "2024-06-02", orders: 10, revenue: 420000 },
	{ date: "2024-06-03", orders: 15, revenue: 410000 },
	{ date: "2024-06-04", orders: 25, revenue: 430000 },
	{ date: "2024-06-05", orders: 35, revenue: 450000 },
	{ date: "2024-06-06", orders: 80, revenue: 200000 },
];

const parseDate = d3.timeParse("%Y-%m-%d");
const data = rawData.map((d) => ({ ...d, date: parseDate(d.date) }));

const OrdersRevenueChart = () => {
	const svgRef = useRef();
	const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

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
		if (dimensions.width === 0 || dimensions.height === 0) return;

		// Clear existing content before re-drawing
		d3.select(svgRef.current).selectAll("*").remove();

		const margin = { top: 20, right: 60, bottom: 50, left: 60 };
		const width = dimensions.width - margin.left - margin.right;
		const height = dimensions.height - margin.top - margin.bottom;

		const svg = d3
			.select(svgRef.current)
			.attr("width", dimensions.width)
			.attr("height", dimensions.height)
			.append("g")
			.attr("transform", `translate(${margin.left},${margin.top})`);

		const x = d3
			.scaleBand()
			.domain(data.map((d) => d.date))
			.range([0, width])
			.padding(0.2);

		const yOrders = d3
			.scaleLinear()
			.domain([0, d3.max(data, (d) => d.orders)])
			.nice()
			.range([height, 0]);

		const yRevenue = d3
			.scaleLinear()
			.domain([0, d3.max(data, (d) => d.revenue)])
			.nice()
			.range([height, 0]);

		const xAxis = d3.axisBottom(x).tickFormat(d3.timeFormat("%Y-%m-%d"));
		const yAxisLeft = d3.axisLeft(yOrders);
		const yAxisLeftGrid = d3
			.axisLeft(yOrders)
			.tickSize(-width)
			.tickFormat("")
			.ticks(10);
		const yAxisRight = d3.axisRight(yRevenue);

		svg
			.append("g")
			.attr("class", "x axis")
			.attr("transform", `translate(0,${height})`)
			.call(xAxis)
			.selectAll("text")
			.attr("transform", "rotate(-45)")
			.style("text-anchor", "end");

		svg.append("g").attr("class", "y axis").call(yAxisLeft);
		svg.append("g").attr("class", "y axis").call(yAxisLeftGrid);

		svg
			.append("g")
			.attr("class", "y axis")
			.attr("transform", `translate(${width},0)`)
			.call(yAxisRight);

		svg
			.selectAll(".bar")
			.data(data)
			.enter()
			.append("rect")
			.attr("class", "bar")
			.attr("x", (d) => x(d.date))
			.attr("width", x.bandwidth())
			.attr("y", (d) => yOrders(d.orders))
			.attr("height", (d) => height - yOrders(d.orders))
			.attr("fill", "steelblue");

		const line = d3
			.line()
			.x((d) => x(d.date) + x.bandwidth() / 2)
			.y((d) => yRevenue(d.revenue));

		svg
			.append("path")
			.datum(data)
			.attr("class", "line")
			.attr("d", line)
			.attr("fill", "none")
			.attr("stroke", "orange")
			.attr("stroke-width", 2);

		svg
			.selectAll(".dot")
			.data(data)
			.enter()
			.append("circle")
			.attr("class", "dot")
			.attr("cx", (d) => x(d.date) + x.bandwidth() / 2)
			.attr("cy", (d) => yRevenue(d.revenue))
			.attr("r", 4)
			.attr("fill", "orange");
	}, [dimensions]);

	return <svg ref={svgRef}></svg>;
};

export default OrdersRevenueChart;
