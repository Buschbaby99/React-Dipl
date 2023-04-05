export const SplittMonthFunction = (project, projectParts) => {
    const startDate = new Date(project.start);
    const endDate = new Date(project.end);

    let currentStart = startDate;
    let partIndex = 1;

    while (currentStart < endDate) {
        const endOfMonth = new Date(
            currentStart.getFullYear(),
            currentStart.getMonth() + 1,
            0
        );

        const currentEnd = endDate > endOfMonth ? endOfMonth : endDate;

        const projectPart = {
            ...project,
            start: currentStart.toISOString(),
            end: currentEnd.toISOString(),
            entryNumber: project.entryNumber,
        };

        projectParts.push(projectPart);

        const startOfNextMonth = new Date(
            endOfMonth.getFullYear(),
            endOfMonth.getMonth() + 1,
            1
        );

        currentStart = startOfNextMonth;
        partIndex++;
    }
};
