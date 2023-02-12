import React, { useState } from 'react'
import { useEffect } from 'react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import AdminBackButton from './AdminBackButton';


const inputStyle = {
    width: '500px'
}

export default function AdminInputInsert() {

    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('/insertUser2', data)
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
            <div className="flex justify-center align-center p-12">
                <form  onSubmit={handleSubmit}>
                    <div style={inputStyle}>
                        <InputLabel forInput="name" value="Name" />

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
                        <InputLabel forInput="email" value="Email" />

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
                        <InputLabel forInput="password" value="Password" />

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
                        <InputLabel forInput="password_confirmation" value="Confirm Password" />

                        <TextInput
                            id="password_confirmation"
                            type="password"
                            name="password_confirmation"
                            value={data.password_confirmation}
                            className="mt-1 block w-full"
                            handleChange={onHandleChange}
                            required
                        />

                        <InputError message={errors.password_confirmation} className="mt-2" />
                    </div>

                    <div className="flex justify-center align-center p-5">
                        <PrimaryButton processing={processing}>
                            Register
                        </PrimaryButton>
                    </div>
                </form>
            </div>
            <AdminBackButton></AdminBackButton>
        </>
        )
}
