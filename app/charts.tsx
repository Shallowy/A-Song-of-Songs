'use client'
import React, { useEffect, useState } from 'react';
import ReactECharts from 'echarts-for-react';
import * as d3 from 'd3';

const Page: React.FC = () => {
  const [data, setData] = useState<{ trackNumber: number; energy: number }[]>([]);

  useEffect(() => {
    d3.csv('/top_10000_1950-now.csv').then((csvData) => {
      const parsedData = csvData.map((d) => ({
        trackNumber: +d['Track Number'], // 假设 CSV 文件中有一列名为 'Track Number'
        energy: +d['Energy'], // 假设 CSV 文件中有一列名为 'Energy'
      }));
      setData(parsedData);
    });
  }, []);

  const options = {
    grid: { top: 8, right: 8, bottom: 24, left: 36 },
    xAxis: {
      type: 'category',
      data: data.map(d => d.trackNumber),
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: data.map(d => d.energy),
        type: 'line',
        smooth: true,
      },
    ],
    tooltip: {
      trigger: 'axis',
    },
  };

  return <ReactECharts option={options} />;
};

export default Page;