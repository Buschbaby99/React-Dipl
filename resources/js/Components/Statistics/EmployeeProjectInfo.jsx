import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
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

const datePickerStyle = {
    display: "flex",
    justifyContent: "center",
    marginBottom: "20px",
  };
  

const cardStyle = {
    backgroundColor: "white",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    maxWidth: "90%",
    margin: "0 auto",
    padding: "20px",
    position: "relative",
    
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

const EmployeeProjectInfo = () => {
    const [employeeProjectData, setEmployeeProjectData] = useState([]);
    const [selectedDate, setSelectedDate] = useState(new Date());

    useEffect(() => {
        const fetchEmployeeProjectData = async () => {
            try {
                const response = await fetch("/api/forMyPersonsStatistic");
                const myData = await response.json();
                setEmployeeProjectData(
                    myData.map((myData) => {
                        const startDate = new Date(myData.startDate);
                        const endDate = new Date(myData.endDate);
                        const days =
                            (endDate - startDate) / (1000 * 60 * 60 * 24) + 1;

                        const selectedYear = selectedDate.getFullYear();
                        const selectedMonth = selectedDate.getMonth();
                        const firstDayOfMonth = new Date(
                            selectedYear,
                            selectedMonth,
                            1
                        );
                        const lastDayOfMonth = new Date(
                            selectedYear,
                            selectedMonth + 1,
                            0
                        );

                        const start =
                            startDate < firstDayOfMonth
                                ? firstDayOfMonth
                                : startDate;
                        const end =
                            endDate > lastDayOfMonth ? lastDayOfMonth : endDate;
                        const currentMonthDays =
                            endDate < firstDayOfMonth ||
                            startDate > lastDayOfMonth
                                ? 0
                                : (end - start) / (1000 * 60 * 60 * 24) + 1;
                        const daysInCurrentMonth = new Date(
                            selectedYear,
                            selectedMonth + 1,
                            0
                        ).getDate();
                        const currentMonthFree =
                            daysInCurrentMonth - currentMonthDays;

                        return {
                            name: myData.firstname,
                            lastname: myData.lastname,
                            department: myData.department,
                            project_name: myData.projectName,
                            start: myData.startDate,
                            end: myData.endDate,
                            days: days,
                            currentMonthDays: currentMonthDays,
                            currentMonthFree: currentMonthFree,
                        };
                    })
                );
            } catch (error) {
                console.error("Error fetching project data:", error);
            }
        };
        fetchEmployeeProjectData();
    }, [selectedDate]);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    console.log(employeeProjectData);

    /*
    const aggregateEmployeeData = (employeeProjectData) => {
        const aggregatedData = {};

        employeeProjectData.forEach((employee) => {
            const department = employee.department;
            const name = employee.name + " " + employee.lastname;
            const currentMonthDays = employee.currentMonthDays;

            if (!aggregatedData[department]) {
                aggregatedData[department] = {
                    department,
                    employees: {},
                    totalCurrentMonthDays: 0,
                };
            }

            if (!aggregatedData[department].employees[name]) {
                aggregatedData[department].employees[name] = {
                    name,
                    currentMonthDays: 0,
                };
            }

            aggregatedData[department].employees[name].currentMonthDays +=
                currentMonthDays;
            aggregatedData[department].totalCurrentMonthDays +=
                currentMonthDays;
        });

        const selectedYear = selectedDate.getFullYear();
        const selectedMonth = selectedDate.getMonth();
        const daysInCurrentMonth = new Date(
            selectedYear,
            selectedMonth + 1,
            0
        ).getDate();

        Object.values(aggregatedData).forEach((dept) => {
            Object.values(dept.employees).forEach((employee) => {
                employee.currentMonthFree =
                    daysInCurrentMonth - employee.currentMonthDays;
            });
            dept.totalCurrentMonthFree =
                daysInCurrentMonth * Object.keys(dept.employees).length -
                dept.totalCurrentMonthDays;
        });

        const departmentData = Object.values(aggregatedData);
        return departmentData;
    };

    const departmentData = aggregateEmployeeData(employeeProjectData);
    const chartData = departmentData.map((dept) => ({
        department: dept.department,
        workDays: dept.totalCurrentMonthDays,
        freeDays: dept.totalCurrentMonthFree,
    }));

    */

    const hoursPerDay = 8;

const aggregateEmployeeData = (employeeProjectData) => {
    const aggregatedData = {};

    employeeProjectData.forEach((employee) => {
        const department = employee.department;
        const name = employee.name + " " + employee.lastname;
        const currentMonthDays = employee.currentMonthDays;

        if (!aggregatedData[department]) {
            aggregatedData[department] = {
                department,
                employees: {},
                totalCurrentMonthHours: 0,
            };
        }

        if (!aggregatedData[department].employees[name]) {
            aggregatedData[department].employees[name] = {
                name,
                currentMonthHours: 0,
            };
        }

        aggregatedData[department].employees[name].currentMonthHours +=
            currentMonthDays * hoursPerDay;
        aggregatedData[department].totalCurrentMonthHours +=
            currentMonthDays * hoursPerDay;
    });

    const maxWorkDays = 22;

    Object.values(aggregatedData).forEach((dept) => {
        Object.values(dept.employees).forEach((employee) => {
            employee.currentMonthFreeHours =
                maxWorkDays * hoursPerDay - employee.currentMonthHours;
        });
        dept.totalCurrentMonthFreeHours =
            maxWorkDays * Object.keys(dept.employees).length * hoursPerDay -
            dept.totalCurrentMonthHours;
    });

    const departmentData = Object.values(aggregatedData);
    return departmentData;
};

    const departmentData = aggregateEmployeeData(employeeProjectData);
    const chartData = departmentData.map((dept) => ({
        department: dept.department,
        workHours: dept.totalCurrentMonthHours,
        freeHours: dept.totalCurrentMonthFreeHours,
    }));

    


    return (
        <div>
          <div style={cardStyle}>
            <h1 style={cardTitleStyle}>Arbeitstage und freie Tage für jedes Department</h1>
            <div style={datePickerStyle}>
              <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                dateFormat="MM/yyyy"
                showMonthYearPicker
                inline
                wrapperClassName="datePickerWrapper"
              />
            </div>
            <div style={chartContainerStyle}>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart
                  data={chartData}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="department" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="workHours" name="Arbeitsstunden" fill="#8884d8" />
                  <Bar dataKey="freeHours" name="Freie Stunden" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      );
      
      
};

export default EmployeeProjectInfo;
