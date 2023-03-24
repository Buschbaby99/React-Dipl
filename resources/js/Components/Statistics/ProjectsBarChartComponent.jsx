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

const cardStyle = {
    backgroundColor: "white",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    maxWidth: "90%",
    margin: "0 auto",
    padding: "20px",
    position: "relative",
    marginBottom: "15px",
    marginTop: "15px",
};

const cardTitleStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
    textAlign: "center",
    color: "#333",
};

const chartContainerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
};

const ProjectsBarChartComponent = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/api/getAllDataForMyProjects");
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

    return (
        <div>
            <div style={cardStyle}>
                <h1 style={cardTitleStyle}>Projekt Statistiken</h1>
                <div style={chartContainerStyle}>
                    <BarChart
                        width={1400}
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
        </div>
    );
};

export default ProjectsBarChartComponent;
