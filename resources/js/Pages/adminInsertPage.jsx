
import React from 'react'
import LoggedIn from '@/Components/LoggedIn';
import { Head } from '@inertiajs/react';
import AdminInputInsertUser from '../Components/AdminInputInsertUser';
import AdminButton from "../Components/UniversalButtonComponent"


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
