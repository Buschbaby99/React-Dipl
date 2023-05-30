import { Head } from "@inertiajs/react";
import LoggedIn from "@/Components/ChangeNavbarComponent";
import NotesProjectComponent from "../../Components/Projects/NotesProjectComponent";

export default function ProjectNotes(props) {
    return (
        <div>
            <Head title="ProjectNotes" />
            <LoggedIn auth={props.auth}></LoggedIn>
            <header className="bg-white shadow">
                <h1 className="max-w-7xl text-xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    Notizen
                </h1>
            </header>
            <NotesProjectComponent props={props}></NotesProjectComponent>
        </div>
    );
}
