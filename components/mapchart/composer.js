import { select, geoMercator, geoPath, selectAll, json } from 'd3';
import { generateHeadBlock, handleFilter, handleMouseOver, handleMouseOut, handleMouseMove } from './util';
const mapData = require('assets/AQICN_data_coords.json')
export const projection = geoMercator().scale(700).center([15, 63])

export function composer(data) {
  //Width and height
  var w = 900;
  var h = 800;

  //Define path generator
  const path = geoPath().projection(projection)

  let container = select("#" + data.chartId).append('div')

  //Create SVG
  var map = container
    .append("svg")
    .attr("width", w)
    .attr("height", h);

  //Bind data and create one path per GeoJSON feature
  map.selectAll("path")
    .data(mapData.features)
    .enter()
    .append("path")
    .attr("d", path)
    .style("stroke", "#000")
    .style("fill", d => d.properties.continent == 'Europe' ? ("#ff0000" + Math.round(d.properties.delta * 100)) : '')
    .attr("country", d=> d.properties.admin)
    .attr("continent", d=> d.properties.continent)
    .on("mouseover", handleMouseOver)
    .on("mouseout", handleMouseOut)
    .on('mousemove', handleMouseMove)

  return true
}

