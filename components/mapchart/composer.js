import { select, geoMercator, geoPath, selectAll, json } from 'd3';
import { generateHeadBlock, handleFilter, handleMouseOver, handleMouseOut, handleMouseMove } from './util';
const mapData = require('assets/mapdata.json')
export const projection = geoMercator().scale(650).center([25, 60])


export function composer(data) {
  //Width and height
  var w = 700;
  var h = 700;

  //Define path generator
  const path = geoPath().projection(projection)

  //Create SVG
  var svg = select("#" + data.chartId)
    .append("svg")
    .attr("width", w)
    .attr("height", h);

  //Bind data and create one path per GeoJSON feature
  svg.selectAll("path")
    .data(mapData.features)
    .enter()
    .append("path")
    .attr("d", path)
    .attr("stroke", "#FFF")
    .attr("fill", "#000")
    .attr("country", d=> d.properties.admin)
    .attr("continent", d=> d.properties.continent)
    .on("mouseover", handleMouseOver)
    .on("mouseout", handleMouseOut)
    .on('mousemove', handleMouseMove)

  return true
}

