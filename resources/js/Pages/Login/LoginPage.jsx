import { Link, Head } from "@inertiajs/react";
import Login from "../Auth/Login";

export default function LoginPage(props) {
    return (
        <>
            <Head title="Login" />
            <Login></Login>
        </>
    );
}
