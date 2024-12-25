'use client'
import React from 'react';
import ReactECharts from 'echarts-for-react';
import { csvReader1 } from './dataLoad';

const Chart1: React.FC = () => {
  const data = csvReader1();

  const getAveragesByYear = () => {
    const yearGroups = data.reduce((acc, {
      year, 
      danceability, 
      energy,
      speechiness,
      acousticness,
      instrumentalness,
      liveness,
      valence,
      popularity
    }) => {
      if (year === 0) {
        return acc;
      }
      if (!acc[year]) {
        acc[year] = { 
          totalDanceability: 0,
          totalEnergy: 0,
          totalSpeechiness: 0,
          totalAcousticness: 0,
          totalInstrumentalness: 0,
          totalLiveness: 0,
          totalValence: 0,
          totalPopularity: 0,
          count: 0 
        };
      }
      acc[year].totalDanceability += danceability;
      acc[year].totalEnergy += energy;
      acc[year].totalSpeechiness += speechiness;
      acc[year].totalAcousticness += acousticness;
      acc[year].totalInstrumentalness += instrumentalness;
      acc[year].totalLiveness += liveness;
      acc[year].totalValence += valence;
      acc[year].totalPopularity += popularity;
      acc[year].count += 1;
      return acc;
    }, {} as Record<number, { 
      totalDanceability: number,
      totalEnergy: number,
      totalSpeechiness: number,
      totalAcousticness: number,
      totalInstrumentalness: number,
      totalLiveness: number,
      totalValence: number,
      totalPopularity: number,
      count: number
    }>);

    const averages = Object.entries(yearGroups).map(([year, {
      totalDanceability,
      totalEnergy,
      totalSpeechiness,
      totalAcousticness,
      totalInstrumentalness,
      totalLiveness,
      totalValence,
      totalPopularity,
      count
    }]) => {
      return {
        year: Number(year),
        avgDanceability: totalDanceability / count,
        avgEnergy: totalEnergy / count,
        avgSpeechiness: totalSpeechiness / count,
        avgAcousticness: totalAcousticness / count,
        avgInstrumentalness: totalInstrumentalness / count,
        avgLiveness: totalLiveness / count,
        avgValence: totalValence / count,
        avgPopularity: totalPopularity / (count * 100),
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
        name: 'Danceability',
        data: averagesByYear.map(d => d.avgDanceability),
        type: 'line',
        symbol: 'none',
        areaStyle: {},
        smooth: true,
      }, {
        name: 'Energy',
        data: averagesByYear.map(d => d.avgEnergy),
        type: 'line',
        symbol: 'none',
        areaStyle: {},
        smooth: true,
      }, {
        name: 'Speechiness',
        data: averagesByYear.map(d => d.avgSpeechiness),
        type: 'line',
        symbol: 'none',
        areaStyle: {},
        smooth: true,
      }, {
        name: 'Acousticness',
        data: averagesByYear.map(d => d.avgAcousticness),
        type: 'line',
        symbol: 'none',
        areaStyle: {},
        smooth: true,
      }, {
        name: 'Instrumentalness',
        data: averagesByYear.map(d => d.avgInstrumentalness),
        type: 'line',
        symbol: 'none',
        areaStyle: {},
        smooth: true,
      }, {
        name: 'Liveness',
        data: averagesByYear.map(d => d.avgLiveness),
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
      }, {
        name: 'Popularity',
        data: averagesByYear.map(d => d.avgPopularity),
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