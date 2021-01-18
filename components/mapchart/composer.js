import { select, geoMercator, geoPath, selectAll, json } from 'd3';
import { generateHeadBlock, handleFilter, handleMouseOver, handleMouseOut } from './util';
const mapData = require('assets/mapdata.json')
export const projection = geoMercator().scale(900).center([13, 52])


export function composer(data) {
  //Width and height
  var w = 800;
  var h = 600;

  //Define path generator
  const path = geoPath().projection(projection)

  //Create SVG
  var svg = select("#" + data.chartId)
    .append("svg")
    .attr("width", w)
    .attr("height", h);

  //Load in GeoJSON data

  console.log(mapData)


  //Bind data and create one path per GeoJSON feature
  svg.selectAll("path")
    .data(mapData.features)
    .enter()
    .append("path")
    .attr("d", path)
    .attr("stroke", "#FFF")
    .attr("fill", "#000")
    .on("mouseover", handleMouseOver)
    .on("mouseout", handleMouseOut)
    ;

  return true
}

