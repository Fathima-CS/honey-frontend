import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Typography } from "@mui/material";

function AdminTable({
  columns = [],
  rows = [],
  title,
  height = 400,
  pageSize = 10,
}) {
  return (
    <Box
      sx={{
        p: 3,
        bgcolor: "#ffffff",
        borderRadius: 3,
        boxShadow: "0 8px 24px rgba(0,0,0,0.05)",
      }}
    >
      {title && (
        <Typography
          variant="h6"
          fontWeight={600}
          mb={2}
          sx={{ color: "#111827" }}
        >
          {title}
        </Typography>
      )}

      <Box sx={{ height, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSizeOptions={[5, 10, 25]}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize },
            },
          }}
          disableRowSelectionOnClick
          sx={{
            border: "none",
            fontSize: "0.95rem",

            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: "#f9fafb",
              color: "#374151",
              fontWeight: 600,
              borderBottom: "1px solid #e5e7eb",
            },

            "& .MuiDataGrid-row": {
              borderBottom: "1px solid #f1f5f9",
            },

            "& .MuiDataGrid-row:hover": {
              backgroundColor: "#f9fafb",
            },

            "& .MuiDataGrid-cell": {
              color: "#374151",
            },

            "& .MuiDataGrid-footerContainer": {
              borderTop: "1px solid #e5e7eb",
              backgroundColor: "#fafafa",
            },

            "& .MuiTablePagination-root": {
              color: "#374151",
            },
          }}
        />
      </Box>
    </Box>
  );
}

export default AdminTable;
