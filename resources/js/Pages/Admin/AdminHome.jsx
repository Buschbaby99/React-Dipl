import { Head } from '@inertiajs/react';
import LoggedIn from '@/Components/ChangeNavbarComponent';
import AdminTable from '../../Components/Admin/UserTableComponent';
import AdminButton from '@/Components/Buttons/UniversalButtonComponent';

export default function myadmin(props) {
    return (
        <div>
            <Head title="AdminHome" />
            <LoggedIn auth={props.auth}></LoggedIn>
            <header className="bg-white shadow">
                    <h1 className="max-w-7xl text-xl mx-auto py-6 px-4 sm:px-6 lg:px-8">Mitarbeiter</h1>
                </header>
            <AdminButton 
                type="button"
                href='AdminInsertPage'
                text= "Hinzufügen"
            ></AdminButton>
            <AdminTable props={props}></AdminTable>
        </div>
    );
}
