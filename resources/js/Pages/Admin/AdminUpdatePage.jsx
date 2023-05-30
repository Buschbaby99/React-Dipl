import React from "react";
import LoggedIn from "@/Components/ChangeNavbarComponent";
import { Head } from "@inertiajs/react";
import AdminUpdateUser from "../../Components/Admin/UserUpdateComponents";

export default function adminInsertPage(props) {
    return (
        <div>
            <Head title="AdminUpdatePage" />
            <LoggedIn auth={props.auth}></LoggedIn>
            <header className="bg-white shadow">
                <h1 className="max-w-7xl text-xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    Mitarbeiter bearbeiten
                </h1>
            </header>
            <AdminUpdateUser name={props}></AdminUpdateUser>
        </div>
    );
}
