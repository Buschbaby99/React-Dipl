
import React from 'react'
import LoggedIn from '@/Components/ChangeNavbarComponent';
import { Head } from '@inertiajs/react';
import AdminInputInsertUser from '../../Components/Admin/InsertUserComponent';
import AdminButton from "../../Components/Buttons/UniversalButtonComponent"


export default function adminInsertPage(props) {

  console.log(props);

  return (
    <div>
        <Head title="AdminInsertPage" />
        <LoggedIn auth={props.auth}></LoggedIn>
        <AdminInputInsertUser name={props}></AdminInputInsertUser>
    </div>
  )
}
