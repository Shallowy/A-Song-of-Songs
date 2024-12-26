'use client'
import React from 'react';
import ReactECharts from 'echarts-for-react';
import { csvReader1 } from './dataLoad';
import { line, symbol, text } from 'd3';
import { format } from 'path';
import { split } from 'postcss/lib/list';
import { color } from 'echarts';

const artistNum = 20;
const artists = ['Taylor Swift', 'P!nk', 'Elvis Presley', 'The Beatles', 'Ed Sheeran', 'U2', 'Madonna', 'The Rolling Stones', 'Queen', 'Katy Perry', 'Maroon 5', 'Michael Jackson', 'Bruno Mars', 'Elton John', 'Bon Jovi', 'Britney Spears', 'Justin Bieber', 'Lady Gaga', 'Bee Gees', 'Coldplay'];

const colors = ['#375673c0','#385774c0','#395874c0','#3a5975c0','#3b5a76c0','#3f5f7cc0','#496b8ac0','#537698c0','#5d82a6c0','#678eb4c0','#6c94bac0','#719abec0','#75a0c2c0','#7aa6c6c0','#7faccbc0','#87b3d1c0','#90bcd8c0','#97c3ddc0','#9ecae3c0','#a3cbe1c0','#a7ccdfc0','#accddec0','#b1cedcc0','#b5cfdac0','#b9cfd7c0','#bdced5c0','#c2ced3c0','#c6ced0c0','#c9cfcec0','#cdcfcbc0','#d1d0c9c0','#d5d1c7c0','#d9d1c4c0','#dbd1c1c0','#ddd2bfc0','#e0d2bdc0','#e2d2bac0','#e4d0b3c0','#e6cdabc0','#e7cba3c0','#e9c99cc0','#ebc896c0','#edc793c0','#eec690c0','#f0c58cc0','#f2c489c0','#f1c081c0','#efbd79c0','#eeb86fc0','#ecb467c0','#edb263c0','#edb061c0','#eeae60c0','#efad5ec0','#efaa5cc0','#e69e56c0','#dd9351c0','#d5884bc0','#cc7c45c0','#c6733fc0','#c16b38c0','#bd6332c0','#b85b2cc0','#b45326c0'];
// const offset = 0.2;

const getRandomOffset = (offset: number) => {
    return Math.random() * offset * 2 - offset;
};

const Scatter: React.FC = () => {
    const reader = csvReader1();
    let rawData = reader.map((d) => [
        d.year,
        d.author,
        d.trackName,
        d.valence,
        d.popularity
    ]);

    rawData = rawData.filter((d) => d[0] !== 0 && artists.includes(d[1] as string));
    rawData.sort((a, b) => (a[4] as number) - (b[4] as number));

    const data = rawData
        .map(function (item) {
            return [item[0] as number + getRandomOffset(0.25), artistNum - 1 - artists.indexOf(item[1] as string) + 1 + getRandomOffset(0.1), item[4], item[3], item[2]];
        });
    
    const options = {
      title: {
        text: 'Year & Artist & Popularity & Valence',
        left: 'center',
        textStyle: {
          color: 'rgb(240, 240, 240)',
          weight: 'bold'
        },
        top: -1
      },
      legend: {
        show: false,
        // data: ['Punch Card'],
        // left: 'right'
      },
      backgroundColor: "rgb(222, 222, 222, 0)",
      textStyle: {
        color: 'white',
        weight: 'bold'
      },
      tooltip: {
        show: true,
        position: 'left',
        formatter: function (params: any) {
            return params.value[4] + '<br>' + 'Year: ' + Math.round(params.value[0]);
        }
      },
      grid: {
        left: 2,
        top: 50,
        bottom: 10,
        right: 20,
        containLabel: true
      },
      xAxis: {
        type: 'value',
        min: 1950,
        max: 2025,
        boundaryGap: true,
        interval: 10,
        axisTick: {
            show: true,
        },
        splitLine: {
          show: false
        },
        axisLine: {
          show: true
        }
      },
      yAxis: {
        type: 'value',
        // data: artists,
        boundaryGap: true,
        min: 0,
        max: artists.length,
        interval: 1,
        splitLine: {
          show: true,
          interval: 0,
          lineStyle: {
            width: 2,
          }
        },
        minorTick: {
            show: false,
            splitNumber: 2
        },
        minorSplitLine: {
            show: false
        },
        axisLabel: {
            formatter: function (value: any) {
                return artists[artistNum - value];
            }
        },
        axisTick: {
            show: true,
            interval: 0,
            alignWithLabel: true,
            lineStyle: {
                color: 'white',
            }
        },
        axisLine: {
          show: false
        }
      },
      series: [
        {
          name: 'Songs',
          type: 'scatter',
          symbol: 'circle',
          colorBy: 'data',
          symbolSize: function (val: any) {
            return Math.exp(val[2] / 20) / 1.05;
          },
          itemStyle: {
            color: function (params: { data: any }) {
                return colors[Math.floor(params.data[3] * (colors.length - 1))];
            }
          },
          data: data,
        }
      ],
    };

  

    return <ReactECharts option={options} style={{width: "1400px", height: "800px"}} />;
};

export default Scatter;