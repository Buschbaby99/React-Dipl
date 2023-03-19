import { Head } from '@inertiajs/react';
import LoggedIn from '@/Components/ChangeNavbarComponent';
import ProjectsBarChartComponent from '@/Components/Statistics/ProjectsBarChartComponent';
import PersonsStatistic from '@/Components/Statistics/PersonsStatistic';

export default function myprojects(props) {
    
    console.log(props);
    return (
        <div>
            <Head title="Statistic" />
            <LoggedIn auth={props.auth}></LoggedIn>
            <ProjectsBarChartComponent></ProjectsBarChartComponent>
            <PersonsStatistic></PersonsStatistic>
        </div>
    );

}

