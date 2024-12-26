import Chart1 from './chart1';
import Chart2 from './chart2';
import Heatmap from './heatmap';
import Radar from './radar';
import Scatter from './scatter';

export default function Home() {
  return (
    <div className="container" style={{margin: "auto auto", width: "2000px", height: "600px"}}>
      <div><Scatter /></div>
    </div>
  );
}