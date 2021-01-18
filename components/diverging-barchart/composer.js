import * as d3 from 'd3'



export function composer(a) {
  // const data = a.data;

  const data = [
    {month: "Q1-2016", apples_1: -400, bananas_1: 920, apples_2: -196, bananas_2: 840},
    {month: "Q2-2016", apples_1: -400, bananas_1: 440, apples_2: -960, bananas_2: 600},
    {month: "Q3-2016", apples_1: -600, bananas_1: 960, apples_2: -640, bananas_2: 640},
    {month: "Q4-2016", apples_1: -400, bananas_1: 480, apples_2: -640, bananas_2: 320}
  ];  

  console.log(data)
  var margin = {top: 35, right: 145, bottom: 35, left: 45},
  width = 650 - margin.left - margin.right,
  height = 450 - margin.top - margin.bottom;

var svg = d3.select("#chart")
.attr("width", width + margin.left + margin.right)
.attr("height", height + margin.top + margin.bottom)
.append("g")
.attr("transform","translate(" + margin.left + "," + margin.top + ")");

var x = d3.scaleBand()
  .rangeRound([0, width])
  .padding(0.1);

var y = d3.scaleLinear()
  .rangeRound([height, 0]);

var z = d3.scaleOrdinal()
.range(["steelblue","darkorange"]);

svg.append("g")
.attr("class","x-axis");

svg.append("g")
.attr("class", "y-axis");

var input = d3.selectAll(".opt").property("value");

d3.selectAll(".opt").on("change", function() {
update(data, this.value)
})

update(data, input);

function update(data, input) {

var keys = ["apples" + input, "bananas" + input];
  
var series = d3.stack()
  .keys(keys)
  .offset(d3.stackOffsetDiverging)
  (data);

x.domain(data.map(d => d.month));

y.domain([
  d3.min(series, stackMin), 
  d3.max(series, stackMax)
]).nice();

  var barGroups = svg.selectAll("g.layer")
    .data(series);

  barGroups.exit().remove();

  barGroups.enter().insert("g", ".x-axis")
    .classed('layer', true);
  
  svg.selectAll("g.layer")
    .transition().duration(750)
    .attr("fill", d => z(d.key));
  
  var bars = svg.selectAll("g.layer").selectAll("rect")
    .data(function(d) { return d; });
  
bars.exit().remove();
  
  bars = bars
    .enter()
  .append("rect")
    .attr("width", x.bandwidth())
    .attr("x", d => x(d.data.month))
    .merge(bars)

  bars.transition().duration(750)
    .attr("y", d => y(d[1]))
    .attr("height", d => Math.abs(y(d[0])) - y(d[1]));

svg.selectAll(".x-axis").transition().duration(750)
  .attr("transform", "translate(0," + y(0) + ")")
  .call(d3.axisBottom(x));

svg.selectAll(".y-axis").transition().duration(750)
  .call(d3.axisLeft(y));

function stackMin(serie) {
  return d3.min(serie, function(d) { return d[0]; });
}

function stackMax(serie) {
  return d3.max(serie, function(d) { return d[1]; });
}

}

  return true
}