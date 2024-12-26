'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var echarts_for_react_1 = require("echarts-for-react");
var dataLoad_1 = require("./dataLoad");
var Chart1 = function () {
    var data = (0, dataLoad_1.csvReader1)();
    var getAveragesByYear = function () {
        var yearGroups = data.reduce(function (acc, _a) {
            var year = _a.year, danceability = _a.danceability, energy = _a.energy, speechiness = _a.speechiness, acousticness = _a.acousticness, instrumentalness = _a.instrumentalness, liveness = _a.liveness, valence = _a.valence, popularity = _a.popularity;
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
        }, {});
        var averages = Object.entries(yearGroups).map(function (_a) {
            var year = _a[0], _b = _a[1], totalDanceability = _b.totalDanceability, totalEnergy = _b.totalEnergy, totalSpeechiness = _b.totalSpeechiness, totalAcousticness = _b.totalAcousticness, totalInstrumentalness = _b.totalInstrumentalness, totalLiveness = _b.totalLiveness, totalValence = _b.totalValence, totalPopularity = _b.totalPopularity, count = _b.count;
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
    var averagesByYear = getAveragesByYear();
    // console.log(averagesByYear.map(d => d.year));
    var options = {
        grid: { top: 50, right: 8, left: 36, width: '70%', height: '50%' },
        xAxis: {
            type: 'category',
            data: averagesByYear.map(function (d) { return d.year; }),
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
                data: averagesByYear.map(function (d) { return d.avgDanceability; }),
                type: 'line',
                symbol: 'none',
                areaStyle: {},
                smooth: true,
            }, {
                name: 'Energy',
                data: averagesByYear.map(function (d) { return d.avgEnergy; }),
                type: 'line',
                symbol: 'none',
                areaStyle: {},
                smooth: true,
            }, {
                name: 'Speechiness',
                data: averagesByYear.map(function (d) { return d.avgSpeechiness; }),
                type: 'line',
                symbol: 'none',
                areaStyle: {},
                smooth: true,
            }, {
                name: 'Acousticness',
                data: averagesByYear.map(function (d) { return d.avgAcousticness; }),
                type: 'line',
                symbol: 'none',
                areaStyle: {},
                smooth: true,
            }, {
                name: 'Instrumentalness',
                data: averagesByYear.map(function (d) { return d.avgInstrumentalness; }),
                type: 'line',
                symbol: 'none',
                areaStyle: {},
                smooth: true,
            }, {
                name: 'Liveness',
                data: averagesByYear.map(function (d) { return d.avgLiveness; }),
                type: 'line',
                symbol: 'none',
                areaStyle: {},
                smooth: true,
            }, {
                name: 'Valence',
                data: averagesByYear.map(function (d) { return d.avgValence; }),
                type: 'line',
                symbol: 'none',
                areaStyle: {},
                smooth: true,
            }, {
                name: 'Popularity',
                data: averagesByYear.map(function (d) { return d.avgPopularity; }),
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
    return <echarts_for_react_1.default option={options} style={{ width: "600px", height: "600px" }}/>;
};
exports.default = Chart1;
