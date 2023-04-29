import React, { useState } from 'react'
import { Bar } from "react-chartjs-2";
import { useSelector } from 'react-redux';
import 'chart.js/auto';

const BarGraph = () => {
    
    const calculateFrequency=(arr)=> {
        const frequency = {};
        for (let i = 0; i < arr.length; i++) {
            if (frequency[arr[i].department.toLowerCase()]) {
                frequency[arr[i].department.toLowerCase()]++;
            } else {
                frequency[arr[i].department.toLowerCase()] = 1;
            }
        }
        return frequency;
    }
    // const Data = useSelector((state) => state.employees);
    // const freq = calculateFrequency(Data);
    // const Datakeys = Object.keys(freq);
    // const Datavalues = Object.values(freq);

    const [chartData, setChartData] = useState({
        labels: ["1", "2", "3"],//Datakeys, 
        datasets: [
          {
            label: "Users Gained ",
            data: [1,2,3],//Datavalues,
            backgroundColor: [
                "#f3ba2f",
                "#50AF95",
                "#2a71d0",
                "rgba(75,192,192,1)",
                "&quot;#ecf0f1"
            ],
            borderColor: "black",
            borderWidth: 2
          }
        ]
      });

    return (
        <div>
            <p className="text-center text-white font-bold">Bar Graph</p>
            <Bar
                data={chartData}
                options={{
                    plugins: {
                        title: {
                            display: true,
                            text: "Number of Employee in Various Departments"
                        },
                        legend: {
                            display: false
                        }
                    },
                    barThickness : 40
                }}
            />
        </div>
    );
}

export default BarGraph