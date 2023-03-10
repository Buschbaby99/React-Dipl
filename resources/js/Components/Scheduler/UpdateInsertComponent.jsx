import React, { useState } from "react";
import { useEffect } from "react";
import InputError from "@/Components/Inputs/InputError";
import InputLabel from "@/Components/Inputs/InputLabel";
import TextInput from "@/Components/Inputs/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";
import UniversalButton from "../Buttons/UniversalButtonComponent";
import Datepicker from "react-tailwindcss-datepicker";

const inputStyle = {
    width: "500px",
};

export default function ProjectUpdateComponent(props) {
    
console.log(props);

    const { data, setData, post, processing, errors, reset } = useForm({
        firstname: "",
        lastname: "",
        startDate: "",
        endDate: "",
        description: "",
       
    });

  

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const [value, setValue] = useState({
        startDate: new Date(),
        endDate: new Date().setMonth(11),
    });

    const handleValueChange = (newValue) => {
        setValue(newValue);
        data.startDate = newValue.startDate;
        data.endDate = newValue.endDate;
        console.log("newValue:", data.endDate);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        axios
            .post("/api/updateUser", data)
            .then(() => {
                alert(
                    data.firstname +
                        " " +
                        data.lastname +
                        " wurde erfolreich geändert"
                );
            })
            .catch((error) => {
                console.log("ERROR:: ", error.response.data);
            });
    };
   

    return (
        <>
            <div>
                <div className="flex justify-center align-center p-12">
                    <form onSubmit={handleSubmit}>
                       
   

                        <div style={inputStyle}>
                            <InputLabel
                                className="mt-4"
                                forInput="firstname"
                                value="Vorname"
                            />

                            <TextInput
                                id="firstname"
                                name="firstname"
                                value={props.firstname}
                                className="mt-1 block w-full"
                                autoComplete="firstname"
                                handleChange={onHandleChange}
                                locked={true}
                            />

                            <InputError
                                message={errors.firstname}
                                className="mt-2"
                            />
                        </div>

                        <div style={inputStyle}>
                            <InputLabel
                                className="mt-4"
                                forInput="lastname"
                                value="Zuname"
                            />

                            <TextInput
                                id="lastname"
                                name="lastname"
                                value={props.lastname}
                                className="mt-1 block w-full"
                                autoComplete="lastname"
                                handleChange={onHandleChange}
                                locked={true}
                            />

                            <InputError
                                message={errors.lastname}
                                className="mt-2"
                            />
                        </div>
                        <div style={inputStyle}>
                            <InputLabel
                                className="mt-4"
                                forInput="projektName"
                                value="Projektname"
                            />

                            <TextInput
                                id="projektName"
                                name="projektName"
                                value={props.projectName}
                                className="mt-1 block w-full"
                                autoComplete="projektName"
                                handleChange={onHandleChange}
                                locked={true}
                            />

                            <InputError
                                message={errors.projectName}
                                className="mt-2"
                            />
                        </div>
                        

                        


                        <div style={inputStyle}>
                            <InputLabel
                                className="mt-4"
                                forInput="datum"
                                value="Datum"
                            />
                            <Datepicker
                                value={value}
                                onChange={handleValueChange}
                            />
                        </div>

                    

                        <div className="flex justify-center align-center p-5">
                            <UniversalButton
                                type="submit"
                                href="Scheduler"
                                text="Update/Insert"
                            ></UniversalButton>
                            <div className="mx-2"></div>
                            <UniversalButton
                                type="submit"
                                href="Scheduler"
                                text="Delete"
                            ></UniversalButton>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
