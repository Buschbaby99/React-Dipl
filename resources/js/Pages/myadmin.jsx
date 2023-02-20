import { Head } from '@inertiajs/react';
import LoggedIn from '@/Components/LoggedIn';
import Name from '../Components/Name';
import AdminTable from '../Components/AdminTable';
import AdminButton from '@/Components/UniversalButtonComponent';

export default function myadmin(props) {
    return (
        <div>
            <Head title="MyAdmin" />
            <LoggedIn auth={props.auth}></LoggedIn>
            <AdminButton 
                type="button"
                href='adminInsertPage'
                text= "Hinzufügen"
            ></AdminButton>
            <AdminTable props={props}></AdminTable>
        </div>
    );
}
