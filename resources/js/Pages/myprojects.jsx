import { Head } from '@inertiajs/react';
import Projects from '../Components/Projects'
import LoggedIn from '@/Components/LoggedIn';
import Name from '@/Components/Name';

export default function myprojects(props) {
    return (
        <div>
            <Head title="Projects" />
            <LoggedIn auth={props.auth}></LoggedIn>
            <Projects></Projects>
            <Name auth={props.auth}></Name>
        </div>
    );
}