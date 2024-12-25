'use client'
import React from 'react';
import ReactECharts from 'echarts-for-react';
import csvReader from './dataLoad';

const Chart1: React.FC = () => {
  const data = csvReader();

  const getAveragesByYear = () => {
    const yearGroups = data.reduce((acc, { year, energy, valence }) => {
      if (year === 0) {
        return acc;
      }
      if (!acc[year]) {
        acc[year] = { totalEnergy: 0, totalValence: 0, count: 0 };
      }
      acc[year].totalEnergy += energy;
      acc[year].totalValence += valence;
      acc[year].count += 1;
      return acc;
    }, {} as Record<number, { totalEnergy: number; totalValence: number; count: number }>);

    const averages = Object.entries(yearGroups).map(([year, { totalEnergy, totalValence, count }]) => {
      return {
        year: Number(year),
        avgEnergy: totalEnergy / count,
        avgValence: totalValence / count,
      };
    });

    return averages;
  };

  const averagesByYear = getAveragesByYear();

  // console.log(averagesByYear.map(d => d.year));

  const options = {
    grid: { top: 50, right: 8, left: 36, width: '70%', height: '50%' },
    xAxis: {
      type: 'category',
      data: averagesByYear.map(d => d.year),
      boundaryGap: true,
    },
    yAxis: {
      type: 'value',
    },
    legend: {
      show: true,
    },
    series: [
      {
        name: 'Energy',
        data: averagesByYear.map(d => d.avgEnergy),
        type: 'line',
        symbol: 'none',
        areaStyle: {},
        smooth: true,
      }, {
        name: 'Valence',
        data: averagesByYear.map(d => d.avgValence),
        type: 'line',
        symbol: 'none',
        areaStyle: {},
        smooth: true,
      }
    ],
    tooltip: {
      trigger: 'axis',
    },
    dataZoom: [
      {
        type: 'slider',
        top: '65%',
        start: 0,
        end: 100
      }, {
        type: 'inside',
        start: 0,
        end: 100
      }
    ],
  };

  return <ReactECharts option={options} style={{width: "600px", height: "600px"}} />;
};

export default Chart1;