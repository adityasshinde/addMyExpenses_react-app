import React from "react";
import './Chart.css';
import ChartBar from "./ChartBar";
const Chart=(props)=>{

    const dataPointsValues=props.dataPoints.map(dataPoint => dataPoint.value);
    console.log(dataPointsValues);
    const totalMaximum=Math.max(...dataPointsValues);
    console.log(totalMaximum);
return <div className="chart">
    {props.dataPoints.map(dataPoint=><ChartBar
     key={dataPoint.label}
    value={dataPoint.value} 
    maxValue={totalMaximum}
    label={dataPoint.label}></ChartBar>)}
</div>
};

export default Chart;