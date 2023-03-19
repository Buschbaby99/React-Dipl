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
    const { data, setData, post, processing, errors, reset } = useForm({
<<<<<<< HEAD
        staffingid: props.staffingid,
        personid: props.personid,
=======
        staffingid : props.staffingid,
        personid:props.personid,
>>>>>>> 8db94eae4a51212d4e651c034d6c7ce6dc2e7dfb

        firstname: props.firstname,
        lastname: props.lastname,
        projectName: "",
        startDate: props.startDate,
        endDate: props.endDate,
        description: "",
    });

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const [value, setValue] = useState({
        startDate: props.startDate,
        endDate: props.endDate,
    });
    

    const handleValueChange = (newValue) => {
        setValue(newValue);
        data.startDate = newValue.startDate;
        data.endDate = newValue.endDate;

        console.log("newValue:", data.endDate);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
<<<<<<< HEAD
        axios.post("/api/updateUser", data).then(() => {});
=======
        axios
            .post("/api/updateUser", data)
            .then(() => {
      
            })

          
>>>>>>> 8db94eae4a51212d4e651c034d6c7ce6dc2e7dfb
    };

    const handleInsert = (event) => {
        event.preventDefault();
        axios
            .post("/api/insertStaffing", data)
            .then(() => {
                window.location.href = "Scheduler";
            })
            .catch((error) => {});
    };

    return (
        <>
            <div>
                <div className="flex justify-center align-center p-12">
                    <form>
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
                    </form>
                </div>

                <div className="flex justify-center align-center">
                    <form onSubmit={handleInsert}>
                        <UniversalButton
                            type="submit"
                            text="Hinzufügen"
                        ></UniversalButton>
                    </form>
                </div>
            </div>
        </>
    );
}
