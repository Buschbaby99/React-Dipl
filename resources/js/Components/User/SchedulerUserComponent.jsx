import React, { useState, Fragment } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addToPersons } from "./AddPersonComponent";
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import { Popover } from "@headlessui/react";
import Exit from "@mui/icons-material/DisabledByDefault";
import InsertNote from '@/Components/User/InsertNote';

const tableWrapperStyles = {
    overflowX: "auto",
    overflowY: "auto",
    maxHeight: "80vh",
    maxWidth: "100%",
    flexGrow: 1,
};

const containerStyles = {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    padding: "1rem",
    margin: "70px 20px 20px 20px",
};

const stickyColumnStyles = {
    position: "sticky",
    left: -1,
    background: "rgb(31 41 55)",
    zIndex: 10,
    boxShadow: "2px 0px 4px rgba(0, 0, 0, 0.1)",
    borderRight: "1px solid #dee2e6",
    borderLeft: "1px solid #dee2e6",
    backgroundColor: "rgb(31 41 55)",
};

function SchedulerComponent(data) {
    const [month, setMonth] = useState(new Date());
    const today = new Date();
    const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    const [startDate, setStartDate] = useState(firstDayOfMonth);

    const lastDayOfMonth = new Date(
        today.getFullYear(),
        today.getMonth() + 1,
        0
    );

    const [endDate, setEndDate] = useState(lastDayOfMonth);

    const [selectedProject, setSelectedProject] = useState("");
    const [selectedDepartment, setSelectedDepartment] = useState("");

    const renderProjectFilter = () => {
        const projectOptions = data.projects.map((project) => (
            <option key={project.name} value={project.name}>
                {project.name}
            </option>
        ));

        return (
            <Fragment>
                <label htmlFor="project-filter" className="mr-2">
                    Projektfilter:
                </label>
                <select
                    id="project-filter"
                    value={selectedProject}
                    onChange={(e) => setSelectedProject(e.target.value)}
                    className="rounded-md border-gray-300"
                >
                    <option value="">Alle Projekte</option>
                    {projectOptions}
                </select>
            </Fragment>
        );
    };

    const renderDepartmentFilter = () => {
        const departmentOptions = data.departments.map((department) => (
            <option key={department.name} value={department.name}>
                {department.name}
            </option>
        ));
        return (
            <Fragment>
                <label htmlFor="department-filter" className="mr-2">
                    Abteilungsfilter:
                </label>
                <select
                    id="department-filter"
                    value={selectedDepartment}
                    onChange={(e) => setSelectedDepartment(e.target.value)}
                    className="rounded-md border-gray-300"
                >
                    <option value="">Alle Abteilungen</option>
                    {departmentOptions}
                </select>
            </Fragment>
        );
    };

    const daysInMonth =
        Math.floor(
            (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
        ) + 1; // Add 1 here

    const renderDays = () => {
        const days = [];
        const weekdays = ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"];
        const months = [
            "01",
            "02",
            "03",
            "04",
            "05",
            "06",
            "07",
            "08",
            "09",
            "10",
            "11",
            "12",
        ];

        let currentDate = new Date(startDate);
        for (let i = 0; i < daysInMonth; i++) {
            const weekday = weekdays[currentDate.getDay()];
            const monthname = months[currentDate.getMonth()];
            const dayname =
                weekday +
                " " +
                currentDate.getDate().toString().padStart(2, "0") +
                "." +
                monthname;
            days.push(
                <th
                    key={i}
                    scope="col"
                    className="border px-3 py-2 bg-gray-800 color text-gray-300 text-sm"
                >
                    {dayname}
                </th>
            );
            currentDate.setDate(currentDate.getDate() + 1);
        }
        return days;
    };

    // render table headers for each day of the month
    const persons = [];

    const renderPersons = () => {
        addToPersons(data.data, persons, data.allPersons);
        console.log(selectedDepartment);
        return persons.map((person, personIndex) => {
            const personProjects = [];
            person.unavailable.forEach(
                ({ start, end, project, entryNumber, department }) => {
                    const start_Date = new Date(start);
                    const end_Date = new Date(end);
                    if (
                        (!selectedProject || project === selectedProject) &&
                        (!selectedDepartment ||
                            department === selectedDepartment) &&
                        start_Date.getTime() <= endDate.getTime() &&
                        end_Date.getTime() >= startDate.getTime()
                    ) {
                        const adjustedStartDate = new Date(
                            Math.max(start_Date.getTime(), startDate.getTime())
                        );
                        const adjustedEndDate = new Date(
                            Math.min(end_Date.getTime(), endDate.getTime())
                        );

                        personProjects.push({
                            project,
                            start: Math.floor(
                                (adjustedStartDate.getTime() -
                                    startDate.getTime()) /
                                    (1000 * 60 * 60 * 24)
                            ),
                            end: Math.floor(
                                (adjustedEndDate.getTime() -
                                    startDate.getTime()) /
                                    (1000 * 60 * 60 * 24)
                            ),
                            start_Date: start,
                            end_Date: end,
                            entryNumber: entryNumber,
                        });
                    }
                }
            );

            const personRows = [[]];
            personProjects.forEach((project) => {
                let placed = false;
                for (const row of personRows) {
                    const lastProject = row[row.length - 1];
                    if (!lastProject || project.start > lastProject.end) {
                        row.push(project);
                        placed = true;
                        break;
                    }
                }
                if (!placed) {
                    personRows.push([project]);
                }
            });

            return personRows.map((row, rowIndex) => {
                const personCells = [];
                let currentIndex = 0;

                row.forEach(
                    ({
                        project,
                        start,
                        end,
                        start_Date,
                        end_Date,
                        entryNumber,
                    }) => {
                        // Add cells for any gaps between projects
                        if (currentIndex < start) {
                            personCells.push(
                                <td
                                    key={`gap-${rowIndex}-${currentIndex}`}
                                    colSpan={start - currentIndex}
                                    className="border px-3 py-2"
                                ></td>
                            );
                        }
                        // Add cells for the project duration

                        personCells.push(
                            <td
                                key={`entry-${entryNumber}-person-${person.id}-project-${project}-start-${start}-end-${end}-color-${person.color}`}
                                colSpan={end - start + 1}
                                className={`border px-3 py-2 bg-${person.color}-200 rounded-lg `}
                            >
                                <Popover className="relative">
                                    <Popover.Button>
                                        {`${project}`}
                                    </Popover.Button>

                                    <Popover.Panel className="fixed z-50 top-0 left-0 w-screen h-screen flex items-center justify-center">
                                        <div className="bg-gray-400 rounded-lg">
                                            <div className="bg-gray-400 rounded-lg mt-2 mr-2">
                                                <div className="flex justify-between items-start">
                                                    <div className="flex-grow text-center">
                                                        <h1>
                                                           Notizen
                                                        </h1>
                                                    </div>
                                                    <div className="flex-shrink-0">
                                                        <a
                                                            className="text-black-500 hover:text-black-700"
                                                            href={`Scheduler`}
                                                        >
                                                            <Exit></Exit>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <InsertNote
                                                user={data.auth}
                                                firstname={person.name}
                                                lastname={person.lastname}
                                                projectName={project}
                                                startDate={start_Date}
                                                endDate={end_Date}
                                                start={start}
                                                end={end}
                                                month={month.getMonth() + 1}
                                                staffingid={entryNumber}
                                                projects={data.projects}
                                            ></InsertNote>
                                        </div>
                                    </Popover.Panel>
                                </Popover>
                            </td>
                        );
                        currentIndex = end + 1;
                    }
                );
                // Add any remaining cells after the last project
                if (currentIndex < daysInMonth) {
                    personCells.push(
                        <td
                            key={`gap-${rowIndex}-${currentIndex}`}
                            colSpan={daysInMonth - currentIndex}
                            className="border px-4 py-2"
                        ></td>
                    );
                }
               
                return (
                    <tr key={`person-${person.id}-row-${rowIndex}-color-${person.color}`}>
                        {rowIndex === 0 && (
                            <td
                                rowSpan={personRows.length}
                                className="border px-3 py-2 bg-gray-800 color text-gray-300 text-m"
                                style={stickyColumnStyles}
                            >
                 
                    
                                        <div>{person.name}</div>
                                        <div>{person.lastname}</div>
                                        <div className="d-flex align-items-end">
                                            <HomeRepairServiceIcon />
                                            <span className="relative top-0.5">
                                                {"-" + person.department}
                                            </span>
                                        </div>
                             
                            </td>
                        )}
                        {personCells}
                    </tr>
                );
            });
        });
    };

    return (
        <div style={containerStyles}>
            <div className="flex justify-center mb-4 w-auto">
                <div className="flex items-center justify-center space-x-4">
                    {renderProjectFilter()}
                    {renderDepartmentFilter()}
                    <label htmlFor="start-date-picker" className="mr-2">
                        Startdatum:
                    </label>
                    <DatePicker
                        id="start-date-picker"
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        dateFormat="dd.MM.yyyy"
                        selectsStart
                        startDate={startDate}
                        endDate={endDate}
                        className="rounded-md border-gray-300"
                    />
                    <label htmlFor="end-date-picker" className="mr-2">
                        Enddatum:
                    </label>
                    <DatePicker
                        id="end-date-picker"
                        selected={endDate}
                        onChange={(date) => setEndDate(date)}
                        dateFormat="dd.MM.yyyy"
                        selectsEnd
                        startDate={startDate}
                        endDate={endDate}
                        minDate={startDate}
                        className="rounded-md border-gray-300"
                    />
                </div>
            </div>

            <div style={tableWrapperStyles}>
                <table className="table-auto border-collapse border border-blue-800 w-full">
                    <thead>
                        <tr>
                            <th
                                className="border px-4 py-2 bg-gray-800 text-gray-300 text-left"
                                style={stickyColumnStyles}
                            >
                                Mitarbeiter
                            </th>

                            {renderDays()}
                        </tr>
                    </thead>
                    <tbody>{renderPersons()}</tbody>
                </table>
            </div>
        </div>
    );
}
export default SchedulerComponent;
