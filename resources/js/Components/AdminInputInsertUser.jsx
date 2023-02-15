import React, { useState } from 'react'
import { useEffect } from 'react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import AdminBackButton from './AdminBackButton';
import { useLocation } from 'react-router-dom';


const inputStyle = {
    width: '500px'
}

export default function AdminInputInsert(props) {


    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        firstname: '',
        lastname: '',
        department: '',
        TelNr1: '',
        TelNr2: '',
        rank: '',
    });

    //console.log(result);
/*
    useEffect(() => {
        axios.post('/editUser')
            .then(response => {
                setUser(response.data.user);
                setPersons(response.data.persons);
            })
            .catch(error => {
                console.error(error);
            });
    }, [props.id]);
*/
    console.log(props);
    //console.log(persons);

   // console.log(data);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('/insertUser', data)
        .then(() => {
                alert("User: " + JSON.stringify(data.name) + "wurde angelegt!");
                reset();
            }
            )
        .catch(error => {
            console.log("ERROR:: ",error.response.data);
        });
    }
    

    return (
        <>
        <div>
            <div className="flex justify-center align-center p-12">
                <form  onSubmit={handleSubmit}>
                    <div style={inputStyle}>
                        <InputLabel className="mt-4" forInput="name" value="Username" />

                        <TextInput
                            id="name"
                            name="name"
                            value={data.name}
                            className="mt-1 block w-full"
                            autoComplete="name"
                            isFocused={true}
                            handleChange={onHandleChange}
                            required
                        />

                        <InputError message={errors.name} className="mt-2" />
                    </div>

                    <div style={inputStyle}>
                        <InputLabel className="mt-4" forInput="email" value="Email" />

                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full"
                            autoComplete="username"
                            handleChange={onHandleChange}
                            required
                        />

                        <InputError message={errors.email} className="mt-2" />
                    </div>

                    <div style={inputStyle}>
                        <InputLabel className="mt-4" forInput="password" value="Passwort" />

                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            className="mt-1 block w-full"
                            autoComplete="new-password"
                            handleChange={onHandleChange}
                            required
                        />

                        <InputError message={errors.password} className="mt-2" />
                    </div>
                    <div style={inputStyle}>
                        <InputLabel className="mt-4" forInput="firstname" value="Vorname" />

                        <TextInput
                            id="firstname"
                            name="firstname"
                            value={data.firstname}
                            className="mt-1 block w-full"
                            autoComplete="firstname"
                            isFocused={true}
                            handleChange={onHandleChange}
                            required
                        />

                        <InputError message={errors.firstname} className="mt-2" />
                    </div>

                    <div style={inputStyle}>
                        <InputLabel className="mt-4" forInput="lastname" value="Nachname" />

                        <TextInput
                            id="lastname"
                            name="lastname"
                            value={data.lastname}
                            className="mt-1 block w-full"
                            autoComplete="lastname"
                            handleChange={onHandleChange}
                            required
                        />

                        <InputError message={errors.lastname} className="mt-2" />
                    </div>

                    <div style={inputStyle}>
                        <InputLabel className="mt-4" forInput="department" value="Abteilung" />

                        <TextInput
                            id="department"
                            name="department"
                            value={data.department}
                            className="mt-1 block w-full"
                            autoComplete="department"
                            handleChange={onHandleChange}
                            required
                        />

                        <InputError message={errors.department} className="mt-2" />
                    </div>
                    <div style={inputStyle}>
                        <InputLabel className="mt-4" forInput="TelNr1" value="Telefonnummer 1" />

                        <TextInput
                            id="TelNr1"
                            name="TelNr1"
                            value={data.TelNr1}
                            className="mt-1 block w-full"
                            autoComplete="TelNr1"
                            handleChange={onHandleChange}
                            required
                        />

                        <InputError message={errors.TelNr1} className="mt-2" />
                    </div>
                    <div style={inputStyle}>
                        <InputLabel className="mt-4" forInput="TelNr2" value="Telefonnummer 2" />

                        <TextInput
                            id="TelNr2"
                            name="TelNr2"
                            value={data.TelNr2}
                            className="mt-1 block w-full"
                            autoComplete="TelNr2"
                            handleChange={onHandleChange}
                            required
                        />

                        <InputError message={errors.TelNr2} className="mt-2" />
                    </div>

                    <div style={inputStyle}>
                        <InputLabel className="mt-4" forInput="rank" value="Rang" />

                        <TextInput
                            id="rank"
                            name="rank"
                            value={data.rank}
                            className="mt-1 block w-full"
                            autoComplete="rank"
                            handleChange={onHandleChange}
                            required
                        />

                        <InputError message={errors.rank} className="mt-2" />
                    </div>

                    <div className="flex justify-center align-center p-5">
                        <PrimaryButton processing={processing}>
                            Register
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </div>
            <AdminBackButton></AdminBackButton>
        </>
        )
}



