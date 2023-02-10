import React from "react";




export default function AdminTable(props) {
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
                                        Name
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                    >
                                        Email
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                    >
                                        Role
                                    </th>
                                    <td className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase">
                                        <a
                                            className="text-black-500 hover:text-green-700"
                                            href="#"
                                        >
                                            Edit
                                        </a>
                                    </td>
                                    <td className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase">
                                        <a
                                            className="text-black-500 hover:text-red-700"
                                            href="#"
                                        >
                                            Delete
                                        </a>
                                    </td>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                  {JSON.parse(props.props[0]).map(({ id, name, email,role }) => (
                                    <tr key={id}>
                                      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">{id}</td>
                                      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">{name}</td>
                                      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">{email}</td>
                                      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">{role}</td>
                                      <td className="px-6 py-4 text-sm font-medium text-left whitespace-nowrap">
                                        <a
                                            className="text-green-500 hover:text-green-700"
                                            href="#"
                                        >
                                            Edit
                                        </a>
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium text-left whitespace-nowrap">
                                        <a
                                            className="text-red-500 hover:text-red-700"
                                            href="#"
                                        >
                                            Delete
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