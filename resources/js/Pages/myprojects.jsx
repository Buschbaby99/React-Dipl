import { Head } from '@inertiajs/react';
import Projects from '../Components/Projects'
import MyNavbar from '@/Components/AdminNavbar';
import Name from '@/Components/Name';

export default function myprojects(props) {
    return (
        <div>
            <Head title="Projects" />
            <MyNavbar></MyNavbar>
            <Projects></Projects>
            <Name auth={props.auth}></Name>
        </div>
    );
}