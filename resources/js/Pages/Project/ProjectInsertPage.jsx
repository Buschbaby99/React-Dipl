import React from "react";
import LoggedIn from "@/Components/ChangeNavbarComponent";
import { Head } from "@inertiajs/react";
import InsertProject from "../../Components/Projects/InsertProjectComponent";

export default function projectInsertPage(props) {
    return (
        <div>
            <Head title="ProjectInsertPage" />
            <LoggedIn auth={props.auth}></LoggedIn>
            <header className="bg-white shadow">
                <h1 className="max-w-7xl text-xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    Projekte hinzufügen
                </h1>
            </header>
            <InsertProject name={props}></InsertProject>
        </div>
    );
}
