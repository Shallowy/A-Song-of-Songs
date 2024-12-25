'use client'
import { useEffect, useState } from 'react';
import * as d3 from 'd3';

const csvReader = () => {
	const [data, setData] = useState<{ 
		year: number;
		trackNumber: number;
		danceability: number;
		energy: number;
		loudness: number;
		speechiness: number;
		acousticness: number;
		instrumentalness: number;
		liveness: number;
		valence: number;
		tempo: number;
		popularity: number;
	}[]>([]);

	useEffect(() => {
		d3.csv('/top_10000_1950-now.csv').then((csvData) => {
			const parsedData = csvData.map((d) => ({
				year: +d['Album Release Date'].slice(0, 4),
				trackNumber: +d['Track Number'],
				danceability: +d['Danceability'],
				energy: +d['Energy'],
				loudness: +d['Loudness'],
				speechiness: +d['Speechiness'],
				acousticness: +d['Acousticness'],
				instrumentalness: +d['Instrumentalness'],
				liveness: +d['Liveness'],
				valence: +d['Valence'],
				tempo: +d['Tempo'],
				popularity: +d['Popularity'],
			}));
			setData(parsedData);
		});
	}, []);

	return data;
}

export default csvReader;