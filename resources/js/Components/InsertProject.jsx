import React, { useState } from 'react'
import { useEffect } from 'react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import AdminBackButton from './AdminBackButton';

import Datepicker from "react-tailwindcss-datepicker";

const inputStyle = {
    width: '500px'
}

export default function InsertProject(props) {

    const [value, setValue] = useState({
        startDate: new Date(),
        endDate: new Date().setMonth(11)
    });

    const handleValueChange = (newValue) => {

        setValue(newValue);
        data.startDate = newValue.startDate;
        data.endDate = newValue.endDate;
        console.log("newValue:", data.endDate);
    }
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        project_number: '',
        startDate: '',
        endDate: '',
        description: '',
        projectAddress_Id: '',
      

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

    console.log(data);

    const onHandleChange = (event, newValue) => {
        setData(event.target.name, event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('/insertProject', data)
            .then(() => {
                alert("User: " + JSON.stringify(data.name) + "wurde angelegt!");
                reset();
            }
            )
            .catch(error => {
                console.log("ERROR:: ", error.response.data);
            });
    }


    return (
        <>
            <div>
                <div className="flex justify-center align-center p-12">
                    <form onSubmit={handleSubmit}>
                        <div style={inputStyle}>
                            <InputLabel className="mt-4" forInput="name" value="Projektname" />

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
                            <InputLabel className="mt-4" forInput="project_number" value="Projektnummer" />

                            <TextInput
                                id="project_number"
                                type="project_number"
                                name="project_number"
                                value={data.email}
                                className="mt-1 block w-full"
                                autoComplete="project_number"
                                handleChange={onHandleChange}
                                required
                            />

                            <InputError message={errors.project_number} className="mt-2" />
                        </div>

                        <div style={inputStyle}>
                            <InputLabel className="mt-4" forInput="description" value="Beschreibung" />

                            <TextInput
                                id="description"
                                type="description"
                                name="description"
                                value={data.description}
                                className="mt-1 block w-full"
                                autoComplete="description"
                                handleChange={onHandleChange}
                                required
                            />

                            <InputError message={errors.description} className="mt-2" />
                        </div>



                            <div>
                                <Datepicker
                                    value={value}
                                    onChange={handleValueChange}
                                />
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



