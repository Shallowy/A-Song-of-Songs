import Chart1 from './chart1';
import Chart2 from './chart2';
import Heatmap from './heatmap';
import Radar from './radar';

export default function Home() {
  return (
    <div className="container" style={{margin: "auto auto", width: "1000px", height: "600px"}}>
      <div><Radar /></div>
    </div>
  );
}