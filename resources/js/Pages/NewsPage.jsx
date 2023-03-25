import React from 'react'
import LoggedIn from '../Components/ChangeNavbarComponent'
import { Head } from '@inertiajs/react';
import NewsComponent from '@/Components/News/NewsComponent'

export default function news(props) {
  return (
    <div>
        <Head title="News" />
        
        <LoggedIn auth={props.auth}></LoggedIn>
        <header className="bg-white shadow">
                    <h1 className="max-w-7xl text-xl mx-auto py-6 px-4 sm:px-6 lg:px-8">News</h1>
                </header>
        <NewsComponent></NewsComponent>
    </div>
  )
}
