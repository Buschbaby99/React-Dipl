import React, { useState, useEffect } from "react";

const EmployeeProjectInfo = () => {
    const [employeeProjectData, setEmployeeProjectData] = useState([]);

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

                        return {
                            name: myData.firstname,
                            lastname: myData.lastname,
                            department: myData.department,
                            project_name: myData.projectName,
                            start: myData.startDate,
                            end: myData.endDate,
                            days: days,
                        };
                    })
                );
            } catch (error) {
                console.error("Error fetching project data:", error);
            }
        };
        fetchEmployeeProjectData();
    }, []);


    const getTotalWorkingDaysForEachEmployee = (employeeProjectData) => {
        const employeeWorkingDays = employeeProjectData.reduce((acc, project) => {
          const employeeName = project.name + " " + project.lastname;
          const existingEmployee = acc.find((e) => e.employee === employeeName);
      
          if (existingEmployee) {
            existingEmployee.days += project.days;
          } else {
            acc.push({
              employee: employeeName,
              days: project.days,
            });
          }
      
          return acc;
        }, []);
      
        return employeeWorkingDays;
      };
      

    console.log(employeeProjectData);

    const totalWorkingDaysForEachEmployee = getTotalWorkingDaysForEachEmployee(
        employeeProjectData
      );
    console.log(totalWorkingDaysForEachEmployee);
      


    

    return <div></div>;
};

export default EmployeeProjectInfo;
