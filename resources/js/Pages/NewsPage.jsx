import React from 'react'
import LoggedIn from '../Components/ChangeNavbarComponent'
import { Head } from '@inertiajs/react';

export default function news(props) {
  return (
    <div>
        <Head title="News" />
        <LoggedIn auth={props.auth}></LoggedIn>
        
    </div>
  )
}
