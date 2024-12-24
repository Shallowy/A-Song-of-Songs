'use client'
import React, { useEffect, useState } from 'react';
import ReactECharts from 'echarts-for-react';
import * as d3 from 'd3';

const Page: React.FC = () => {
  const [data, setData] = useState<{ year: number; trackNumber: number; energy: number; valence: number }[]>([]);

  useEffect(() => {
    d3.csv('/top_10000_1950-now.csv').then((csvData) => {
      const parsedData = csvData.map((d) => ({
        year: +d['Album Release Date'].slice(0, 4),
        trackNumber: +d['Track Number'],
        energy: +d['Energy'],
        valence: +d['Valence'],
      }));
      setData(parsedData);
    });
  }, []);

  const getAveragesByYear = () => {
    const yearGroups = data.reduce((acc, { year, energy, valence }) => {
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

  console.log(data);

  const options = {
    grid: { top: 100, right: 8, bottom: 80, left: 36 },
    xAxis: {
      type: 'category',
      data: averagesByYear.map(d => d.year),
    },
    yAxis: {
      type: 'value',
    },
    legend: {
      show: true,
      data: ['Energy', 'Valence'],
    }, 
    series: [
      {
        data: averagesByYear.map(d => d.avgEnergy),
        type: 'line',
        smooth: true,
      }, {
        data: averagesByYear.map(d => d.avgValence),
        type: 'line',
        smooth: true,
      }
    ],
    tooltip: {
      trigger: 'axis',
    },
    dataZoom: [
      {
        type: 'inside',
        start: 0,
        end: 20
      },
      {
        start: 0,
        end: 20
      }
    ],
  };

  return <ReactECharts option={options} />;
};

export default Page;