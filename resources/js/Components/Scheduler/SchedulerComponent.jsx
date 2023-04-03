import React, { useState, Fragment } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Popover } from "@headlessui/react";
import { addToPersons } from "./AddPersonComponent";
import Exit from "@mui/icons-material/DisabledByDefault";
import UpdateInsertComponent from "@/Components/Scheduler/UpdateInsertComponent";
import InsertComponent from "@/Components/Scheduler/InsertComponent";

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

const datePickerWrapperStyles = {
    zIndex: 11, // Set this to a higher value than the zIndex in stickyColumnStyles
};

function SchedulerComponent(data) {
    const [month, setMonth] = useState(new Date()); // initial value is today's date

    //console.log(data);

    const [selectedProject, setSelectedProject] = useState("");

    const renderProjectFilter = () => {
        const projectOptions = data.projects.map((project) => (
            <option key={project.id} value={project.id}>
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

    const daysInMonth = new Date(
        month.getFullYear(),
        month.getMonth() + 1,
        0
    ).getDate();

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

        for (let i = 1; i <= daysInMonth; i++) {
            const date = new Date(month.getFullYear(), month.getMonth(), i);
            const weekday = weekdays[date.getDay()];
            const monthname = months[month.getMonth()];
            const dayname =
                weekday + " " + i.toString().padStart(2, "0") + "." + monthname;
            days.push(
                <th
                    key={i}
                    scope="col"
                    className="border px-3 py-2 bg-gray-800 color text-gray-300 text-sm"
                >
                    {dayname}
                </th>
            );
        }
        return days;
    };
    // render table headers for each day of the month
    const persons = [];

    const renderPersons = () => {
        addToPersons(data.data, persons, data.allPersons);

        return persons.map((person, index) => {
            const personProjects = [];
            person.unavailable.forEach(
                ({ start, end, project, entryNumber }) => {
                    const start_Date = new Date(start);
                    const end_Date = new Date(end);
                    if (
                        (!selectedProject || project === selectedProject) &&
                        start_Date.getFullYear() === month.getFullYear() &&
                        start_Date.getMonth() === month.getMonth() &&
                        end_Date.getFullYear() === month.getFullYear() &&
                        end_Date.getMonth() === month.getMonth()
                      ) {
                        personProjects.push({
                          project,
                          start: start_Date.getDate() - 1,
                          end: end_Date.getDate() - 1,
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
                                    key={`gap-${currentIndex}`}
                                    colSpan={start - currentIndex}
                                    className="border px-3 py-2"
                                ></td>
                            );
                        }
                        // Add cells for the project duration
                        personCells.push(
                            <td
                                key={`${person.name}-${project}-${start}-${end}-${entryNumber}`}
                                colSpan={end - start + 1}
                                className={`border px-3 py-2 bg-red-200`}
                            >
                                <Popover className="relative">
                                    <Popover.Button>
                                        {`Project ${project}`}
                                    </Popover.Button>
                                    <Popover.Panel className="fixed z-50 top-0 left-0 w-screen h-screen flex items-center justify-center md:overflow-y-auto md:max-h-[80vh]">

                                        <div className="bg-gray-400 rounded-lg">
                                            <div className="bg-gray-400 rounded-lg mt-2 mr-2">
                                                <div className="flex justify-between items-start">
                                                    <div className="flex-grow text-center">
                                                        <h1>
                                                            Projekt Einteilung
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
                                            <UpdateInsertComponent
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
                                            ></UpdateInsertComponent>
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
                            key={`gap-${currentIndex}`}
                            colSpan={daysInMonth - currentIndex}
                            className="border px-4 py-2"
                        ></td>
                    );
                }
                return (
                    <tr key={`${index}-${rowIndex}`}>
                        {rowIndex === 0 && (
                            <td
                                rowSpan={personRows.length}
                                className="border px-3 py-2 bg-gray-800 color text-gray-300 text-m"
                                style={stickyColumnStyles}
                            >
                                <Popover className="relative">
                                    <Popover.Button>
                                        {person.name}
                                        <br />
                                        {person.lastname}
                                    </Popover.Button>
                                    <Popover.Panel className="fixed z-50 top-0 left-0 w-screen h-screen text-black flex items-center justify-center">
                                        <div className="bg-gray-400 rounded-lg">
                                            <div className="bg-gray-400 rounded-lg mt-2 mr-2">
                                                <div className="flex justify-between items-start">
                                                    <div className="flex-grow text-center">
                                                        <h1>
                                                            Projekt Einteilung
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
                                            <InsertComponent
                                                personid={person.id}
                                                firstname={person.name}
                                                lastname={person.lastname}
                                                projects={data.projects}
                                            ></InsertComponent>
                                        </div>
                                    </Popover.Panel>
                                </Popover>
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
                {renderProjectFilter()}
                <DatePicker
                    selected={month}
                    onChange={(date) => setMonth(date)}
                    dateFormat="MMMM yyyy"
                    showMonthYearPicker
                />
            </div>

            <div style={tableWrapperStyles}>
                <table className="table-auto border-collapse border border-blue-800 w-full">
                    <thead>
                        <tr>
                            <th
                                className="border px-4 py-2 bg-gray-800 text-gray-300"
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
