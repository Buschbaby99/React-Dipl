import { Head } from '@inertiajs/react';
import Projects from '../Components/Projects'
import MyNavbar from '@/Layouts/MyNavbar';
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