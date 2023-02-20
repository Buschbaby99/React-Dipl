import React, { useState } from "react";
import { useEffect } from "react";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";
import AdminButton from "./UniversalButtonComponent";

const inputStyle = {
    width: "500px",
};

export default function AdminUpdate(props) {
    const [result, setResult] = useState("");
    let myVar;
    const [loading, setLoading] = useState(true);
    const urlSearchParams = new URLSearchParams(window.location.search);
    myVar = urlSearchParams.get("id");

    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        firstname: "",
        lastname: "",
        department: "",
        TelNr1: "",
        TelNr2: "",
        rank: "",
        country: "",
        zip: "",
        city: "",
        street: "",
        role: "",
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.post(`/api/editUser`, {
                    id: myVar,
                });
                console.log(response.data);

                setResult(response.data);
                setData({
                    id: myVar,
                    name: response.data.user.name,
                    email: response.data.user.email,
                    role: response.data.user.role,

                    firstname: response.data.persons.firstname,
                    lastname: response.data.persons.lastname,
                    department: response.data.persons.department,
                    TelNr1: response.data.persons.TelNr1,
                    TelNr2: response.data.persons.TelNr2,
                    rank: response.data.persons.rank,
                    personAddress_id: response.data.persons.personAddress_id,

                    country: response.data.address.country,
                    zip: response.data.address.ZIP,
                    city: response.data.address.city,
                    street: response.data.address.street,
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

    const handleChange = (event) => {
        setData(event.target.name, event.target.value);
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
                                value="Username"
                            />

                            <TextInput
                                id="name"
                                name="name"
                                value={data.name}
                                className="mt-1 block w-full"
                                autoComplete="name"
                                isFocused={true}
                                handleChange={handleChange}
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
                                forInput="email"
                                value="Email"
                            />

                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="mt-1 block w-full"
                                autoComplete="username"
                                handleChange={handleChange}
                                required
                            />

                            <InputError
                                message={errors.email}
                                className="mt-2"
                            />
                        </div>

                        <div style={inputStyle}>
                            <InputLabel
                                className="mt-4"
                                forInput="firstname"
                                value="Vorname"
                            />

                            <TextInput
                                id="firstname"
                                name="firstname"
                                value={data.firstname}
                                className="mt-1 block w-full"
                                autoComplete="firstname"
                                isFocused={true}
                                handleChange={handleChange}
                                required
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
                                value="Nachname"
                            />

                            <TextInput
                                id="lastname"
                                name="lastname"
                                value={data.lastname}
                                className="mt-1 block w-full"
                                autoComplete="lastname"
                                handleChange={handleChange}
                                required
                            />

                            <InputError
                                message={errors.lastname}
                                className="mt-2"
                            />
                        </div>

                        <div style={inputStyle}>
                            <InputLabel
                                className="mt-4"
                                forInput="department"
                                value="Abteilung"
                            />

                            <TextInput
                                id="department"
                                name="department"
                                value={data.department}
                                className="mt-1 block w-full"
                                autoComplete="department"
                                handleChange={handleChange}
                            />

                            <InputError
                                message={errors.department}
                                className="mt-2"
                            />
                        </div>
                        <div style={inputStyle}>
                            <InputLabel
                                className="mt-4"
                                forInput="TelNr1"
                                value="Telefonnummer 1"
                            />

                            <TextInput
                                id="TelNr1"
                                name="TelNr1"
                                value={data.TelNr1}
                                className="mt-1 block w-full"
                                autoComplete="TelNr1"
                                handleChange={handleChange}
                                required
                            />

                            <InputError
                                message={errors.TelNr1}
                                className="mt-2"
                            />
                        </div>
                        <div style={inputStyle}>
                            <InputLabel
                                className="mt-4"
                                forInput="TelNr2"
                                value="Telefonnummer 2"
                            />

                            <TextInput
                                id="TelNr2"
                                name="TelNr2"
                                value={data.TelNr2}
                                className="mt-1 block w-full"
                                autoComplete="TelNr2"
                                handleChange={handleChange}
                                required
                            />

                            <InputError
                                message={errors.TelNr2}
                                className="mt-2"
                            />
                        </div>

                        <div style={inputStyle}>
                            <InputLabel
                                className="mt-4"
                                forInput="role"
                                value="Role"
                            />

                            <TextInput
                                id="role"
                                name="role"
                                value={data.role}
                                className="mt-1 block w-full"
                                autoComplete="role"
                                handleChange={handleChange}
                                required
                            />

                            <InputError
                                message={errors.role}
                                className="mt-2"
                            />
                        </div>

                        <div style={inputStyle}>
                            <InputLabel
                                className="mt-4"
                                forInput="country"
                                value="Country"
                            />

                            <TextInput
                                id="country"
                                name="country"
                                value={data.country}
                                className="mt-1 block w-full"
                                autoComplete="country"
                                handleChange={handleChange}
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
                                handleChange={handleChange}
                                required
                            />

                            <InputError message={errors.zip} className="mt-2" />
                        </div>

                        <div style={inputStyle}>
                            <InputLabel
                                className="mt-4"
                                forInput="city"
                                value="City"
                            />

                            <TextInput
                                id="city"
                                name="city"
                                value={data.city}
                                className="mt-1 block w-full"
                                autoComplete="city"
                                handleChange={handleChange}
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
                                value="Street"
                            />

                            <TextInput
                                id="street"
                                name="street"
                                value={data.street}
                                className="mt-1 block w-full"
                                autoComplete="street"
                                handleChange={handleChange}
                                required
                            />

                            <InputError
                                message={errors.street}
                                className="mt-2"
                            />
                        </div>

                        <div className="flex justify-center align-center p-5">
                            <AdminButton
                                type="submit"
                                href="myadmin"
                                text="Update"
                            ></AdminButton>
                            <div className="mx-2"></div>
                            <AdminButton
                                type="button"
                                href="myadmin"
                                text="Zurück"
                            ></AdminButton>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
