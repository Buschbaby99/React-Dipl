
import React from 'react'
import LoggedIn from '@/Components/LoggedIn';
import { Head } from '@inertiajs/react';
import AdminInputInsertUser from '../Components/AdminInputInsertUser';


export default function adminInsertPage(props) {
  return (
    <div>
        <Head title="AdminInsertPage" />
        <LoggedIn auth={props.auth}></LoggedIn>
        <AdminInputInsertUser></AdminInputInsertUser>
    </div>
  )
}
