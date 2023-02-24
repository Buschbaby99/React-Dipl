
import React from 'react'
import LoggedIn from '@/Components/LoggedIn';
import { Head } from '@inertiajs/react';
import ProjectUpdateComponent from '../Components/ProjectUpdateComponent';


export default function adminInsertPage(props) {


  return (
    <div>
        <Head title="AdminUpdatePage" />
        <LoggedIn auth={props.auth}></LoggedIn>
        <ProjectUpdateComponent name={props}></ProjectUpdateComponent>
    </div>
  )
}
