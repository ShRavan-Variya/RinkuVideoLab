import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import styled from "styled-components";

export default function DashImageData(props) {

  console.log(JSON.stringify(props.listImages));

  const columns = [
    { field: "image", headerName: "Image", sortable: false, width: 250, height: 100, renderCell: (params) => <ImgStyle src={params.value} /> },
    { field: "id", headerName: "ID", width: 350 },
    { field: "imageName", headerName: "Image Name", width: 180 },
    { field: "created_at", headerName: "created_at", sortable: false, width: 220 },
    { field: "updated_at", headerName: "updated_at", sortable: false, width: 220 },
  ];

  return (
    <div
      className="flex"
      style={{ height: "40%", width: "100%", overflowY: "hidden", marginTop: 25 }}
    >
      <DataGrid
        rows={props.listImages}
        columns={columns}
        rowHeight={100}
        hideFooter
      />
    </div>
  );
}

const ImgStyle = styled.img`
  width: 240px;
  height: 80px;
  border-radius: 20px;
`;
