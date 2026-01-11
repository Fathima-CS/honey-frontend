import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Chip, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { Check, Close } from '@mui/icons-material';
import AdminTable from '../components/AdminTable';


function VerifyProducts() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    api.get('/admin/pending-products').then(setProducts);
  }, []);

  const handleVerify = (id, status) => {
    api.put(`/admin/products/${id}`, { status }).then(() => {
      setProducts(products.filter((p) => p.id !== id));
    });
  };

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
    setOpen(true);
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'name', headerName: 'Product Name', width: 200 },
    { field: 'seller', headerName: 'Seller', width: 150 },
    { field: 'status', headerName: 'Status', width: 100, renderCell: (params) => <Chip label={params.value} color="warning" /> },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 200,
      renderCell: (params) => (
        <>
          <Button size="small" onClick={() => handleViewDetails(params.row)}>View</Button>
          <Button size="small" startIcon={<Check />} onClick={() => handleVerify(params.row.id, 'verified')} sx={{ ml: 1 }}>
            Approve
          </Button>
          <Button size="small" startIcon={<Close />} onClick={() => handleVerify(params.row.id, 'rejected')} sx={{ ml: 1 }}>
            Reject
          </Button>
        </>
      ),
    },
  ];

  return (
    <Box>
      <Typography variant="h4" gutterBottom sx={{ color: 'primary.main' }}>
        Verify Products
      </Typography>
      <AdminTable columns={columns} rows={products} title="Pending Products" />

      <Dialog open={open} onClose={() => setOpen(false)} maxWidth="md" fullWidth>
        <DialogTitle>Product Details</DialogTitle>
        <DialogContent>
          {selectedProduct && (
            <Box>
              <Typography><strong>Name:</strong> {selectedProduct.name}</Typography>
              <Typography><strong>Description:</strong> {selectedProduct.description}</Typography>
              <img src={selectedProduct.image || '/assets/images/honey.jpg'} alt="Product" style={{ width: '100%', maxHeight: 200 }} />
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Close</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default VerifyProducts;