import LoggedIn from '@/Components/LoggedIn';

export default function Dashboard(props) {
    return (
        <div>
            <LoggedIn auth={props.auth}></LoggedIn>
        </div>
    );
}
