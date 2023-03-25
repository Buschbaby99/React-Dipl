import LoggedIn from '@/Components/ChangeNavbarComponent';
import { Head } from '@inertiajs/react';
import SchedulerComponent from '@/Components/Scheduler/SchedulerComponent';

export default function Scheduler(props) {
  
   // console.log(JSON.parse(props.data));

   
   
    return (
        <div>
            <Head title="Scheduler" />

            <LoggedIn auth={props.auth}></LoggedIn>
            <header className="bg-white shadow">
                    <div className="max-w-7xl mx-auto  text-xl py-6 px-4 sm:px-6 lg:px-8">{"Personaleinteilung"}</div>
                </header>
            <SchedulerComponent data={props.data} projects={props.projects}></SchedulerComponent>
        </div>
    );
}
