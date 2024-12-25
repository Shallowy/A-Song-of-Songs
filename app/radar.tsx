'use client'
import React from 'react';
import ReactECharts from 'echarts-for-react';
import { csvReader2 } from './dataLoad';

const genreFromString = (genre: string): number => {
  switch (genre) {
    case 'pop': return 1;
    case 'country': return 2;
    case 'blues': return 3;
    case 'rock': return 4;
    case 'jazz': return 5;
    default: return 0;
  }
};

const Radar: React.FC = () => {
  const data = csvReader2();

  const getAveragesByGenre = () => {
    const GenreGroups = data.reduce((acc, {
      genre,
      romantic,
      violence,
      world_life,
      shake_the_audience,
      family,
      obscene,
      music,
      sadness,
      feelings,
    }) => {
      const index = genreFromString(genre);
      if (index === 0) {
        return acc;
      }
      if (!acc[index]) {
        acc[index] = { 
          totalRomantic: 0,
          totalViolence: 0,
          totalWorld_life: 0,
          totalShake_the_audience: 0,
          totalFamily: 0,
          totalObscene: 0,
          totalMusic: 0,
          totalSadness: 0,
          totalFeelings: 0,
          count: 0
        };
      }
      acc[index].totalRomantic += romantic;
      acc[index].totalViolence += violence;
      acc[index].totalWorld_life += world_life;
      acc[index].totalShake_the_audience += shake_the_audience;
      acc[index].totalFamily += family;
      acc[index].totalObscene += obscene;
      acc[index].totalMusic += music;
      acc[index].totalSadness += sadness;
      acc[index].totalFeelings += feelings;
      acc[index].count += 1;
      return acc;
    }, {} as Record<number, { 
      totalRomantic: number,
      totalViolence: number,
      totalWorld_life: number,
      totalShake_the_audience: number,
      totalFamily: number,
      totalObscene: number,
      totalMusic: number,
      totalSadness: number,
      totalFeelings: number,
      count: number
    }>);

    const averages = Object.entries(GenreGroups).map(([genre, {
      totalRomantic,
      totalViolence,
      totalWorld_life,
      totalShake_the_audience,
      totalFamily,
      totalObscene,
      totalMusic,
      totalSadness,
      totalFeelings,
      count
    }]) => {
      return {
        avgRomantic: totalRomantic / count,
        avgViolence: totalViolence / count,
        avgWorld_life: totalWorld_life / count,
        avgShake_the_audience: totalShake_the_audience / count,
        avgFamily: totalFamily / count,
        avgObscene: totalObscene / count,
        avgMusic: totalMusic / count,
        avgSadness: totalSadness / count,
        avgFeelings: totalFeelings / count,
      };
    });

    return averages;
  };

  const averagesByGenre = getAveragesByGenre();

  console.log(averagesByGenre);

  const lineStyle = {
    width: 1,
    opacity: 1
  };

  const options = {
    backgroundColor: '#161627',
    title: {
      text: 'Radar',
      left: 'center',
      textStyle: {
        color: '#eee'
      }
    },
		tooltip: {
      trigger: 'item',
    },
    visualMap: {
      top: 'middle',
      right: 10,
      textStyle: {
        color: 'white',
      },
      color: ['yellow', 'red'],
      calculable: true
    },
    radar: {
      indicator: [
        { name: 'Romantic', max: 1 },
        { name: 'Violence', max: 1 },
        { name: 'World/Life', max: 1 },
        { name: 'Shake the audience', max: 1 },
        { name: 'Family', max: 1 },
        { name: 'Obscene', max: 1 },
				{ name: 'Music', max: 1 },
				{ name: 'Sadness', max: 1 },
        { name: 'Feelings', max: 1 },
      ],
      shape: 'circle',
      splitNumber: 5,
      axisName: {
        color: 'rgb(238, 197, 102)'
      },
      splitLine: {
        lineStyle: {
          color: [
            'rgba(238, 197, 102, 0.1)',
            'rgba(238, 197, 102, 0.2)',
            'rgba(238, 197, 102, 0.4)',
            'rgba(238, 197, 102, 0.6)',
            'rgba(238, 197, 102, 0.8)',
            'rgba(238, 197, 102, 1)'
          ].reverse()
        }
      },
      splitArea: {
        show: false
      },
      axisLine: {
        lineStyle: {
          color: 'rgba(238, 197, 102, 0.5)'
        }
      }
    },
    series: {
      type: 'radar',
      lineStyle: lineStyle,
      data: averagesByGenre,
      symbol: 'none',
      itemStyle: {
        color: '#F9713C'
      },
      emphasis: {
        lineStyle: {
          width: 4,
        },
        areaStyle: {
          color: 'rgba(0, 255, 0, 1)'
        }
      },
      areaStyle: {
        opacity: 0.2
      }
    }
  };

  return <ReactECharts option={options} style={{width: "1000px", height: "600px"}} />;
};

export default Radar;