import { Head } from '@inertiajs/react';
import LoggedIn from '@/Components/LoggedIn';
import Name from '../Components/Name';
import AdminTable from '../Components/AdminTable';

export default function myadmin(props) {
    return (
        <div>
            <Head title="MyAdmin" />
            <LoggedIn></LoggedIn>
            <Name auth={props.auth}></Name>
            <AdminTable Input={props}></AdminTable>
        </div>
    );
}
