'use client'
import React from 'react';
import ReactECharts from 'echarts-for-react';


const Heatmap: React.FC = () => {
    const data = [[9, 0, 1.0], [8, 0, 0.13], [8, 1, 1.0], [7, 0, 0.09], [7, 1, 0.68], [7, 2, 1.0], [6, 0, 0.14], [6, 1, 0.16], [6, 2, 0.14], [6, 3, 1.0], [5, 0, -0.2], [5, 1, -0.63], [5, 2, -0.45], [5, 3, -0.1], [5, 4, 1.0], [4, 0, 0.01], [4, 1, 0.04], [4, 2, -0.1], [4, 3, -0.03], [4, 4, -0.03], [4, 5, 1.0], [3, 0, -0.09], [3, 1, 0.14], [3, 2, 0.06], [3, 3, 0.09], [3, 4, -0.02], [3, 5, 0.00], [3, 6, 1.0], [2, 0, 0.44], [2, 1, 0.29], [2, 2, 0.01], [2, 3, 0.05], [2, 4, -0.13], [2, 5, 0.01], [2, 6, 0.03], [2, 7, 1.0], [1, 0, -0.18], [1, 1, 0.18], [1, 2, 0.1], [1, 3, 0.09], [1, 4, -0.11], [1, 5, 0.04], [1, 6, 0.03], [1, 7, 0.06], [1, 8, 1.0], [0, 0, 0.05], [0, 1, 0.01], [0, 2, 0.04], [0, 3, 0.02], [0, 4, -0.03], [0, 5, -0.04], [0, 6, -0.03], [0, 7, -0.01], [0, 8, -0.01], [0, 9, 1.0]]
        .map(function (item) {
            return [item[1], item[0], item[2]];
        });
    
    const options = {
        gradientColor: ['#375673','#385774','#395874','#3a5975','#3b5a76','#3f5f7c','#496b8a','#537698','#5d82a6','#678eb4','#6c94ba','#719abe','#75a0c2','#7aa6c6','#7faccb','#87b3d1','#90bcd8','#97c3dd','#9ecae3','#a3cbe1','#a7ccdf','#accdde','#b1cedc','#b5cfda','#b9cfd7','#bdced5','#c2ced3','#c6ced0','#c9cfce','#cdcfcb','#d1d0c9','#d5d1c7','#d9d1c4','#dbd1c1','#ddd2bf','#e0d2bd','#e2d2ba','#e4d0b3','#e6cdab','#e7cba3','#e9c99c','#ebc896','#edc793','#eec690','#f0c58c','#f2c489','#f1c081','#efbd79','#eeb86f','#ecb467','#edb263','#edb061','#eeae60','#efad5e','#efaa5c','#e69e56','#dd9351','#d5884b','#cc7c45','#c6733f','#c16b38','#bd6332','#b85b2c','#b45326'],
        tooltip: {
            position: 'top'
        },
        grid: {
            height: '70%',
            width: '70%',
            left: '15%',
            top: '1%'
        },
        xAxis: {
            type: 'category',
            axisLabel: {
                show: false
            }
        },
        yAxis: {
            type: 'category',
            inverse: true,
            axisLabel: {
                show: false
            }
        },
        visualMap: {
            type: 'continuous',
            min: -1,
            max: 1,
            calculable: true,
            orient: 'vertical',
            top: 'center',
            right: 0,
        },
        series: [
            {
            name: 'Punch Card',
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

    return <ReactECharts option={options} style={{width: "1000px", height: "1000px"}} />;
}

export default Heatmap;