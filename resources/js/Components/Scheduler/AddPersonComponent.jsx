export const addToPersons = (data, persons) => {
    data.forEach(item => {
      const person = persons.find(p => p.name === item.name);
      if (person) {
        const unavailable = { start: item.start, end: item.end, project: item.project };
        person.unavailable.push(unavailable);
      } else {
        persons.push({ name: item.name, unavailable: [{ start: item.start, end: item.end, project: item.project }] });
      }
    });
  }