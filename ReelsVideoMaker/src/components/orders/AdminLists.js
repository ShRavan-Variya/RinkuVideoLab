import React from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import userImage from "../../assets/img/userImage.jpg";

export default function AdminLists(props) {
  const columns = [
    { field: "id", headerName: "ID", width: 350 },
    { field: "userId", headerName: "User Name", width: 350 },
    { field: "password", headerName: "Password", width: 350 },
  ];

  return (
    <div
      className="flex"
      style={{ height: "87%", width: "100%", overflowY: "hidden" }}
    >
      <DataGrid
        rows={props.listOrder}
        columns={columns}
        pageSize={props.pageSize}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}
