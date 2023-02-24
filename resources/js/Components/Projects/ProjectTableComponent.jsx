import React from "react";
import axios from "axios";
import { useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


export default function ProjectTable(props) {

   
    const [result, setResult] = useState('');

    const handleDelete = (id, name) => {
        if (window.confirm(`Möchten Sie das Projekt ${name} wirklich löschen?`)){ 
            axios.post(`/api/deleteProject`, {id})
            .then(response => {
                alert(`Projekt ${name} wurde erfolgreich gelöscht.`);
                window.location.reload();
            })
            .catch(error => {
                console.error(error);
                alert(`Beim Löschen des Projekts ${name} ist ein Fehler aufgetreten.`);
            });
        }
    };

    return (
        <div className="flex flex-col">
            <div className="overflow-x-auto">
                <div className="p-1.5 w-full inline-block align-middle">
                    <div className="overflow-hidden border rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                    >
                                        ID
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                    >
                                        Projektnummer
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                    >
                                        Projektname
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                    >
                                     Startdatum 
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                    >
                                        Enddatum 
                                    </th>
                                    <td className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase">
                                        <a
                                        >
                                            Edit
                                        </a>
                                    </td>
                                    <td className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase">
                                        <a
                                        >
                                            Delete
                                        </a>
                                    </td>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                  {JSON.parse(props.props[0]).map(({ id, project_number, name, startDate,endDate }) => (
                                    <tr key={id}>
                                        <td name="id" className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">{id}</td>
                                      <td name="project_number" className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">{project_number}</td>
                                      <td name="name" className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">{name}</td>
                                      <td name="email" className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">{startDate}</td>
                                      <td name="role" className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">{endDate}</td>
                                      <td className="px-6 py-4 text-sm font-medium text-left whitespace-nowrap">
                                        <a
                                            className="text-green-500 hover:text-green-700"
                                            href={`ProjectUpdatePage?id=${id}`}
                                        >
                                            <EditIcon></EditIcon>
                                        </a>
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium text-left whitespace-nowrap">
                                        <a
                                            className="text-red-500 hover:text-red-700"
                                            href="#"
                                            onClick={() => handleDelete(id, name)}
                                        >
                                            <DeleteForeverIcon></DeleteForeverIcon>
                                        </a>
                                    </td>
                                    </tr>
                                  ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}