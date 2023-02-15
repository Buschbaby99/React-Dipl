
import React from 'react'
import LoggedIn from '@/Components/LoggedIn';
import { Head } from '@inertiajs/react';
import AdminUpdateUser from '../Components/AdminUpdate';


export default function adminInsertPage(props) {

  console.log(props);

  return (
    <div>
        <Head title="AdminUpdatePage" />
        <LoggedIn auth={props.auth}></LoggedIn>
        <AdminUpdateUser name={props}></AdminUpdateUser>
    </div>
  )
}
