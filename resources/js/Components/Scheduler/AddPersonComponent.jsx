export const addToPersons = (data, persons) => {
    data.forEach((item) => {
        const person = persons.find((p) => p.id === item.id);
        if (person) {
            const unavailable = {
                start: item.start,
                end: item.end,
                project: item.project,
                entryNumber: item.entryNumber,
            };
            person.unavailable.push(unavailable);
        } else {
            persons.push({
                id: item.id,
                name: item.name,
                lastname: item.lastname,
               
                unavailable: [
                    { start: item.start, end: item.end, project: item.project, entryNumber: item.entryNumber },
                ],
            });
        }
    });
};
