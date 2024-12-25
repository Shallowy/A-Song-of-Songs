'use client'
import React from 'react';
import ReactECharts from 'echarts-for-react';
import { csvReader2 } from './dataLoad';

interface RadarProps {
  searchQuery: string;
}

const Radar: React.FC<RadarProps> = ({ searchQuery }) => {
  const data = csvReader2();

	let dataMap = data.map((d) => [
		d.year,
		d.author,
		d.trackName,
		d.genre,
		d.lyrics,
		d.topic,
		d.romantic,
		d.violence,
		d.world_life,
		d.shake_the_audience,
		d.family,
		d.obscene,
		d.music,
		d.sadness,
		d.feelings,
	]);

	if (searchQuery) {
		dataMap = dataMap.filter((d) => d[1].toString().toLowerCase().includes(searchQuery.toLowerCase()));
	} else {
		dataMap = [];
	}

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
      data: dataMap.map((d) => (d.slice(6))),
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