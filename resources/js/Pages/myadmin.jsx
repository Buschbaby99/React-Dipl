import { Head } from '@inertiajs/react';
import MyNavbar from '@/Components/AdminNavbar';
import Name from '../Components/Name'

export default function myadmin(props) {
    return (
        <div>
            <Head title="MyAdmin" />
            <MyNavbar></MyNavbar>
            <Name auth={props.auth}></Name>
            <div>My admin</div>
        </div>
    );
}
