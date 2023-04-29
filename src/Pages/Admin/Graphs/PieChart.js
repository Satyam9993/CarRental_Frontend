import React, { useState } from "react";
import { Pie } from "react-chartjs-2";
import { useSelector } from 'react-redux';
import 'chart.js/auto';

function PieChart() {

    // const Data = useSelector((state) => state.employees);
    // const statusData = [Data.filter(emp => emp.status === 'Full-Time').length, Data.filter(emp => emp.status === 'Remote Location').length, Data.filter(emp => emp.status === 'Contract Employee').length];   
    const [chartData, setChartData] = useState({
        labels: ['Full-Time', 'Remote Location', 'Contract Employee'],
        datasets: [
            {
                label: "Employee Type ",
                data: [10, 20, 30], //statusData,
                backgroundColor: [
                    "#50AF95",
                    "#f3ba2f",
                    "#2a71d0"
                ],
                borderColor: "white",
                borderWidth: 2
            }
        ]
    });

    return (
        <div>
            <p className="text-center text-white font-bold">Pie Chart</p>
            <Pie
                data={chartData}
                options={{
                    plugins: {
                        title: {
                            display: true,
                            text: "Employee Work Type"
                        }
                    }
                }}
            />
        </div>
    );
}
export default PieChart;