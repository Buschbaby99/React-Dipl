import { Head } from '@inertiajs/react';
import LoggedIn from '@/Components/LoggedIn';

export default function myprojects(props) {
    return (
        <div>
            <Head title="ProjectsList" />
            <LoggedIn auth={props.auth}></LoggedIn>
        </div>
    );
}