import LoggedIn from '@/Components/LoggedIn';
import { Head } from '@inertiajs/react';

export default function Dashboard(props) {
    return (
        <div>
            <Head title="Dashboard" />
            <LoggedIn auth={props.auth}></LoggedIn>
        </div>
    );
}
