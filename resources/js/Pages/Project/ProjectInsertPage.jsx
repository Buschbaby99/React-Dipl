
import React from 'react'
import LoggedIn from '@/Components/ChangeNavbarComponent';
import { Head } from '@inertiajs/react';
import InsertProject from '../../Components/Projects/InsertProjectComponent';


export default function projectInsertPage(props) {


  return (
    <div>
        <Head title="ProjectInsertPage" />
        <LoggedIn auth={props.auth}></LoggedIn>
        <InsertProject name={props}></InsertProject>
    </div>
  )
}
