'use client'
import * as echarts from 'echarts';
import 'echarts-wordcloud';
import React, { useEffect } from 'react';
import { data1, data2, data3, data4, data5, data6, data7, data8 } from '../public/data';

export const Cloud1: React.FC = () => {
  const data = data1

  useEffect(() => {
    const chartDom = document.getElementById('chart')!;
    const myChart = echarts.init(chartDom);

    const option = {
      series: {
        type: 'wordCloud',
        shape: 'circle',
        gridSize: 10,
        data: data,
        color: 'rgb(27, 86, 118)',
      },
      backgroundColor: 'rgba(154, 113, 32, 0.51)',
      title: {
        text: 'romantic',
        left: 'center',
        top: 0,
        textStyle: {
          fontSize: 30,
          color: 'white',
        }
      }
    };

    myChart.setOption(option);
  }, []);

  return <div id="chart" style={{ width: 600, height: 400 }}></div>;
}

export const Cloud2: React.FC = () => {
  const data = data2

  useEffect(() => {
    const chartDom = document.getElementById('chart')!;
    const myChart = echarts.init(chartDom);

    const option = {
      series: {
        type: 'wordCloud',
        shape: 'circle',
        gridSize: 10,
        data: data,
        color: 'rgb(27, 86, 118)',
      },
      backgroundColor: 'rgba(154, 113, 32, 0.51)',
      title: {
        text: 'violence',
        left: 'center',
        top: 0,
        textStyle: {
          fontSize: 30,
          color: 'white',
        }
      }
    };

    myChart.setOption(option);
  }, []);

  return <div id="chart" style={{ width: 600, height: 400 }}></div>;
}

export const Cloud3: React.FC = () => {
  const data = data3

  useEffect(() => {
    const chartDom = document.getElementById('chart')!;
    const myChart = echarts.init(chartDom);

    const option = {
      series: {
        type: 'wordCloud',
        shape: 'circle',
        gridSize: 10,
        data: data,
        color: 'rgb(27, 86, 118)',
      },
      backgroundColor: 'rgba(154, 113, 32, 0.51)',
      title: {
        text: 'world/life',
        left: 'center',
        top: 0,
        textStyle: {
          fontSize: 30,
          color: 'white',
        }
      }
    };

    myChart.setOption(option);
  }, []);

  return <div id="chart" style={{ width: 600, height: 400 }}></div>;
}

export const Cloud4: React.FC = () => {
  const data = data4

  useEffect(() => {
    const chartDom = document.getElementById('chart')!;
    const myChart = echarts.init(chartDom);

    const option = {
      series: {
        type: 'wordCloud',
        shape: 'circle',
        gridSize: 10,
        data: data,
        color: 'rgb(27, 86, 118)',
      },
      backgroundColor: 'rgba(154, 113, 32, 0.51)',
      title: {
        text: 'obscene',
        left: 'center',
        top: 0,
        textStyle: {
          fontSize: 30,
          color: 'white',
        }
      }
    };

    myChart.setOption(option);
  }, []);

  return <div id="chart" style={{ width: 600, height: 400 }}></div>;
}

export const Cloud5: React.FC = () => {
  const data = data5

  useEffect(() => {
    const chartDom = document.getElementById('chart')!;
    const myChart = echarts.init(chartDom);

    const option = {
      series: {
        type: 'wordCloud',
        shape: 'circle',
        gridSize: 10,
        data: data,
        color: 'rgb(27, 86, 118)',
      },
      backgroundColor: 'rgba(154, 113, 32, 0.51)',
      title: {
        text: 'music',
        left: 'center',
        top: 0,
        textStyle: {
          fontSize: 30,
          color: 'white',
        }
      }
    };

    myChart.setOption(option);
  }, []);

  return <div id="chart" style={{ width: 600, height: 400 }}></div>;
}

export const Cloud6: React.FC = () => {
  const data = data6

  useEffect(() => {
    const chartDom = document.getElementById('chart')!;
    const myChart = echarts.init(chartDom);

    const option = {
      series: {
        type: 'wordCloud',
        shape: 'circle',
        gridSize: 10,
        data: data,
        color: 'rgb(27, 86, 118)',
      },
      backgroundColor: 'rgba(154, 113, 32, 0.51)',
      title: {
        text: 'sadness',
        left: 'center',
        top: 0,
        textStyle: {
          fontSize: 30,
          color: 'white',
        }
      }
    };

    myChart.setOption(option);
  }, []);

  return <div id="chart" style={{ width: 600, height: 400 }}></div>;
}

export const Cloud7: React.FC = () => {
  const data = data7

  useEffect(() => {
    const chartDom = document.getElementById('chart')!;
    const myChart = echarts.init(chartDom);

    const option = {
      series: {
        type: 'wordCloud',
        shape: 'circle',
        gridSize: 10,
        data: data,
        color: 'rgb(27, 86, 118)',
      },
      backgroundColor: 'rgba(154, 113, 32, 0.51)',
      title: {
        text: 'feelings',
        left: 'center',
        top: 0,
        textStyle: {
          fontSize: 30,
          color: 'white',
        }
      }
    };

    myChart.setOption(option);
  }, []);

  return <div id="chart" style={{ width: 600, height: 400 }}></div>;
}

export const Cloud8: React.FC = () => {
  const data = data8

  useEffect(() => {
    const chartDom = document.getElementById('chart')!;
    const myChart = echarts.init(chartDom);

    const option = {
      series: {
        type: 'wordCloud',
        shape: 'circle',
        gridSize: 10,
        data: data,
        color: 'rgb(27, 86, 118)',
      },
      backgroundColor: 'rgba(154, 113, 32, 0.51)',
      title: {
        text: 'night/time',
        left: 'center',
        top: 0,
        textStyle: {
          fontSize: 30,
          color: 'white',
        }
      }
    };

    myChart.setOption(option);
  }, []);

  return <div id="chart" style={{ width: 600, height: 400 }}></div>;
}