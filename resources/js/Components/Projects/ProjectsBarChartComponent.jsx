import React, { useState, useEffect } from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from "recharts";

const ProjectsBarChartComponent = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/api/getAllDataForMyProjects"); // Ändern Sie dies auf die vollständige URL, falls erforderlich.
                const projects = await response.json();
                setData(
                    projects.map((project) => {
                        const startDate = new Date(project.startDate);
                        const endDate = new Date(project.endDate);
                        const days =
                            (endDate - startDate) / (1000 * 60 * 60 * 24) + 1;

                        return {
                            name: project.name,
                            value: project.project_number,
                            start: project.startDate,
                            end: project.endDate,
                            days: days,
                        };
                    })
                );
            } catch (error) {
                console.error("Error fetching project data:", error);
            }
        };

        fetchData();
    }, []);

    const CustomTick = ({ x, y, payload }) => {
        const maxLength = 15; // Maximale Länge des Projektnamens
        const text =
            payload.value.length > maxLength
                ? payload.value.slice(0, maxLength) + "..."
                : payload.value;

        return (
            <text x={x} y={y} dy={16} textAnchor="middle" fill="#666">
                {text}
            </text>
        );
    };

    console.log(data[0]);

    return (
        <div>
            <h1 className="text-4xl font-semibold text-center text-blue-600 my-8">Projekt Statistiken</h1>
            <div className="flex justify-center items-center mt-8">
                <BarChart
                    width={900}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 50,
                        bottom: 50,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" tick={<CustomTick />} />
                    <YAxis dataKey="days" />
                    <Tooltip />
                    <Legend />
                    <Bar
                        dataKey="days"
                        fill="#8884d8"
                        barSize={30}
                        barGap={200}
                    />
                </BarChart>
            </div>
        </div>
    );
};

export default ProjectsBarChartComponent;
