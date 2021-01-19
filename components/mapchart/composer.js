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
    .style("fill", d => d.properties.euMember && isNegative(d.properties.delta) ? getColor(true, d.properties.delta) : getColor(false, d.properties.delta) )
    .attr("country", d => d.properties.admin)
    .attr("continent", d => d.properties.continent)
    .on("mouseover", handleMouseOver)
    .on("mouseout", handleMouseOut)
    .on('mousemove', handleMouseMove)

  return true
}

const isNegative = a => { return a < 0 }

const getColor = (a, b) => { return (a ? '#FF0000' : '#008000') + + Math.abs(Math.round(b * 100)) }