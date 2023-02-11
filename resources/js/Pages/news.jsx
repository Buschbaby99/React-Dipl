import React from 'react'
import LoggedIn from '../Components/LoggedIn'
import { Head } from '@inertiajs/react';

export default function news(props) {
  return (
    <div>
        <Head title="News" />
        <LoggedIn auth={props.auth}></LoggedIn>
        <h1>Seite wird bearbeitet...</h1>
    </div>
  )
}
