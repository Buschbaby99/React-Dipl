import React from "react";

const Table = ({ data }) => (

  
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>E-Mail</th>
        <th>Rolle</th>
      </tr>
    </thead>
    <tbody>
      {data.map(({ id, name, email, role }) => (
        <tr key={id}>
          <td>{id}</td>
          <td>{name}</td>
          <td>{email}</td>
          <td>{role}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default Table;
