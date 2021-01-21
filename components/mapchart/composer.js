import { select, geoMercator, geoPath, selectAll, json } from 'd3';
import { handleFilter, handleMouseOver, handleMouseOut, handleMouseMove, isNegative, getColor } from './util';
const mapData = require('assets/AQICN_data_coords.json')
const mapDataBefore = require('assets/mapdata_2018.json')
import theme from 'styles/theme'

export const projection = geoMercator().scale(700).center([0, 63])
export const path = geoPath().projection(projection)
export const w = '75vw'
export const h = 800

export function composer(data) {
  const container = select("#" + data.chartId)
    .append('div')

  const topcontainer = container.append('div')
    .attr('class', 'topcontainer')
    .style('display', 'flex')
    .style('align-items', 'center')
    .style('justify-content', 'space-between')
    .style('margin-bottom', '20px')

  topcontainer.append('div').append('h3').text(data.title)

  const radiocontainer = topcontainer.append('div')
    .attr('class', 'radiocontainer')

  const legend = topcontainer.append('div')
    .style('display', 'flex')
    .style('align-items', 'center')
    .style('justify-content', 'space-between')

  legend.append('span').text('Increase').style('font-weight', '500')

  legend.append('div')
    .style('width', '200px')
    .style('height', '20px')
    .style('border-radius', '5px')
    .attr('id', 'legendBox')

    .style('background', 'linear-gradient(to right,' + theme.colors.red + ',' + theme.colors.green)

  legend.append('span').text('Decrease').style('font-weight', '500')

  const group = radiocontainer.append('div')
    .style('display', 'flex')
    .style('width', '300px')
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

  const creditContainer = container.append('div')
    .style('text-align', 'right')
    .style('color', 'grey')
    .style('font-size', '.8rem')
    .style('font-style', 'italic')

  creditContainer.append('span')
    .text('A special thanks to:')
    .style('font-weight', '500')

  data.credits.map(key => {
    creditContainer.append('a')
      .text(key.label)
      .attr('href', key.url)
      .style('display', 'block')
  })

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
