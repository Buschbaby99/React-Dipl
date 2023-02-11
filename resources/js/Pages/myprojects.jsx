import { Head } from '@inertiajs/react';
import Projects from '../Components/Projects'
import LoggedIn from '@/Components/LoggedIn';
import AdminInsertPage2 from '../Components/AdminInsertPage2';

export default function myprojects(props) {
    return (
        <div>
            <Head title="Projects" />
            <LoggedIn auth={props.auth}></LoggedIn>
        </div>
    );
}