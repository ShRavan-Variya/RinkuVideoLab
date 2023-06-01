import React from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import userImage from "../../assets/img/userImage.jpg";

export default function AdminDashBoardData(props) {
  const columns = [
    { field: "userName", headerName: "User Name", width: 180 },
    { field: "projectName", headerName: "Project Name", width: 180 },
    { field: "title", headerName: "Title", sortable: false, width: 180 },
    { field: "notes", headerName: "Notes", sortable: false, width: 180 },
    { field: "song", headerName: "Song", sortable: false, width: 180 },
    { field: "payment", headerName: "Payment", width: 120 },
    { field: "orderDateTime", headerName: "Order Date Time", width: 220 },
    { field: "uploadingDateTime", headerName: "Uploading Date Time", sortable: false, width: 220 },
    { field: "status", headerName: "Status", sortable: false, width: 140 },
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
