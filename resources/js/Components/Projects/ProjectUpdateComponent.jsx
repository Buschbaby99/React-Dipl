import React, { useState } from "react";
import { useEffect } from "react";
import InputError from "@/Components/Inputs/InputError";
import InputLabel from "@/Components/Inputs/InputLabel";
import TextInput from "@/Components/Inputs/TextInput";
import { useForm } from "@inertiajs/react";
import UniversalButton from "../Buttons/UniversalButtonComponent";
import Datepicker from "react-tailwindcss-datepicker";

const inputStyle = {
    width: "500px",
};

export default function ProjectUpdateComponent(props) {
    const [result, setResult] = useState("");
    let myVar;
    const [loading, setLoading] = useState(true);
    const urlSearchParams = new URLSearchParams(window.location.search);
    myVar = urlSearchParams.get("id");

    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        project_number: "",
        startDate: "",
        endDate: "",
        description: "",
        street: "",
        zip: "",
        city: "",
        country: "",
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.post(`/api/editProject`, {
                    id: myVar,
                });
                console.log(response.data);

                setResult(response.data);
                setData({
                    id: myVar,
                    name: response.data.project.name,
                    project_number: response.data.project.project_number,
                    description: response.data.project.description,
                    startDate: response.data.project.startDate,
                    endDate: response.data.project.endDate,
                    street: response.data.projectAddress.street,
                    zip: response.data.projectAddress.ZIP,
                    city: response.data.projectAddress.city,
                    country: response.data.projectAddress.country,
                });
            } catch (error) {
                console.error("Fehler beim Laden der Daten:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [myVar]);

    const handleSubmit = (event) => {
        event.preventDefault();
        axios
            .post("/api/updateProject", data)
            .then(() => {
            window.location.href="ProjectHome"

            })
            .catch((error) => {
                console.log("ERROR:: ", error.response.data);
            });
    };

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

    if (loading) {
        return <div>Laden...</div>;
    }

    return (
        <>
            <div>
                <div className="flex justify-center align-center p-12">
                    <form onSubmit={handleSubmit}>
                        <div style={inputStyle}>
                            <InputLabel
                                className="mt-4"
                                forInput="name"
                                value="Projektname"
                            />

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

                            <InputError
                                message={errors.name}
                                className="mt-2"
                            />
                        </div>

                        <div style={inputStyle}>
                            <InputLabel
                                className="mt-4"
                                forInput="project_number"
                                value="Projektnummer"
                            />

                            <TextInput
                                id="project_number"
                                name="project_number"
                                value={data.project_number}
                                className="mt-1 block w-full"
                                autoComplete="project_number"
                                handleChange={onHandleChange}
                                required
                            />

                            <InputError
                                message={errors.project_number}
                                className="mt-2"
                            />
                        </div>

                        <div style={inputStyle}>
                            <InputLabel
                                className="mt-4"
                                forInput="country"
                                value="Land"
                            />

                            <TextInput
                                id="country"
                                name="country"
                                value={data.country}
                                className="mt-1 block w-full"
                                autoComplete="country"
                                handleChange={onHandleChange}
                                required
                            />

                            <InputError
                                message={errors.country}
                                className="mt-2"
                            />
                        </div>

                        <div style={inputStyle}>
                            <InputLabel
                                className="mt-4"
                                forInput="zip"
                                value="Postleitzahl"
                            />

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
                            <InputLabel
                                className="mt-4"
                                forInput="city"
                                value="Ort"
                            />

                            <TextInput
                                id="city"
                                name="city"
                                value={data.city}
                                className="mt-1 block w-full"
                                autoComplete="city"
                                handleChange={onHandleChange}
                                required
                            />

                            <InputError
                                message={errors.city}
                                className="mt-2"
                            />
                        </div>
                        <div style={inputStyle}>
                            <InputLabel
                                className="mt-4"
                                forInput="street"
                                value="Straße"
                            />

                            <TextInput
                                id="street"
                                name="street"
                                value={data.street}
                                className="mt-1 block w-full"
                                autoComplete="street"
                                handleChange={onHandleChange}
                                required
                            />

                            <InputError
                                message={errors.street}
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

                        <div style={inputStyle}>
                            <InputLabel
                                className="mt-4"
                                forInput="beschreibung"
                                value="Beschreibung"
                            />

                            <textarea
                                id="description"
                                name="description"
                                value={data.description}
                                className="mt-1 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm "
                                autoComplete="description"
                                onChange={onHandleChange}
                                required
                                rows={4}
                            ></textarea>
                        </div>

                        <div className="flex justify-center align-center p-5">
                            <UniversalButton
                                type="submit"
                               
                                text="Update"
                            ></UniversalButton>
                            <div className="mx-2"></div>
                            <UniversalButton
                                type="button"
                                href="ProjectHome"
                                text="Zurück"
                            ></UniversalButton>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
