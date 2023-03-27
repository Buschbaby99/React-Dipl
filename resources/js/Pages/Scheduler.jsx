import React, { useState, useEffect } from "react";
import LoggedIn from "@/Components/ChangeNavbarComponent";
import { Head } from "@inertiajs/react";
import SchedulerComponent from "@/Components/Scheduler/SchedulerComponent";
import MobileSchedulerComponent from "@/Components/Scheduler/MobileScheduler";

export default function Scheduler(props) {
    // console.log(JSON.parse(props.data));

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkViewportWidth = () => {
            if (window.innerWidth <= 768) {
                // Sie können diesen Wert anpassen, um Ihre eigene Definition von "mobil" festzulegen.
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        };

        checkViewportWidth();
        window.addEventListener("resize", checkViewportWidth);

        return () => {
            window.removeEventListener("resize", checkViewportWidth);
        };
    }, []);

    return (
        <div>
            <Head title="Scheduler" />

            <LoggedIn auth={props.auth}></LoggedIn>
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto text-xl py-6 px-4 sm:px-6 lg:px-8">
                    {"Personaleinteilung"}
                </div>
            </header>
            {isMobile ? (
                <MobileSchedulerComponent
                    data={props.data}
                    projects={props.projects}
                    auth={props.auth}
                ></MobileSchedulerComponent>
            ) : (
                <SchedulerComponent
                    data={props.data}
                    projects={props.projects}
                ></SchedulerComponent>
            )}
        </div>
    );
}
