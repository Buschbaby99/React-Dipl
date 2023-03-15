export const addToPersons = (data, persons) => {
    data.forEach((item) => {
        const person = persons.find((p) => p.id === item.id);
        if (person) {
            const unavailable = {
                start: item.start,
                end: item.end,
                project: item.project,
            };
            person.unavailable.push(unavailable);
        } else {
            persons.push({
                id: item.id,
                name: item.name,
                lastname: item.lastname,
                entryNumber: item.entryNumber,
                unavailable: [
                    { start: item.start, end: item.end, project: item.project },
                ],
            });
        }
    });
};
