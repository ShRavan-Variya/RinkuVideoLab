import React, { useRef } from "react";
import { DataGrid } from "@mui/x-data-grid";
import styled from "styled-components";
import { Button } from "@mui/material";

export default function DashImageData(props) {
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = (e, id) => {
    // const file = e.target.files[0];
    props.uploadData(fileInputRef, id);
  };

  const columns = [
    {
      field: "image",
      headerName: "Image",
      sortable: false,
      width: 250,
      ediable: true,
      height: 100,
      renderCell: (params) => (
        <div>
          <ImgStyle src={params.value} />
        </div>
      )
    },
    // { field: "id", headerName: "ID", width: 350 },
    { field: "imageName", headerName: "Image Name", width: 180, sortable: false },
    { field: "created_at", headerName: "created_at", sortable: false, width: 220 },
    { field: "updated_at", headerName: "updated_at", sortable: false, width: 220 },
    {
      field: "Update", headerName: " ", sortable: false, width: 220,
      renderCell: (params) => (
        <div>
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: 'none' }}
            onChange={(e) => handleImageChange(e,  params.row.id)}
            accept="image/*"
          />
          <Button
            variant="contained"
            size="small"
            style={{ marginLeft: 16 }}
            tabIndex={params.hasFocus ? 0 : -1}
            onClick={handleButtonClick}
          >
            Update
          </Button>
        </div>
      )
    },
  ];

  return (
    <div
      className="flex"
      style={{ height: "40%", width: "100%", overflowY: "hidden", marginTop: 25 }}
    >
      <DataGrid
        disableColumnMenu
        rows={props.listImages}
        getRowId={(row) => row.id}
        columns={columns}
        rowHeight={100}
        hideFooter
      />
    </div>
  );
}

const ImgStyle = styled.img`
  max-width: 240px;
  max-height: 100%;
`;
