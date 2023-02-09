import React from "react";
import Table from "./AdminTableStructur";


export default function UserTable(Input) {
    var dataArray= new Array();
    console.log(Input);
    dataArray.push(JSON.parse(Input[0]));
    console.log(dataArray);

    return (
        <div>
        <h1>User Table</h1>
        <Table data={dataArray} />
      </div>
    );
}
