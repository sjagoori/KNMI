import { select, geoMercator, geoPath, selectAll, json } from 'd3';
import { generateHeadBlock, handleFilter, handleMouseOver, handleMouseOut, handleMouseMove } from './util';
const mapData = require('assets/AQICN_data_coords.json')
const mapDataBefore = require('assets/mapdata_2018.json')
// export const projection = geoMercator().scale(700).center([15, 63])
export const projection = geoMercator().scale(700).center([6, 63])


export function composer(data) {
  //Width and height
  var w = '99vw';
  var h = 800;

  //Define path generator
  const path = geoPath().projection(projection)

  let container = select("#" + data.chartId).append('div')

  const radiocontainer = container.append('div')
    .attr('class', 'radiocontainer')
    .style('display', 'flex')
    .style('flex-direction', 'column')
    .style('width', '99%')
    .style('justify-content', 'space-between')
    .style('align-items', 'center')
    

  const group = radiocontainer.append('div')
    .style('display', 'flex')
    .style('width', '350px')
    .style('margin', '15px')
    .style('justify-content', 'space-between')

  let options = ['before COVID-19', 'During COVID-19']

  options.map((key, index) => {
    group.append('input')
      .attr('name', 'radiogroup')
      .attr('type', 'radio')
      .attr('value', key)
      .attr('id', key)
      .attr('checked', index == 0 ? 'checked' : '')
      .style('display', 'none')
    group.append('label')
      .attr('for', key)
      .text(key)
      .style('display', 'block')
      .style('cursor', 'pointer')
  })

  //Create SVG
  var map = container
    .append("svg")
    .attr("width", w)
    .attr("height", h)
    .style("margin-left", "0.45vw");

  //Bind data and create one path per GeoJSON feature
  map.selectAll("path")
    .data(mapData.features)
    .enter()
    .append("path")
    .attr("d", path)
    .attr('id', 'map')
    .style("stroke", "#000")
    .style("fill", d => d.properties.euMember && isNegative(d.properties.delta) ? getColor(true, d.properties.delta) : getColor(false, d.properties.delta))
    .attr("country", d => d.properties.admin)
    .attr("continent", d => d.properties.continent)
    .on("mouseover", handleMouseOver)
    .on("mouseout", handleMouseOut)
    .on('mousemove', handleMouseMove)

  selectAll('input[name="radiogroup"').on('change', d => {
    handleFilter({
      id: data.chartId,
      event: d,
      primarySet: mapData,
      secondarySet: mapDataBefore,
      secondaryOption: 'before COVID-19'
    })
  })

  return true
}

const isNegative = a => { return a < 0 }

const getColor = (a, b) => { return (a ? '#008000' : '#FF0000') + (getAbsolute(b) > 100 && getAbsolute(b) > 0 ? 99 : getAbsolute(b) < 20 && getAbsolute(b) > 0 ? 20 : getAbsolute(b)) }

const getAbsolute = a => { return Math.abs(Math.round(a * 100)) }