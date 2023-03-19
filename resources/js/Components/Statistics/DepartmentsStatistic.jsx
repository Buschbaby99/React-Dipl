import React, { useState, useEffect } from "react";

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
    console.log("hahahah");
    console.log(departmentStatistic);
    console.log("gff");

    

    return <div></div>;
};

export default DepartmentsStatistic;
