import { SplittMonthFunction } from "./SplittMonthFunction";
export const addToPersons = (data, persons, end) => {



    data.forEach((item) => {
        
      

        
        const person = persons.find((p) => p.id === item.id);
        if (person) {
            if (new Date(item.start).getTime() <= end.getTime() )
            {

            const unavailable = {
                start: item.start,
                end: item.end,
                project: item.project,
                entryNumber: item.entryNumber,
            };

            let seperate = [];
            SplittMonthFunction(unavailable, seperate);
            for (let index = 0; index < seperate.length; index++) {
                person.unavailable.push(seperate[index]);
            }

       }
        } else {

          

            if (new Date(item.start).getTime() <= end.getTime() )
            {

                console.log("Zeit 1:"+new Date(item.start).getTime());
                console.log("Zeit 2:"+end.getTime() );
   
            let seperate = [];
            const unavailable = {
                start: item.start,
                end: item.end,
                project: item.project,
                entryNumber: item.entryNumber,
            };

            SplittMonthFunction(unavailable, seperate);

            persons.push({
                id: item.id,
                name: item.name,
                lastname: item.lastname,
                unavailable: seperate,
            });
        }
}});
};
