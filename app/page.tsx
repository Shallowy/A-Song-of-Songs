'use client'

import { useState, useEffect } from 'react';
import Chart1 from './chart1';
import Chart2 from './chart2';
import Heatmap from './heatmap';
import Radar from './radar';
import Scatter from './scatter';
import './styles.css'; // Import the CSS file

const sections = [
  { title: 'Scatter Chart', component: <Scatter /> },
  { title: 'Heatmap', component: <Heatmap /> },
  { title: 'Radar Chart', component: <Radar /> },
  { title: 'Chart 1', component: <Chart1 /> },
  { title: 'Chart 2', component: <Chart2 /> },
];

export default function Home() {
  const [currentSection, setCurrentSection] = useState(0);
  const [direction, setDirection] = useState('next');

  const nextPage = () => {
    setDirection('next');
    setCurrentSection((prevSection: number) => (prevSection + 1) % sections.length);
  };

  const prevPage = () => {
    setDirection('prev');
    setCurrentSection((prevSection: number) => (prevSection - 1 + sections.length) % sections.length);
  };

  const debounce = (func: Function, delay: number) => {
    let timeoutId: NodeJS.Timeout;
    return (...args: any[]) => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  useEffect(() => {
    const handleWheel = debounce((event: WheelEvent) => {
      if (event.deltaY > 0) {
        nextPage();
      } else {
        prevPage();
      }
    }, 100); // Adjust the delay as needed

    window.addEventListener('wheel', handleWheel);
    return () => window.removeEventListener('wheel', handleWheel);
}, []);

  return (
    <div className="container" style={{textAlign: "center" }}>
      {/* <header style={{top: 0, width: '100%', height: '80px', backgroundColor: 'white' }}>
        <h1>My Header</h1>
      </header> */}
      <div style={{ bottom: 0 }}>
        <section
        className={`slide-${direction} ${currentSection === 0 ? `slide-${direction}-active` : ''}`}
        style={{ transform: `translateY(${(0 - currentSection) * 100}%)`, backgroundImage: `url(images/cover.jpg)` }}
        >
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100vh" }}>
            <h1 style={{ color: "white", fontSize: "4em", fontFamily: "Arial, sans-serif" }}>A Song of Songs</h1>
          <p style={{ marginTop: "1%", color: "white", fontSize: "1.1em", fontFamily: "'Open Sans', sans-serif" }}>
            A Music Data Visualization
          </p>
            <button 
            onClick={nextPage} 
            style={{ 
              // backgroundColor: "rgba(255, 255, 255, 0.5)", 
              color: "rgb(255, 255, 255, 0.5)", 
              padding: "10px 20px", 
              border: "none", 
              borderRadius: "80%", 
              cursor: "pointer", 
              position: "absolute", 
              bottom: "50px" 
            }}
            >
            Scroll to Start
            </button>
        </div>
        </section>
        <section
        className={`slide-${direction} ${currentSection === 1 ? `slide-${direction}-active` : ''}`}
        style={{ transform: `translateY(${(1 - currentSection) * 100}%)`, backgroundImage: `url(images/one.jpg)`, backgroundSize: "cover" }}
        >
            <div style={{ flex: 1, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", height: "100%" }}>
            <div style={{ width: "40%", height: "100%", padding: "20px", boxSizing: "border-box" }}>
              <h2 style={{ color: "white", fontSize: "2.5em", fontFamily: "Arial, sans-serif", marginTop: "20%", marginBottom: "20px", textAlign: "center", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>Association Between Data Feature Labels</h2>
              <ul style={{ color: "white", fontSize: "1.2em", fontFamily: "'Open Sans', sans-serif", listStyleType: "none", padding: 0, marginTop: 40, lineHeight: "1.6" }}>
              <li style={{ marginBottom: "10px" }}><strong>Danceability : </strong> How suitable a track is for dancing</li>
              <li style={{ marginBottom: "10px" }}><strong>Energy :</strong> Measures intensity and activity of music</li>
              <li style={{ marginBottom: "10px" }}><strong>Loudness :</strong> The average loudness in decibels (dB)</li>
              <li style={{ marginBottom: "10px" }}><strong>Speechiness :</strong> Measures the presence of spoken words</li>
              <li style={{ marginBottom: "10px" }}><strong>Acousticness :</strong> Presence of acoustic instruments</li>
              <li style={{ marginBottom: "10px" }}><strong>Instrumentalness :</strong> Whether a track contains fewer vocals</li>
              <li style={{ marginBottom: "10px" }}><strong>Liveness :</strong> The presence of an audience in the recording</li>
              <li style={{ marginBottom: "10px" }}><strong>Valence :</strong> The musical positiveness conveyed by a track</li>
              <li style={{ marginBottom: "10px" }}><strong>Tempo :</strong> The speed or pace, measured in BPM</li>
              <li style={{ marginBottom: "10px" }}><strong>Popularity :</strong> How popular a track is </li>
              </ul>
            </div>
            <div style={{ alignSelf: "flex-start", height: "60%", width: "60%"}}>
              <div style={{ position: "absolute", marginLeft: "2%", top: "5%", height: "100%", width: "100%"}}><Chart2 /></div>
              <div style={{ position: "absolute", marginLeft: "2%", opacity: 0.9, top: "5%", height: "100%", width: "100%" }}><Heatmap /></div>
            </div>
            </div>
        </section>
        <section
        className={`slide-${direction} ${currentSection === 2 ? `slide-${direction}-active` : ''}`}
        style={{ transform: `translateY(${(2 - currentSection) * 100}%)`, backgroundImage: `url(images/three.jpg)`, backgroundSize: "cover" }}
        >
          <h2 style={{ 
            position: "absolute", 
            top: "12%", 
            left: "50%", 
            width: "60%",
            transform: "translateX(-50%)", 
            color: "white", 
            fontSize: "2.5em", 
            fontFamily: "Arial, sans-serif", 
            textAlign: "center", 
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" 
          }}>
            Changes in Average Values of Data Feature Labels from 1955 to 2024
          </h2>
          <div style={{ flex: 1, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: "13%", height: "100%", width: "100%" }}>
            <Chart1 />
          </div>
        </section>
        <section
        className={`slide-${direction} ${currentSection === 3 ? `slide-${direction}-active` : ''}`}
        style={{ transform: `translateY(${(3 - currentSection) * 100}%)`, backgroundImage: `url(images/one.jpg)`, backgroundSize: "cover" }}
        >
          <div style={{ flex: 1, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", paddingTop: "0%", height: "100%", width: "100%" }}>
            <Scatter />
          </div>
        </section>
        <section
        className={`slide-${direction} ${currentSection === 4 ? `slide-${direction}-active` : ''}`}
        style={{ transform: `translateY(${(4 - currentSection) * 100}%)`, backgroundImage: `url(images/three.jpg)`, backgroundSize: "cover" }}
        >
            <h2 style={{ 
            position: "absolute", 
            top: "9%", 
            left: "50%", 
            width: "70%",
            transform: "translateX(-50%)", 
            color: "white", 
            fontSize: "2.5em", 
            fontFamily: "Arial, sans-serif", 
            textAlign: "center", 
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" 
            }}>
            Analysis of Characteristics of Songs from Different Genres
            </h2>
          <div style={{ flex: 1, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", paddingTop: "4%", height: "100%", width: "100%" }}>
            <Radar />
          </div>
        </section>
      </div>
    </div>
  );
}