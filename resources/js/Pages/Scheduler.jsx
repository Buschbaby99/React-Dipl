import React, { useState, useEffect } from "react";
import LoggedIn from "@/Components/ChangeNavbarComponent";
import { Head } from "@inertiajs/react";
import SchedulerComponent from "@/Components/Scheduler/SchedulerComponent";
import SchedulerUser from "@/Components/User/SchedulerUserComponent";

export default function Scheduler(props) {
    if (props.auth.user.role == 3) {
        return (
            <div>
                <Head title="Scheduler" />

                <LoggedIn auth={props.auth}></LoggedIn>
                <header className="bg-white shadow">
                    <div className="max-w-7xl mx-auto text-xl py-6 px-4 sm:px-6 lg:px-8">
                        {"Personaleinteilung"}
                    </div>
                </header>
                <SchedulerUser
                    auth={props.auth}
                    allPersons={props.allPersons}
                    data={props.data}
                    projects={props.projects}
                    departments={props.departments}
                ></SchedulerUser>
            </div>
        );
    } else {
        return (
            <div>
                <Head title="Scheduler" />

                <LoggedIn auth={props.auth}></LoggedIn>
                <header className="bg-white shadow">
                    <div className="max-w-7xl mx-auto text-xl py-6 px-4 sm:px-6 lg:px-8">
                        {"Personaleinteilung"}
                    </div>
                </header>
                <SchedulerComponent
                    allPersons={props.allPersons}
                    data={props.data}
                    projects={props.projects}
                    departments={props.departments}
                ></SchedulerComponent>
            </div>
        );
    }
}
