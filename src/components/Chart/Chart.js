import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
     
    const dataPointValues=props.dataPoints.map(dataPoint=>dataPoint.value);//Transformiramo ih iz objekata u brojeve za 12 mjeseci imat cemo 12 valueva
    const totalMax=Math.max(...dataPointValues);//Povuci sve array element i dodati ih kao samostalne argumente
    


  return <div className="chart">
    {props.dataPoints.map(dataPoint=>
    (<ChartBar 
        key={dataPoint.label}
        value={dataPoint.value}
        maxValue={totalMax}
        label={dataPoint.label}
    />
    ))}

  </div>
};
export default Chart;
