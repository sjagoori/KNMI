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
    .style('top', e.pageY + 'px')
    .style('left', e.pageX + 'px')
    .style('position', 'absolute')
    .style('background-color', 'white')
    .style('padding', '10px')
    .style('width', '250px')
    .style('display', 'flex')
    .style('flex-direction', 'column')
    .style('align-items', 'center')

    .style('border-radius', '5px')
    .style('border', '1px solid black')
    .style('opacity', !i.properties.euMember ? 0 : 1)


  const tt = ttcontainer
    .attr("id", "tooltip")

  tt
    .append('p')
    .text(i.properties.admin + ' - ' + (isNegative(Math.round(i.properties.delta * 100) / 100) ? '📉' : '📈') + ' ' + Math.round(i.properties.delta * 100) / 100 + '%')
    .style('text-align', 'center')
    .style('margin', '0px 5px 0px 5px')
    .style('font-weight', '700')

  const table = tt
    .append('table')
    .attr('class', 'infotable')
    .style('opacity', !i.properties.euMember ? 0 : 1)
    .style('width', '100%')


  const headerRow = table
    .append('tr')

  headerRow
    .append('th')
    .attr("colspan", 2)
    .text('2019')
    .style('border-bottom', '1px solid #333')
    .style('font-weight', '600')

  headerRow
    .append('th')
    .attr("colspan", 2)
    .text('2020')
    .style('border-bottom', '1px solid #333')
    .style('font-weight', '600')

  const marchRow = table
    .append('tr')
    .style('border', '1px solid red')

  // 2019
  marchRow
    .append('td')
    .text('March')

  marchRow
    .append('td')
    .text(i.properties.euMember ? i.properties.monthly.m2019.march : null)
    .style('border-right', '1px solid #333')

  // 2020
  marchRow
    .append('td')
    .text('March')
  marchRow
    .append('td')
    .text(i.properties.euMember ? i.properties.monthly.m2020.march : null)

  const aprilRow = table
    .append('tr')

  // 2019
  aprilRow
    .append('td')
    .text('April')
  aprilRow
    .append('td')
    .text(i.properties.euMember ? i.properties.monthly.m2019.april : null)
    .style('border-right', '1px solid #333')

  // 2020
  aprilRow
    .append('td')
    .text('April')
  aprilRow
    .append('td')
    .text(i.properties.euMember ? i.properties.monthly.m2020.april : null)

  const mayRow = table
    .append('tr')

  // 2019
  mayRow
    .append('td')
    .text('May')

  mayRow
    .append('td')
    .text(i.properties.euMember ? i.properties.monthly.m2019.may : null)
    .style('border-right', '1px solid #333')

  // 2020
  mayRow
    .append('td')
    .text('May')
  mayRow
    .append('td')
    .text(i.properties.euMember ? i.properties.monthly.m2020.may : null)

  const juneRow = table
    .append('tr')

  // 2019
  juneRow
    .append('td')
    .text('June')
  juneRow
    .append('td')
    .text(i.properties.euMember ? i.properties.monthly.m2019.june : null)
    .style('border-right', '1px solid #333')


  // 2020
  juneRow
    .append('td')
    .text('June')
  juneRow
    .append('td')
    .text(i.properties.euMember ? i.properties.monthly.m2020.june : null)
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
    .attr("height", h);

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
