import { Head } from '@inertiajs/react';
import LoggedIn from '@/Components/ChangeNavbarComponent';
import ProjectTable from '../../Components/Projects/ProjectTableComponent';
import AdminButton from '@/Components/Buttons/UniversalButtonComponent';
import ProjectsBarChartComponent from '@/Components/Projects/ProjectsBarChartComponent'

export default function myprojects(props) {
    
    console.log(props);
    return (
        <div>
            <Head title="ProjectHome" />
            <LoggedIn auth={props.auth}></LoggedIn>
            <AdminButton 
                href='ProjectInsertPage'
                text="Hinzufügen">
            </AdminButton>
            <ProjectTable props={props}></ProjectTable>
            <ProjectsBarChartComponent></ProjectsBarChartComponent>
        </div>
    );

}