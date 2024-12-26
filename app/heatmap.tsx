'use client'
import React from 'react';
import ReactECharts from 'echarts-for-react';
import { ItemStyleMixin } from 'echarts/types/src/model/mixin/itemStyle.js';
import { text } from 'd3';


const Heatmap: React.FC = () => {
    const data = [[9, 0, 1.0], [8, 0, 0.13], [8, 1, 1.0], [7, 0, 0.09], [7, 1, 0.68], [7, 2, 1.0], [6, 0, 0.14], [6, 1, 0.16], [6, 2, 0.14], [6, 3, 1.0], [5, 0, -0.2], [5, 1, -0.63], [5, 2, -0.45], [5, 3, -0.1], [5, 4, 1.0], [4, 0, 0.01], [4, 1, 0.04], [4, 2, -0.1], [4, 3, -0.03], [4, 4, -0.03], [4, 5, 1.0], [3, 0, -0.09], [3, 1, 0.14], [3, 2, 0.06], [3, 3, 0.09], [3, 4, -0.02], [3, 5, 0.00], [3, 6, 1.0], [2, 0, 0.44], [2, 1, 0.29], [2, 2, 0.01], [2, 3, 0.05], [2, 4, -0.13], [2, 5, 0.01], [2, 6, 0.03], [2, 7, 1.0], [1, 0, -0.18], [1, 1, 0.18], [1, 2, 0.1], [1, 3, 0.09], [1, 4, -0.11], [1, 5, 0.04], [1, 6, 0.03], [1, 7, 0.06], [1, 8, 1.0], [0, 0, 0.05], [0, 1, 0.01], [0, 2, 0.04], [0, 3, 0.02], [0, 4, -0.03], [0, 5, -0.04], [0, 6, -0.03], [0, 7, -0.01], [0, 8, -0.01], [0, 9, 1.0]]
        .map(function (item) {
            return [item[1], item[0], item[2]];
        });
    
    const options = {
        gradientColor: ['#375673c0','#385774c0','#395874c0','#3a5975c0','#3b5a76c0','#3f5f7cc0','#496b8ac0','#537698c0','#5d82a6c0','#678eb4c0','#6c94bac0','#719abec0','#75a0c2c0','#7aa6c6c0','#7faccbc0','#87b3d1c0','#90bcd8c0','#97c3ddc0','#9ecae3c0','#a3cbe1c0','#a7ccdfc0','#accddec0','#b1cedcc0','#b5cfdac0','#b9cfd7c0','#bdced5c0','#c2ced3c0','#c6ced0c0','#c9cfcec0','#cdcfcbc0','#d1d0c9c0','#d5d1c7c0','#d9d1c4c0','#dbd1c1c0','#ddd2bfc0','#e0d2bdc0','#e2d2bac0','#e4d0b3c0','#e6cdabc0','#e7cba3c0','#e9c99cc0','#ebc896c0','#edc793c0','#eec690c0','#f0c58cc0','#f2c489c0','#f1c081c0','#efbd79c0','#eeb86fc0','#ecb467c0','#edb263c0','#edb061c0','#eeae60c0','#efad5ec0','#efaa5cc0','#e69e56c0','#dd9351c0','#d5884bc0','#cc7c45c0','#c6733fc0','#c16b38c0','#bd6332c0','#b85b2cc0','#b45326c0'],
        tooltip: {
            position: 'top'
        },
        grid: {
            height: '80%',
            width: '80%',
            left: '18%',
            top: '1%'
        },
        xAxis: {
            type: 'category',
            axisLabel: {
                show: false
            },
            axisTick: {
                show: false
            }
        },
        yAxis: {
            type: 'category',
            inverse: true,
            axisLabel: {
                show: false
            },
            axisTick: {
                show: false
            }
        },
        visualMap: {
            type: 'continuous',
            min: -0.98,
            max: 1.02,
            calculable: true,
            orient: 'vertical',
            top: 'center',
            right: 0,
            textStyle: {
                color: 'white'
            }
        },
        series: [
            {
            name: 'Correlation',
            type: 'heatmap',
            data: data,
            label: {
                show: false
            },
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
            }
        ]
    };

    return <ReactECharts option={options} style={{width: "800px", height: "800px"}} />;
}

export default Heatmap;