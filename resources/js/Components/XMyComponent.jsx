import React from 'react'
import { useEffect, useState } from 'react';
import InputError from '@/Components/Inputs/InputError';
import InputLabel from '@/Components/Inputs/InputLabel';
import PrimaryButton from '@/Components/Buttons/PrimaryButton';
import TextInput from '@/Components/Inputs/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import AdminBackButton from './XAdminBackButton';

export default function MyComponent() {
  const [data, setUserNumber] = useState(null);
    useEffect(() => {
        axios.get('/test').then((response) => {
                setUserNumber(response.data)
            })
            .catch(error => {
                console.error(error);
            });
    }, []);




 return (
    <div>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
