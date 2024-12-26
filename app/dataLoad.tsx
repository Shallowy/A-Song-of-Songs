'use client'
import { useEffect, useState } from 'react';
import * as d3 from 'd3';

export const csvReader1 = () => {
	const [data, setData] = useState<{
		year: number;
		trackNumber: number;
		author: string;
		trackName: string;
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
				author: d['Artist Name(s)'],
				trackName: d['Track Name'],
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

export const csvReader2 = () => {
	const [data, setData] = useState<{
		year: number;
		author: string;
		trackName: string;
		genre: string;
		lyrics: string;
		topic: string;
		romantic: number;
		violence: number;
		world_life: number;
		shake_the_audience: number;
		family: number;
		obscene: number;
		music: number;
		sadness: number;
		feelings: number;
		danceability: number;
		loudness: number;
		acousticness: number;
		instrumentalness: number;
		valence: number;
		energy: number;
	}[]>([]);

	useEffect(() => {
		d3.csv('/tcc_ceds_music.csv').then((csvData) => {
			const parsedData = csvData.map((d) => ({
				year: +d['release_date'],
				author: d['artist_name'],
				trackName: d['track_name'],
				genre: d['genre'],
				lyrics: d['lyrics'],
				topic: d['topic'],
				romantic: +d['romantic'],
				violence: +d['violence'],
				world_life: +d['world/life'],
				shake_the_audience: +d['shake the audience'],
				family: +d['family/gospel'],
				obscene: +d['obscene'],
				music: +d['music'],
				sadness: +d['sadness'],
				feelings: +d['feelings'],
				danceability: +d['danceability'],
				loudness: +d['loudness'],
				acousticness: +d['acousticness'],
				instrumentalness: +d['instrumentalness'],
				valence: +d['valence'],
				energy: +d['energy'],
			}));
			setData(parsedData);
		});
	}, []);

	// console.log(data);

	return data;
}