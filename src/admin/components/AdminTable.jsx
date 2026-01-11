import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import PropTypes from "prop-types";

function AdminTable({
  columns,
  rows,
  title,
  height = 400,
  pageSize = 10,
}) {
  return (
    <div style={{ padding: 16, backgroundColor: "#fff" }}>
      {title && (
        <h3 style={{ color: "#F9A825", marginBottom: 12 }}>
          {title}
        </h3>
      )}

      <div style={{ height, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          checkboxSelection
          pageSizeOptions={[5, 10, 25]}
          initialState={{
            pagination: {
              paginationModel: {
                page: 0,
                pageSize: pageSize,
              },
            },
          }}
          sx={{
            border: "none",
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: "#FFD95A",
              fontWeight: 600,
            },
            "& .MuiDataGrid-row:hover": {
              backgroundColor: "#FFF3CD",
            },
          }}
        />
      </div>
    </div>
  );
}

AdminTable.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      field: PropTypes.string.isRequired,
      headerName: PropTypes.string.isRequired,
      width: PropTypes.number,
      flex: PropTypes.number,
    })
  ).isRequired,
  rows: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    })
  ).isRequired,
  title: PropTypes.string,
  height: PropTypes.number,
  pageSize: PropTypes.number,
};

export default AdminTable;
