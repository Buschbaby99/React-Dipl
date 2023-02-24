import { Head } from '@inertiajs/react';
import LoggedIn from '@/Components/ChangeNavbarComponent';
import AdminTable from '../../Components/Admin/UserTableComponent';
import AdminButton from '@/Components/Buttons/UniversalButtonComponent';

export default function myadmin(props) {
    return (
        <div>
            <Head title="AdminHome" />
            <LoggedIn auth={props.auth}></LoggedIn>
            <AdminButton 
                type="button"
                href='AdminInsertPage'
                text= "Hinzufügen"
            ></AdminButton>
            <AdminTable props={props}></AdminTable>
        </div>
    );
}
