import { Head } from "@inertiajs/react";
import LoggedIn from "@/Components/ChangeNavbarComponent";
import ProjectsBarChartComponent from "@/Components/Statistics/ProjectsBarChartComponent";
import PersonsStatistic from "@/Components/Statistics/EmployeeProjectInfo";
import DepartmentsStatistic from "@/Components/Statistics/DepartmentsStatistic";

export default function myprojects(props) {
    return (
        <div>
            <Head title="Statistic" />
            <LoggedIn auth={props.auth}></LoggedIn>
            <header className="bg-white shadow">
                <h1 className="max-w-7xl text-xl mx-auto mb-1 py-6 px-4 sm:px-6 lg:px-8">
                    Statistiken
                </h1>
            </header>
            <PersonsStatistic></PersonsStatistic>
            <ProjectsBarChartComponent></ProjectsBarChartComponent>
            <DepartmentsStatistic></DepartmentsStatistic>
        </div>
    );
}
