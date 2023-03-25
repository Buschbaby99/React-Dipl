
import React from 'react'
import LoggedIn from '@/Components/ChangeNavbarComponent';
import { Head } from '@inertiajs/react';
import AdminInputInsertUser from '../../Components/Admin/InsertUserComponent';
import AdminButton from "../../Components/Buttons/UniversalButtonComponent"


export default function adminInsertPage(props) {



  return (
    <div>
        <Head title="AdminInsertPage" />
        <LoggedIn auth={props.auth}></LoggedIn>
        <header className="bg-white shadow">
                    <h1 className="max-w-7xl text-xl mx-auto py-6 px-4 sm:px-6 lg:px-8">Mitarbeiter hinzufügen</h1>
                </header>
        <AdminInputInsertUser name={props}></AdminInputInsertUser>
    </div>
  )
}
