
import React from 'react'
import LoggedIn from '@/Components/ChangeNavbarComponent';
import { Head } from '@inertiajs/react';
import ProjectUpdateComponent from '../../Components/Projects/ProjectUpdateComponent';


export default function adminInsertPage(props) {


  return (
    <div>
        <Head title="AdminUpdatePage" />
        <LoggedIn auth={props.auth}></LoggedIn>
        <ProjectUpdateComponent name={props}></ProjectUpdateComponent>
    </div>
  )
}
