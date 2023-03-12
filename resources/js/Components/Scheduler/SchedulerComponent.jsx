import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Popover } from '@headlessui/react';
import { addToPersons } from './AddPersonComponent';

import UpdateInsertComponent from '@/Components/Scheduler/UpdateInsertComponent'

function SchedulerComponent(data) {



    const [month, setMonth] = useState(new Date()); // initial value is today's date
    const daysInMonth = new Date(month.getFullYear(), month.getMonth() + 1, 0).getDate();
    // get the number of days in the current month

    const renderDays = () => {
        const days = [];
        const weekdays = ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"];
        const months = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];

        for (let i = 1; i <= daysInMonth; i++) {
            const date = new Date(month.getFullYear(), month.getMonth(), i);
            const weekday = weekdays[date.getDay()];
            const monthname = months[month.getMonth()];
            const dayname = weekday + ", " + i.toString().padStart(2, "0") + "." + monthname;
            days.push(
                <th key={i} scope="col" className="border px-3 py-2 bg-gray-800 color text-gray-300">
                    {dayname}
                </th>
            );
        }
        return days;
    };
    // render table headers for each day of the month




    const persons = [
    ];

    const renderPersons = () => {

        addToPersons(data.data, persons);


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
                    personProjects.push({ project, start: start_Date.getDate() - 1, end: end_Date.getDate() - 1 });
                }
            });
            const personCells = [];
            let currentIndex = 0;
            personProjects.forEach(({ project, start, end }) => {
                // Add cells for any gaps between projects
                if (currentIndex < start) {
                    personCells.push(<td key={`gap-${currentIndex}`} colSpan={start - currentIndex} className="border px-3 py-2"></td>);
                }
                // Add cells for the project duration
                personCells.push(
                    <td key={`${person.name}-${project}-${start}-${end}`} colSpan={end - start + 1} className={`border px-3 py-2 bg-red-200`}>
                        <Popover className="relative">
                            <Popover.Button>{`Project ${project}`}</Popover.Button>

                            <Popover.Panel className="absolute z-10">
                                <div className="grid grid-cols-2">
                                 
                                   <UpdateInsertComponent
                                   firstname={person.name}
                                   lastname={person.name}
                                   ></UpdateInsertComponent>
                                </div>

                            </Popover.Panel>
                        </Popover>

                    </td>
                );
                currentIndex = end + 1;
            });
            // Add any remaining cells after the last project
            if (currentIndex < daysInMonth) {
                personCells.push(<td key={`gap-${currentIndex}`} colSpan={daysInMonth - currentIndex} className="border px-4 py-2"></td>);
            }
            return (
                <tr key={index}>
                    <td className="border px-3 py-2">{person.name}</td>
                    {personCells}
                </tr>
            );
        });
    };
    // render table rows for each person, with a cell for each day indicating availability

    return (
        <div className="container  p-4" >
            <div className="flex justify-center mb-4">
                <DatePicker selected={month} onChange={(date) => setMonth(date)} dateFormat="MMMM yyyy" showMonthYearPicker />
            </div>
            <table className="table-auto border-collapse border border-blue-800">
                <thead>
                    <tr>
                        <th className="border px-4 py-2 bg-gray-800 text-gray-300" >Mitarbeiter</th>

                        {renderDays()}
                    </tr>
                </thead>
                <tbody>{renderPersons()}</tbody>
            </table>
        </div>
    );
}
export default SchedulerComponent;