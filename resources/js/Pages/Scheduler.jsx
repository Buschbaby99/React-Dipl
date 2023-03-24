import LoggedIn from '@/Components/ChangeNavbarComponent';
import { Head } from '@inertiajs/react';
import SchedulerComponent from '@/Components/Scheduler/SchedulerComponent';

export default function Scheduler(props) {
  
   // console.log(JSON.parse(props.data));

   
   
    return (
        <div>
            <Head title="Scheduler" />
            <LoggedIn auth={props.auth}></LoggedIn>
            <SchedulerComponent data={props.data} projects={props.projects}></SchedulerComponent>
        </div>
    );
}
