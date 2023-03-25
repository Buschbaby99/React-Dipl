
import React from 'react'
import LoggedIn from '@/Components/ChangeNavbarComponent';
import { Head } from '@inertiajs/react';
import AdminUpdateUser from '../../Components/Admin/UserUpdateComponents';


export default function adminInsertPage(props) {


  return (
    <div>
        <Head title="AdminUpdatePage" />
        <LoggedIn auth={props.auth}></LoggedIn>
        <AdminUpdateUser name={props}></AdminUpdateUser>
    </div>
  )
}
