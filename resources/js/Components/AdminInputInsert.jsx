import React, { useState } from 'react'
import axios from 'axios'

export default function AdminInputInsert() {

    const inputStyle = {
        width: '500px'
    }

    const [inputs, setInputs] = useState({
        name: '',
        email: '',
        role: ''
    })

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
        axios.post('/insertUser', inputs)
        .then(
            response => alert(JSON.stringify(response.data))
            )
        .catch(error => {
            console.log("ERROR:: ",error.response.data);
            
            });
    }




    return (
        <>
            <form onSubmit={handleSubmit} className='pt-5'>
                <div>
                    <div className='p-2 flex justify-center'>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                            <input onChange={handleChange} style={inputStyle} type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required/>
                        </div>
                    </div>
                    <div className='p-2 flex justify-center'>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                            <input onChange={handleChange} style={inputStyle} type="text" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required/>
                        </div>
                    </div>
                    <div className='p-2 flex justify-center'>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Role</label>
                            <input onChange={handleChange} style={inputStyle} type="text" name="role" id="role" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required/>
                        </div>
                    </div> 
                </div>
                <div className='p-2 flex justify-center'>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Hinzufügen</button>
                </div>
            </form>
        </>
        )
}
