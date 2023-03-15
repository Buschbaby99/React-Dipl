import React, { useState, Fragment } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Popover, Transition } from "@headlessui/react";
import { addToPersons } from "./AddPersonComponent";

import UpdateInsertComponent from "@/Components/Scheduler/UpdateInsertComponent";

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
};

const stickyColumnStyles = {
    position: "sticky",
    left: -1,
    background: "white",
    zIndex: 10,
    boxShadow: "2px 0px 4px rgba(0, 0, 0, 0.1)",
    borderRight: "1px solid #dee2e6",
    borderLeft: "1px solid #dee2e6",
    backgroundColor: "rgba(255, 255, 255, 1)",
};

const datePickerWrapperStyles = {
    zIndex: 11, // Set this to a higher value than the zIndex in stickyColumnStyles
};

const popoverContentStyles = {
    border: "1px solid #ccc",
    borderRadius: "5px",
    padding: "1rem",
    background: "white",
    minWidth: "900px", // Erhöhen Sie die Mindestbreite, z. B. auf 400px
    maxWidth: "80%", // Fügen Sie eine Maximalbreite hinzu, z. B. 80% des Bildschirms
    maxHeight: "80%", // Fügen Sie eine Maximalhöhe hinzu, z. B. 80% des Bildschirms
    overflowY: "auto", // Fügen Sie einen Scrollbalken hinzu, wenn der Inhalt die maximale Höhe überschreitet
    margin: "auto", // Zentriert das Element horizontal und vertikal innerhalb seines Containers
};

const popoverPanelStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
};

const popoverContentWrapperStyles = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%", // Stellen Sie sicher, dass der Wrapper die gesamte Bildschirmbreite einnimmt
    display: "flex", // Verwenden Sie Flexbox, um das Popover mittig auszurichten
    alignItems: "center", // Zentriert das Popover vertikal
    justifyContent: "center", // Zentriert das Popover horizontal
};

function SchedulerComponent(data) {
    console.log(data);
    const [month, setMonth] = useState(new Date()); // initial value is today's date
    const daysInMonth = new Date(
        month.getFullYear(),
        month.getMonth() + 1,
        0
    ).getDate();
    // get the number of days in the current month

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
                weekday +
                ", " +
                i.toString().padStart(2, "0") +
                "." +
                monthname;
            days.push(
                <th
                    key={i}
                    scope="col"
                    className="border px-3 py-2 bg-gray-800 color text-gray-300"
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
        addToPersons(data.data, persons);
        console.log(persons);

        return persons.map((person, index) => {
            const personProjects = [];
            person.unavailable.forEach(({ start, end, project }) => {
                const start_Date = new Date(start);
                const end_Date = new Date(end);
                if (
                    start_Date.getFullYear() === month.getFullYear() &&
                    start_Date.getMonth() === month.getMonth() &&
                    end_Date.getFullYear() === month.getFullYear() &&
                    end_Date.getMonth() === month.getMonth()
                ) {
                    personProjects.push({
                        project,
                        start: start_Date.getDate() - 1,
                        end: end_Date.getDate() - 1,
                    });
                }
            });
            const personCells = [];
            let currentIndex = 0;
            personProjects.forEach(({ project, start, end }) => {
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
                        key={`${person.name}-${project}-${start}-${end}`}
                        colSpan={end - start + 1}
                        className={`border px-3 py-2 bg-red-200`}
                    >
                        <Popover className="relative">
                            <Popover.Button>
                                {`Project ${project}`}
                            </Popover.Button>

                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0 translate-y-1"
                                enterTo="opacity-100 translate-y-0"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100 translate-y-0"
                                leaveTo="opacity-0 translate-y-1"
                            >
                                <Popover.Panel className="fixed z-50 top-0 left-0 w-screen h-screen flex items-center justify-center">
                                    <div
                                        className="grid grid-cols-2 flex items-center justify-center"
                                        style={popoverContentStyles}
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <UpdateInsertComponent
                                            firstname={person.name}
                                            lastname={person.lastname}
                                            projectName={project}
                                            startDate={start + 1}
                                            endDate={end + 1}
                                            month={month.getMonth() + 1}
                                        ></UpdateInsertComponent>
                                    </div>
                                </Popover.Panel>
                            </Transition>
                        </Popover>
                    </td>
                );
                currentIndex = end + 1;
            });
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
                <tr key={index}>
                    <td className="border px-3 py-2" style={stickyColumnStyles}>
                        {person.name}
                    </td>
                    {personCells}
                </tr>
            );
        });
    };
    // render table rows for each person, with a cell for each day indicating availability

    return (
        <div style={containerStyles}>
            <div
                className="flex justify-center mb-4"
                style={datePickerWrapperStyles}
            >
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
