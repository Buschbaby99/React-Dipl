import LoggedIn from '@/Components/ChangeNavbarComponent';
import { Head } from '@inertiajs/react';

export default function Scheduler(props) {
    return (
        <div>
            <Head title="Scheduler" />
            <LoggedIn auth={props.auth}></LoggedIn>
        </div>
    );
}
