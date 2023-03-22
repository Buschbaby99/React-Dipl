import { Head } from '@inertiajs/react';
import LoggedIn from '@/Components/ChangeNavbarComponent';
import ProjectsBarChartComponent from '@/Components/Statistics/ProjectsBarChartComponent';
import PersonsStatistic from '@/Components/Statistics/PersonsStatistic';
import DepartmentsStatistic from '@/Components/Statistics/DepartmentsStatistic';

export default function myprojects(props) {
    
    
    return (
        <div>
            <Head title="Statistic" />
            <LoggedIn auth={props.auth}></LoggedIn>
            <ProjectsBarChartComponent></ProjectsBarChartComponent>
            <PersonsStatistic></PersonsStatistic>
            <DepartmentsStatistic></DepartmentsStatistic>
            
        </div>
    );

}

