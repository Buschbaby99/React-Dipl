import React, { useState } from 'react'
import InputError from '@/Components/Inputs/InputError';
import InputLabel from '@/Components/Inputs/InputLabel';
import TextInput from '@/Components/Inputs/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import AdminButton from '../Buttons/UniversalButtonComponent';
import DropdownForm from "../Inputs/DropdownForm";


const inputStyle = {
    width: '500px'
}

export default function AdminInputInsert(props) {

console.log(props)
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
        country: '',
        zip: '',
        city: '',
        street: '',
        role: '',

    });

    console.log(data);


    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('/api/insertUser', data)
            .then(() => {
                alert("User: " + JSON.stringify(data.name) + "wurde angelegt!");
                reset();

                window.location.href = 'AdminInsertPage';
            }
            )
            .catch(error => {
                console.log("ERROR:: ", error.response.data);
                console.log(data);
            });
    }


    return (
        <>
            <div>
                <div className="flex justify-center align-center p-12">
                    <form onSubmit={handleSubmit}>
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

                            <DropdownForm
                            
                        projects={props.name.department}
                        onHandleChange ={onHandleChange}
                     
                        value={data.department}
                        id ={"department"}
                        name={"department"}
                        autoComplete={"department"}
                        >

                        </DropdownForm>
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
                            <InputLabel className="mt-4" forInput="role" value="Role" />

                            <div className="relative mt-1">
                                <select
                                    id="role"
                                    name="role"
                                    value={data.role}
                                    onChange={onHandleChange}
                                    className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                                    required
                                >
                                    <option value="">Select a role</option>
                                    <option value="1">Admin</option>
                                    <option value="2">Manager</option>
                                    <option value="3">Mitarbeiter</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg className="fill-current h-4 w-4"  viewBox="0 0 20 20"><path d="M10 12l-6-6h12l-6 6z" /></svg>
                                </div>
                            </div>

                            <InputError message={errors.role} className="mt-2" />
                        </div>


                        <div style={inputStyle}>
                            <InputLabel className="mt-4" forInput="country" value="Country" />

                            <TextInput
                                id="country"
                                name="country"
                                value={data.country}
                                className="mt-1 block w-full"
                                autoComplete="country"
                                handleChange={onHandleChange}
                                required
                            />

                            <InputError message={errors.country} className="mt-2" />
                        </div>

                        <div style={inputStyle}>
                            <InputLabel className="mt-4" forInput="zip" value="Zip" />

                            <TextInput
                                id="zip"
                                name="zip"
                                value={data.zip}
                                className="mt-1 block w-full"
                                autoComplete="zip"
                                handleChange={onHandleChange}
                                required
                            />

                            <InputError message={errors.zip} className="mt-2" />
                        </div>

                        <div style={inputStyle}>
                            <InputLabel className="mt-4" forInput="city" value="City" />

                            <TextInput
                                id="city"
                                name="city"
                                value={data.city}
                                className="mt-1 block w-full"
                                autoComplete="city"
                                handleChange={onHandleChange}
                                required
                            />

                            <InputError message={errors.city} className="mt-2" />
                        </div>
                        <div style={inputStyle}>
                            <InputLabel className="mt-4" forInput="street" value="Street" />

                            <TextInput
                                id="street"
                                name="street"
                                value={data.street}
                                className="mt-1 block w-full"
                                autoComplete="street"
                                handleChange={onHandleChange}
                                required
                            />

                            <InputError message={errors.street} className="mt-2" />
                        </div>
                        <div className="flex justify-center align-center p-5">
                            <AdminButton type="submit" href='AdminInsertPage' text="Hinzufügen"></AdminButton>
                            <div className="mx-2"></div>
                            <AdminButton type="button" href='AdminHome' text="Zurück"></AdminButton>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}



