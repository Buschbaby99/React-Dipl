import { Head } from '@inertiajs/react';
import LoggedIn from '@/Components/LoggedIn';
import ProjectTable from '../Components/ProjectTable';
import AdminButton from '@/Components/UniversalButtonComponent';


export default function myprojects(props) {
    
    console.log(props);
    return (
        <div>
            <Head title="Myprojects" />
            <LoggedIn auth={props.auth}></LoggedIn>
            <AdminButton 
                href='projectInsertPage'
                text="Hinzufügen">
            </AdminButton>
            <ProjectTable props={props}></ProjectTable>
        </div>
    );

}