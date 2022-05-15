import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import styles from "../styles/Chart.module.scss";

var sample = [
  { category: "A", quantity: 40 },
  { category: "B", quantity: 151 },
  { category: "C", quantity: 89 },
  { category: "D", quantity: 124 },
  { category: "E", quantity: 30 },
  { category: "F", quantity: 190 },
  { category: "G", quantity: 10 },
  { category: "H", quantity: 104 },
];

const Chart = () => {
  const [sampleData, setSampleData] = useState(sample);
  const [isRandomized, setIsRandomized] = useState(true);

  function getRandomData() {
    const randomizedData = sampleData.sort(() => 0.5 - Math.random());
    setSampleData(randomizedData);
    setIsRandomized((prev) => !prev);

    // Listen for any resize event update

    window.addEventListener("resize", () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    });
  }

  const d3Chart = useRef();
  // Ref for updating dimention
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  // Ref for resize event update
  const update = useRef(false);

  useEffect(() => {
    if (update.current) {
      d3.selectAll("g").remove();
    } else {
      update.current = true;
    }

    // Draw chart using the data and updated dimensions
    DrawChart(sampleData, dimensions);
  }, [isRandomized, dimensions]);

  const margin = { top: 50, right: 30, bottom: 30, left: 60 };

  function DrawChart(data, dimensions) {
    const chartwidth =
      parseInt(d3.select("#d3demo").style("width")) -
      margin.left -
      margin.right;
    const chartheight =
      parseInt(d3.select("#d3demo").style("height")) -
      margin.top -
      margin.bottom;

    const svg = d3
      .select(d3Chart.current)
      .attr("width", chartwidth + margin.left + margin.right)
      .attr("height", chartheight + margin.top + margin.bottom);

    // x scale
    const x = d3
      .scaleBand()
      .domain(d3.range(data.length))
      .range([margin.left, chartwidth - margin.right])
      .padding(0.1);

    svg
      .append("g")
      .attr("transform", "translate(0," + chartheight + ")")
      .call(
        d3
          .axisBottom(x)
          .tickFormat((i) => data[i].category)
          .tickSizeOuter(0)
      );

    const max = d3.max(data, function (d) {
      return d.quantity;
    });

    // y scale
    const y = d3
      .scaleLinear()
      .domain([0, max])
      .range([chartheight, margin.top]);

    svg
      .append("g")
      .attr("transform", "translate(" + margin.left + ",0)")
      .call(d3.axisLeft(y));

    // Draw bars
    svg
      .append("g")
      .attr("fill", "#65f0eb")
      .selectAll("rect")
      .data(data)
      .join("rect")
      .attr("x", (d, i) => x(i))
      .attr("y", (d) => y(d.quantity))
      .attr("height", (d) => y(0) - y(d.quantity))
      .attr("width", x.bandwidth());
  }

  return (
    <div className={styles.d3demo} id="d3demo">
      <h2 style={{ textAlign: "center" }}>
        D3 Visualization of Categories and their Quantities
      </h2>
      <svg ref={d3Chart}></svg>
      <button
        style={{ color: "white", marginLeft: "10%" }}
        className="btn btn-danger"
        onClick={() => getRandomData()}
      >
        Random!
      </button>
    </div>
  );
};

export default Chart;
