'use client'
import React from 'react';
import ReactECharts from 'echarts-for-react';
import csvReader from './dataLoad';

const CATEGORY_DIM_COUNT = 10;
const GAP = 2;
const BASE_LEFT = 5;
const BASE_TOP = 5;
const GRID_WIDTH = 10;
const GRID_HEIGHT = 10;
const SYMBOL_SIZE = 2;

function retrieveScatterData(
  data: (number | string)[][],
  dimX: number,
  dimY: number
) {
  let result = [];
  for (let i = 0; i < data.length; i++) {
    let item = [data[i][dimX], data[i][dimY]];
    result.push(item);
  }
  return result;
}

function generateGrids(rawData: (number | string)[][]) {
  let index = 0;

  const grid: echarts.GridComponentOption[] = [];
  const xAxis: echarts.XAXisComponentOption[] = [];
  const yAxis: echarts.YAXisComponentOption[] = [];
  const series: echarts.SeriesOption[] = [];

  for (let i = 0; i < CATEGORY_DIM_COUNT; i++) {
    for (let j = 0; j < CATEGORY_DIM_COUNT; j++) {
      if (CATEGORY_DIM_COUNT - j + i > CATEGORY_DIM_COUNT) {
        continue;
      }

      grid.push({
        left: BASE_LEFT + i * (GRID_WIDTH + GAP) + '%',
        top: BASE_TOP + j * (GRID_HEIGHT + GAP) + '%',
        width: GRID_WIDTH + '%',
        height: GRID_HEIGHT + '%'
      });

      xAxis.push({
        splitNumber: 3,
        position: 'bottom',
        axisLine: {
          show: j === CATEGORY_DIM_COUNT - 1,
          onZero: false
        },
        axisTick: {
          show: j === CATEGORY_DIM_COUNT - 1,
          inside: true
        },
        axisLabel: {
          show: j === CATEGORY_DIM_COUNT - 1
        },
        type: 'value',
        gridIndex: index,
        scale: true
      });

      yAxis.push({
        splitNumber: 3,
        position: 'left',
        axisLine: {
          show: i === 0,
          onZero: false
        },
        axisTick: {
          show: i === 0,
          inside: true
        },
        axisLabel: {
          show: i === 0
        },
        type: 'value',
        gridIndex: index,
        scale: true
      });

      series.push({
        type: 'scatter',
        symbolSize: SYMBOL_SIZE,
        xAxisIndex: index,
        yAxisIndex: index,
        data: retrieveScatterData(rawData, i, j)
      });

      index++;
    }
  }

  return {
    grid,
    xAxis,
    yAxis,
    series
  };
}

const Chart2: React.FC = () => {
  const data = csvReader();
	let rawData = data.map((d) => [
		d.danceability,
		d.energy,
		d.loudness,
		d.speechiness,
		d.acousticness,
		d.instrumentalness,
		d.liveness,
		d.valence,
		d.tempo,
		d.popularity
	]);

	// 随机取 1000 个点
	rawData = rawData.slice(0, 1000);

  const gridOption = generateGrids(rawData);

	const options = {
		animation: false,
		brush: {
			brushLink: 'all',
			xAxisIndex: gridOption.xAxis.map(function (_, idx) {
				return idx;
			}),
			yAxisIndex: gridOption.yAxis.map(function (_, idx) {
				return idx;
			}),
			inBrush: {
				opacity: 1
			}
		},
		xAxis: gridOption.xAxis,
		yAxis: gridOption.yAxis,
		grid: gridOption.grid,
		series: [...gridOption.series]
	};  

  return <ReactECharts option={options} style={{width: "1000px", height: "600px"}} />;
};

export default Chart2;