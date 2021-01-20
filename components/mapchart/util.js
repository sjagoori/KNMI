import { select, selectAll } from 'd3';
import { path, w, h } from './composer'
import theme from 'styles/theme'

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

  container.selectAll('svg').remove()

  const map = container.append("svg").attr("width", w)
  .attr("height", h)
  .style("margin-left", "0.45vw")
;

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

export const isNegative = a => { return a < 0 }

export const getColor = (a, b) => { return (a ? theme.colors.green : theme.colors.red) + (getAbsolute(b) > 100 && getAbsolute(b) > 0 ? 99 : getAbsolute(b) < 20 && getAbsolute(b) > 0 ? 20 : getAbsolute(b)) }

export const getAbsolute = a => { return Math.abs(Math.round(a * 100)) }
