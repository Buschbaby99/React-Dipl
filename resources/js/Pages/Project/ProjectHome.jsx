import { Head } from '@inertiajs/react';
import LoggedIn from '@/Components/ChangeNavbarComponent';
import ProjectTable from '../../Components/Projects/ProjectTableComponent';
import AdminButton from '@/Components/Buttons/UniversalButtonComponent';

export default function myprojects(props) {
    
    console.log(props);
    return (
        <div>
            <Head title="ProjectHome" />
            <LoggedIn auth={props.auth}></LoggedIn>
            <header className="bg-white shadow">
                    <h1 className="max-w-7xl text-xl mx-auto py-6 px-4 sm:px-6 lg:px-8">Projekte</h1>
                </header>
            <AdminButton 
                href='ProjectInsertPage'
                text="Hinzufügen">
            </AdminButton>
            <ProjectTable props={props}></ProjectTable>
        </div>
    );

}

