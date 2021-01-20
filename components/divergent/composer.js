import { select, selectAll } from 'd3';
const delta_2019 = require('assets/NO2_delta_2019.csv');
const delta_2020 = require('assets/NO2_delta_2020.csv');

export function composer(data) {
  const container = select("#" + data.chartId)
  .append('div')
}