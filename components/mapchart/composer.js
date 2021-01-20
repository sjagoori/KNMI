import { select, geoMercator, geoPath, selectAll, json } from 'd3';
import { handleFilter, handleMouseOver, handleMouseOut, handleMouseMove, isNegative, getColor } from './util';
const mapData = require('assets/AQICN_data_coords.json')
const mapDataBefore = require('assets/mapdata_2018.json')

export const projection = geoMercator().scale(700).center([6, 63])
export const path = geoPath().projection(projection)
export const w = '99vw'
export const h = 800

export function composer(data) {
  const container = select("#" + data.chartId).append('div')

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

  let options = ['Before COVID-19', 'During COVID-19']

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

  var map = container
    .append("svg")
    .attr("width", w)
    .attr("height", h)
    .style("margin-left", "0.45vw");

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
      secondaryOption: options[0]
    })
  })

  return true
}
