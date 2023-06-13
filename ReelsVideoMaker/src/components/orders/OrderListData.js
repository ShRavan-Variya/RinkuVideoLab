import React, { useRef, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";

export default function OrderListData(props) {
  const fileInputRef = useRef(null);
  const [id, setId] = useState()

  const columns = [
    // { field: "id", headerName: "ID", width: 70 },
    { field: "userName", headerName: "User Name", width: 180 },
    { field: "projectName", headerName: "Project Name", width: 180 },
    { field: "title", headerName: "Title", sortable: false, width: 180 },
    { field: "notes", headerName: "Notes", sortable: false, width: 180 },
    { field: "song", headerName: "Song", sortable: false, width: 180 },
    // { field: "dataSize", headerName: "Data Size", width: 140 },
    { field: "payment", headerName: "Payment", width: 120 },
    { field: "orderDateTime", headerName: "Order Date Time", width: 220 },
    { field: "uploadingDateTime", headerName: "Uploading Date Time", sortable: false, width: 220 },
    { field: "status", headerName: "Status", sortable: false, width: 140 },
    { field: "downloadUserData", headerName: "Download", sortable: false, width: 160,
    renderCell: (params) => (
      <div>
        <Button
          variant="contained"
          size="small"
          style={{ marginLeft: 16 }}
          tabIndex={params.hasFocus ? 0 : -1}
          onClick={() => {
            props.onClickDownload(params.row)
          }}
        >
          Download
        </Button>
      </div>
    )},
    { field: "uploadData", headerName: "Upload", sortable: false, width: 140 ,
    renderCell: (params) => (
      <div>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: 'none' }}
          onChange={(e) => {
            if (fileInputRef && fileInputRef.current) {
              props.onClickUpload(fileInputRef, id);
            } else {
              alert("Try after some time!")
            }
          }}
          accept="video/mp4, video/mkv, video/avi"
        />
        <Button
          variant="contained"
          size="small"
          style={{ marginLeft: 16 }}
          tabIndex={params.hasFocus ? 0 : -1}
          onClick={() => {
            if (fileInputRef && fileInputRef.current) {
              setId(params.row.id)
              fileInputRef.current.click();
            } else {
              alert("Try after some time!")
            }
          }}
        >
          Upload
        </Button>
      </div>
    )}
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
