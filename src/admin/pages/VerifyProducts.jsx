import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { Check, Close } from "@mui/icons-material";

import AdminTable from "../components/AdminTable";
import {
  getAllHoneyAdminAPI,
  updateHoneyStatusAdminAPI,
} from "../../services/allAPI";
import serverURL from "../../services/serverURL";

function VerifyProducts() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [open, setOpen] = useState(false);

  /* =========================
     FETCH ALL HONEY
  ========================= */
  useEffect(() => {
    fetchHoney();
  }, []);

  const fetchHoney = async () => {
    try {
      const token = sessionStorage.getItem("token");

      const reqHeader = {
        Authorization: `Bearer ${token}`,
      };

      const res = await getAllHoneyAdminAPI(reqHeader);

      const productArray = Array.isArray(res.data)
        ? res.data
        : res.data.data;

      const formattedProducts = productArray.map((product) => ({
        ...product,
        id: product._id,
        status: product.status || "pending", // safety
      }));

      setProducts(formattedProducts);
    } catch (error) {
      console.error("Failed to fetch honey:", error);
    }
  };

  /* =========================
     UPDATE STATUS (APPROVE / REJECT)
  ========================= */
  const handleVerify = async (id, status) => {
    try {
      const token = sessionStorage.getItem("token");

      const reqHeader = {
        Authorization: `Bearer ${token}`,
      };

      await updateHoneyStatusAdminAPI(id, status, reqHeader);

      // ✅ update status in UI (do NOT remove row)
      setProducts((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, status } : item
        )
      );
    } catch (error) {
      console.error(
        "Failed to update honey status:",
        error.response?.data || error.message
      );
    }
  };

  /* =========================
     VIEW DETAILS
  ========================= */
  const handleViewDetails = (product) => {
    setSelectedProduct(product);
    setOpen(true);
  };

  /* =========================
     TABLE COLUMNS
  ========================= */
  const columns = [
    { field: "id", headerName: "ID", width: 90 },

    { field: "name", headerName: "Product Name", width: 200 },

    {
      field: "seller",
      headerName: "Seller",
      width: 160,
      renderCell: (params) => {
        const row = params?.row;
        return (
          row?.seller?.name ||
          row?.sellerId?.username ||
          "Unknown"
        );
      },
    },

    {
      field: "status",
      headerName: "Status",
      width: 140,
      renderCell: (params) => {
        const status = params.row.status;

        if (status === "active") {
          return (
            <Chip
              label="Approved"
              color="success"
              size="small"
            />
          );
        }

        if (status === "inactive") {
          return (
            <Chip
              label="Rejected"
              color="error"
              size="small"
            />
          );
        }

        return (
          <Chip
            label="Pending"
            color="warning"
            size="small"
          />
        );
      },
    },

    {
      field: "actions",
      headerName: "Actions",
      width: 280,
      renderCell: (params) => {
        const status = params.row.status;

        return (
          <>
            <Button
              size="small"
              onClick={() =>
                handleViewDetails(params.row)
              }
            >
              View
            </Button>

            <Button
              size="small"
              color="success"
              startIcon={<Check />}
              disabled={status === "active"}
              onClick={() =>
                handleVerify(params.row.id, "active")
              }
              sx={{ ml: 1 }}
            >
              Approve
            </Button>

            <Button
              size="small"
              color="error"
              startIcon={<Close />}
              disabled={status === "inactive"}
              onClick={() =>
                handleVerify(params.row.id, "inactive")
              }
              sx={{ ml: 1 }}
            >
              Reject
            </Button>
          </>
        );
      },
    },
  ];

  return (
    <Box>
      <Typography
        variant="h4"
        gutterBottom
        fontWeight="bold"
        sx={{ color: "primary.main" }}
      >
        Verify Products
      </Typography>

      <AdminTable
        columns={columns}
        rows={products || []}
        title="Honey Verification"
      />

      {/* =========================
          DETAILS MODAL
      ========================= */}
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>Product Details</DialogTitle>

        <DialogContent>
          {selectedProduct && (
            <Box>
              <Typography sx={{ mb: 1 }}>
                <strong>Name:</strong>{" "}
                {selectedProduct.name}
              </Typography>

              <Typography sx={{ mb: 2 }}>
                <strong>Description:</strong>{" "}
                {selectedProduct.description}
              </Typography>

              <img
                src={`${serverURL}/uploads/${selectedProduct.image}`}
                alt="Product"
                style={{
                  width: "100%",
                  maxHeight: 250,
                  objectFit: "cover",
                  borderRadius: 8,
                }}
              />
            </Box>
          )}
        </DialogContent>

        <DialogActions>
          <Button onClick={() => setOpen(false)}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default VerifyProducts;
