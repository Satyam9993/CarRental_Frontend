import React, { useRef, useState } from "react";
import { Line } from "react-chartjs-2";
//import { useSelector } from "react-redux";
import 'chart.js/auto';

function LineChart() {
    const ref = useRef();
    const [chartData, setChartData] = useState({
        labels: ['Jan', 'Fab', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: "Users Gained ",
                data: [1,2,3,4,5,6,7,8,9,10,11,12],
                backgroundColor: [
                    "#f3ba2f",
                    "#50AF95",
                    "#2a71d0",
                    "rgba(75,192,192,1)",
                    "&quot;#ecf0f1"
                ],
                borderColor: "white",
                borderWidth: 2
            }
        ]
    });

    return (
        <div>
            <p className="text-center text-white font-bold">Line Graph</p>
            <Line
                data={chartData}
                ref={ref}
                options={{
                    plugins: {
                        title: {
                            display: true,
                            text: "Employee Added per month this year(2023)"
                        },
                        legend: {
                            display: false
                        }
                    }
                }}
            />
        </div>
    );
}
export default LineChart;