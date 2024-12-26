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
    case 'hip hop': return 6;
    case 'reggae': return 7;
    default: return 0;
  }
};

const Radar: React.FC = () => {
  const data = csvReader2();

  const getAveragesByGenre = () => {
    const GenreGroups = data.reduce((acc, {
      genre,
      danceability,
      loudness,
      acousticness,
      instrumentalness,
      valence,
      energy,
    }) => {
      const index = genreFromString(genre);
      if (index === 0) {
        return acc;
      }
      if (!acc[index]) {
        acc[index] = {
          totalDanceability: 0,
          totalLoudness: 0,
          totalAcousticness: 0,
          totalInstrumentalness: 0,
          totalValence: 0,
          totalEnergy: 0,
          count: 0
        };
      }
      acc[index].totalDanceability += danceability;
      acc[index].totalLoudness += loudness;
      acc[index].totalAcousticness += acousticness;
      acc[index].totalInstrumentalness += instrumentalness;
      acc[index].totalValence += valence;
      acc[index].totalEnergy += energy;
      acc[index].count += 1;
      return acc;
    }, {} as Record<number, {
      totalDanceability: number,
      totalLoudness: number,
      totalAcousticness: number,
      totalInstrumentalness: number,
      totalValence: number,
      totalEnergy: number,
      count: number
    }>);

    const averages = Object.entries(GenreGroups).map(([genre, {
      totalDanceability,
      totalLoudness,
      totalAcousticness,
      totalInstrumentalness,
      totalValence,
      totalEnergy,
      count
    }]) => {
      return [
        totalDanceability / count,
        totalLoudness / count,
        totalAcousticness / count,
        totalInstrumentalness / count,
        totalValence / count,
        totalEnergy / count
      ];
    });

    return averages;
  };

  const averagesByGenre = getAveragesByGenre();

  console.log(averagesByGenre);

  const lineStyle = {
    width: 1,
    opacity: 0.5
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
    legend: {
      bottom: 5,
      data: ['Pop', 'Country', 'Blues', 'Rock', 'Jazz', 'Hip Hop', 'Reggae'],
      itemGap: 30,
      textStyle: {
        color: '#eee',
        fontSize: 20
      },
      selectedMode: 'multiple'
    },
    radar: {
      indicator: [
        { name: 'Danceability', max: 0.8 },
        { name: 'Loudness', max: 0.8 },
        { name: 'Acousticness', max: 0.8 },
        { name: 'Instrumentalness', max: 0.8 },
        { name: 'Valence', max: 0.8 },
        { name: 'Energy', max: 0.8 }
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
      data: [
        {
          value: averagesByGenre[0],
          name: 'Pop',
          itemStyle: {
            color: '#FF0000'
          },
        }, {
          value: averagesByGenre[1],
          name: 'Country',
          itemStyle: {
            color: '#FF8800'
          },
        }, {
          value: averagesByGenre[2],
          name: 'Blues',
          itemStyle: {
            color: '#FFFF00'
          },
        }, {
          value: averagesByGenre[3],
          name: 'Rock',
          itemStyle: {
            color: '#888800'
          },
        }, {
          value: averagesByGenre[4],
          name: 'Jazz',
          itemStyle: {
            color: '#00FF00'
          },
        }, {
          value: averagesByGenre[5],
          name: 'Hip Hop',
          itemStyle: {
            color: '#00FFFF'
          },
        }, {
          value: averagesByGenre[6],
          name: 'Reggae',
          itemStyle: {
            color: '#0000FF'
          },
        }
      ],
      symbol: 'none',
      itemStyle: {
        color: '#F9713C'
      },
      emphasis: {
        lineStyle: {
          width: 4,
          opacity: 0.9
        },
        areaStyle: {
          opacity: 0.5
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