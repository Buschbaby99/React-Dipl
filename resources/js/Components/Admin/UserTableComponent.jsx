import React from 'react';
import axios from 'axios';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


export default function AdminTable(props) {
  console.log(JSON.parse(props.props[0]));

  const handleDelete = (id, name) => {
    if (window.confirm(`Möchten Sie den Benutzer ${name} wirklich löschen?`)) {
      axios
        .post(`/api/deleteUser`, { id })
        .then((response) => {
          alert(`Benutzer ${name} wurde erfolgreich gelöscht.`);
          setIsReloaded(true);
        })
        .catch((error) => {
          console.error(error);
          alert(`Beim Löschen des Benutzers ${name} ist ein Fehler aufgetreten.`);
        });
    }
  };

  return (
    <div className="table-responsive">
      <div className="w-full overflow-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="hidden md:table-cell px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase">
                ID
              </th>
              <th scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase">
                Name
              </th>
              <th scope="col" className="hidden md:table-cell px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase">
                Email
              </th>
              <th scope="col" className="hidden md:table-cell px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase">
                Role
              </th>
              <th scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase">
                Edit
              </th>
              <th scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase">
                Delete
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {JSON.parse(props.props[0]).map(({ id, name, email, role }) => (
              <tr key={id}>
                <td name="id" className="hidden md:table-cell px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                  {id}
                </td>
                <td name="name" className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                  {name}
                </td>
                <td name="email" className="hidden md:table-cell px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                  {email}
                </td>
                <td name="role" className="hidden md:table-cell px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                  {role}
                </td>
                <td className="px-6 py-4 text-sm font-medium text-left whitespace-nowrap">
                  <a className="text-green-500 hover:text-green-700" href={`AdminUpdatePage?id=${id}`}>
                    <EditIcon />
                  </a>
                </td>
                <td className="px-6 py-4 text-sm font-medium text-left whitespace-nowrap">
<a
className="text-red-500 hover:text-red-700"
href="#"
onClick={() => handleDelete(id, name)}
>
<DeleteForeverIcon />
</a>
</td>
</tr>
))}
</tbody>
</table>
</div>
</div>
);
}
