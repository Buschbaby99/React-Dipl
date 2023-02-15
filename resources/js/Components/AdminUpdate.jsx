import React, { useState } from 'react';
import { useEffect } from 'react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import AdminBackButton from './AdminBackButton';

const inputStyle = {
  width: '500px'
};

export default function AdminUpdate(props) {
  const [result, setResult] = useState('');
  let myVar;
  const [loading, setLoading] = useState(true);
  const urlSearchParams = new URLSearchParams(window.location.search);
  myVar = urlSearchParams.get('id');

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

/*
    axios.post(`/editUser`, {id: myVar})
    .then((response) => {
        setResult(response.data);
    }); 
*/
    //console.log("klesdfklsafv");
    //console.log(result.user.name);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.post(`/editUser`, { id: myVar });
            setResult(response.data);
            setData({
              id: myVar,
              name: response.data.user.name,
              email: response.data.user.email,
              firstname: response.data.persons.firstname,
              lastname: response.data.persons.lastname,
              department: response.data.persons.department,
              TelNr1: response.data.persons.TelNr1,
              TelNr2: response.data.persons.TelNr2,
              rank: response.data.persons.rank,
            });
          } catch (error) {
            console.error('Fehler beim Laden der Daten:', error);
          } finally {
            setLoading(false);
          }
        };
        fetchData();
      }, [myVar]);
      


      const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('/updateUser', data)
        .then(() => {
            alert("klsaklsfcsc");
            }
            )
        .catch(error => {
            console.log("ERROR:: ",error.response.data);
        });
    }
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
                  <InputLabel className="mt-4" forInput="name" value="Username" />
    
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
                            handleChange={handleChange}
                            required
                        />

                        <InputError message={errors.email} className="mt-2" />
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
                            handleChange={handleChange}
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
                            handleChange={handleChange}
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
                            handleChange={handleChange}
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
                            handleChange={handleChange}
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
                            handleChange={handleChange}
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
                            handleChange={handleChange}
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
