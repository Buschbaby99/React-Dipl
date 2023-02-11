
import React from 'react'
import LoggedIn from '@/Components/LoggedIn';
import { Head } from '@inertiajs/react';
import AdminInsertPage2 from '../Components/AdminInsertPage2';


export default function adminInsertPage(props) {
  return (
    <div>
        <Head title="AdminInsertPage" />
        <LoggedIn auth={props.auth}></LoggedIn>
        <AdminInsertPage2></AdminInsertPage2>
    </div>
  )
}
