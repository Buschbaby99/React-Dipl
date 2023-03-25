
import React from 'react'
import LoggedIn from '@/Components/ChangeNavbarComponent';
import { Head } from '@inertiajs/react';
import ProjectUpdateComponent from '../../Components/Projects/ProjectUpdateComponent';


export default function adminInsertPage(props) {


  return (
    <div>
        <Head title="ProjectUpdate" />
        <LoggedIn auth={props.auth}></LoggedIn>
        <header className="bg-white shadow">
                    <h1 className="max-w-7xl text-xl mx-auto py-6 px-4 sm:px-6 lg:px-8">Projekte bearbeiten</h1>
                </header>
        <ProjectUpdateComponent name={props}></ProjectUpdateComponent>
    </div>
  )
}
