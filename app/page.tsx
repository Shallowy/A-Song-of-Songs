import Chart1 from './chart1';
import Chart2 from './chart2';
import Heatmap from './heatmap';

export default function Home() {
  return (
    <div className="container" style={{width: "1000px", height: "1000px"}}>
      <div style={{position: "absolute"}}> <Heatmap /> </div>
      <Chart2 />
    </div>
  );
}
