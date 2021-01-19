import { select, geoMercator, geoPath, selectAll, json } from 'd3';
import { projection } from './composer'



/**
 * Function handles mouseover event
 * @see {@link https://bl.ocks.org/d3noob/a22c42db65eb00d4e369} - used reference
 * @param {Event} e - mouseover  event
 * @param {Object} i - data
 */
export const handleMouseOver = (e, i) => {
  const ttcontainer = select("body")
    .append("div")
    .style('position', 'absolute')

  const tt = ttcontainer
    .attr("id", "tooltip")

  tt
    .append('p')
    .text(i.properties.admin + ' ' + Math.round(i.properties.delta * 100)/100 + '%' )
    .style('opacity', i.properties.continent != 'Europe' ? 0 : 1)
    .style('background-color', 'white')
    .style('color', 'black')
    .style('position', 'absolute')
    .style('padding', '5px')
    .style('border', '1px solid black')
    .style('border-radius', '5px')
}

/**
 * Functon handles mousemove event
 * @param {Event} e - event
 */
export const handleMouseMove = (e) => {
  select("#tooltip")
    .style('top', e.pageY + 'px')
    .style('left', e.pageX + 'px')
}

/**
 * Functon handles mouseout event
 * @param {Event} e - unused to fetch default parm
 * @param {Object} i - data
 */
export const handleMouseOut = () => {
  selectAll('#tooltip').remove()
}

/**
 * Function handles filter for map chart
 * @param {Object} data - filter attributes
 * 
 * data {
 *    id:               'string',
 *    event:            'event object',
 *    primarySet:       'object',
 *    secondarySet:     'object',
 *    secondaryOption:  'string'
 * }
 */
export const handleFilter = (data) => {
  const pick = data.event.target.defaultValue == data.secondaryOption ? data.secondarySet : data.primarySet
  const container = select("#" + data.id)
  const path = geoPath().projection(projection)
  console.log(pick)

  var map = container.append("svg")

  container.selectAll('svg').remove()

  map.selectAll("path")
  .data(pick.features)
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


}

const isNegative = a => { return a < 0 }

const getColor = (a, b) => { return (a ? '#FF0000' : '#008000') + (getAbsolute(b) > 100 && getAbsolute(b) > 0 ? 99 : getAbsolute(b) < 20 && getAbsolute(b) > 0 ? 20 : getAbsolute(b)) }

const getAbsolute = a => { return Math.abs(Math.round(a * 100)) }

/**
 * Function generates headblock 
 * @param {Object} data - headBlock attributes
 * 
 * data {
 *    id:            'string',
 *    lead:          'string',
 *    filterOptions: 'object'
 * }
 */
export const generateHeadBlock = (data) => {
  const head = select('#' + data.id + 'lowerPart').append('div')
    .style('display', 'flex')
    .style('flex-direction', 'column')
    .style('width', '350px')
  head.append('p')
    .text(data.lead)

  const radiocontainer = head.append('div')
    .attr('class', 'radiocontainer')
    .style('display', 'flex')
    .style('flex-direction', 'column')
    .style('width', '300px')
    .style('justify-content', 'space-between')

  data.filterOptions ? generateOptions(data.filterOptions, radiocontainer) : false
}

/**
 * Function generates for generateHeadblock function
 * @see {@link generateHeadBlock}
 * @param {Object} options - object of options
 * @param {Object} container - d3 container for the options to append at
 */
const generateOptions = (options, container) => {
  container.append('p')
    .text('Select:')
    .style('font-weight', '700')

  const group = container.append('div')
    .style('display', 'flex')
    .style('width', '180px')
    .style('justify-content', 'space-between')

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
}

