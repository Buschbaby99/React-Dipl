import AdminInputInsert from '@/Components/AdminInputInsert'
import React from 'react'
import LoggedIn from '@/Components/LoggedIn';
import { Head } from '@inertiajs/react';


export default function adminInsertPage(props) {
  return (
    <div>
        <Head title="AdminInsertPage" />
        <LoggedIn auth={props.auth}></LoggedIn>
        <AdminInputInsert></AdminInputInsert>
    </div>
  )
}
