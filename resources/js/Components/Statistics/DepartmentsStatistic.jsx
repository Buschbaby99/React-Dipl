import React, { useState, useEffect } from "react";
import {
    BarChart,
    Bar,
    Cell,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

const cardStyle = {
    backgroundColor: "white",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    maxWidth: "90%",
    margin: "0 auto",
    marginTop: "10px",
    padding: "20px",
    position: "relative",
    marginBottom: "15px",
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

const DepartmentsStatistic = () => {
    const [departmentStatistic, setdepartmentStatistic] = useState([]);

    useEffect(() => {
        const fetchDepartmentData = async () => {
            try {
                const response = await fetch("/api/getAllDataFromPersons");
                const myData = await response.json();
                setdepartmentStatistic(myData);
            } catch (error) {
                console.error("Error fetching project data:", error);
            }
        };
        fetchDepartmentData();
    }, []);

    const countEmployeesByDepartment = (data) => {
        const departmentCounts = {};

        data.forEach((person) => {
            const department = person.department;

            if (departmentCounts[department]) {
                departmentCounts[department]++;
            } else {
                departmentCounts[department] = 1;
            }
        });

        return departmentCounts;
    };

    const departmentCounts = countEmployeesByDepartment(departmentStatistic);
    const chartData = Object.entries(departmentCounts).map(
        ([department, personenAnzahl]) => ({
            department,
            personenAnzahl,
        })
    );

    return (
        <div style={cardStyle}>
            <h1 style={cardTitleStyle}>Personen pro Abteilung</h1>
            <div style={chartContainerStyle}>
                <BarChart
                    width={1400}
                    height={500}
                    data={chartData}
                    margin={{
                        top: 1,
                        right: 30,
                        left: 50,
                        bottom: 130,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="department" angle={-45} textAnchor="end" />

                    <YAxis />
                    <Tooltip />
                    <Legend verticalAlign="top" height={70} />
                    <Bar
                        dataKey="personenAnzahl"
                        name="Personenanzahl"
                        fill="#8ee5ee"
                        barSize={30}
                        barGap={200}
                    />
                </BarChart>
            </div>
        </div>
    );
};

export default DepartmentsStatistic;
