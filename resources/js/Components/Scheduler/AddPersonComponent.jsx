import { SplittMonthFunction } from "./SplittMonthFunction";
export const addToPersons = (data, persons) => {

    data.forEach((item) => {
        const person = persons.find((p) => p.id === item.id);
        if (person) {
            const unavailable = {
                start: item.start,
                end: item.end,
                project: item.project,
                entryNumber: item.entryNumber,
                department: item.department,
            };

            let seperate = [];
            SplittMonthFunction(unavailable, seperate);
            for (let index = 0; index < seperate.length; index++) {
                person.unavailable.push(seperate[index]);
            }
        } else {
            let seperate = [];
            const unavailable = {
                start: item.start,
                end: item.end,
                project: item.project,
                entryNumber: item.entryNumber,
                department: item.department,
            };

            SplittMonthFunction(unavailable, seperate);

            persons.push({
                id: item.id,
                color: item.color,
                department: item.department,
                name: item.name,
                lastname: item.lastname,
                unavailable: seperate,
            });
        }
    });
};
