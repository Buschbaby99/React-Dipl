
import React from 'react'
import LoggedIn from '@/Components/LoggedIn';
import { Head } from '@inertiajs/react';
import InsertProject from '../Components/InsertProject';


export default function projectInsertPage(props) {


  return (
    <div>
        <Head title="ProjectInsertPage" />
        <LoggedIn auth={props.auth}></LoggedIn>
        <InsertProject name={props}></InsertProject>
    </div>
  )
}
