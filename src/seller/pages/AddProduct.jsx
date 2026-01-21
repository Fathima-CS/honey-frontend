import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  Divider,
} from "@mui/material";

import InventoryIcon from "@mui/icons-material/Inventory";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import PublicIcon from "@mui/icons-material/Public";
import DescriptionIcon from "@mui/icons-material/Description";
import ImageIcon from "@mui/icons-material/Image";
import NumbersIcon from "@mui/icons-material/Numbers";
import SaveIcon from "@mui/icons-material/Save";

import { addProductAPI } from "../../services/allAPI";

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    origin: "",
    stock: "",
    image: null,
    description: "",
  });
  console.log(product);
  const handleChange = (field, value) => {
    setProduct({ ...product, [field]: value });
  };

  const handleImageChange = (e) => {
    setProduct({ ...product, image: e.target.files[0] });
  };

  const handleSubmit = async () => {
    const token = sessionStorage.getItem("token");
    const reqHeader={
      Authorization: `Bearer ${token}`,
   }
    try {
      const formData = new FormData();
      formData.append("name", product.name);
      formData.append("price", product.price);
      formData.append("origin", product.origin);
      formData.append("stock", product.stock);
      formData.append("description", product.description);
      formData.append("image", product.image); // multer expects "image"

      await addProductAPI(formData,reqHeader);

      alert("Product added successfully");

      setProduct({
        name: "",
        price: "",
        origin: "",
        stock: "",
        image: null,
        description: "",
      });
    } catch (error) {
      console.error("Add product failed:", error);
      alert("Failed to add product");
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #91845b 0%, #F3E5AB 100%)",
        py: 6,
      }}
    >
      <Container maxWidth="md">
        <Card
          elevation={0}
          sx={{
            borderRadius: 5,
            boxShadow: "0 20px 45px rgba(0,0,0,0.15)",
            background: "linear-gradient(180deg,#FFFDF6,#FFF8E1)",
          }}
        >
          <CardContent sx={{ p: 5 }}>
            <Stack direction="row" spacing={1.5} alignItems="center" mb={3}>
              <InventoryIcon sx={{ color: "#8D6E3F" }} />
              <Typography variant="h4" fontWeight={800} sx={{ color: "#5B3A1C" }}>
                Add New Product
              </Typography>
            </Stack>

            <Divider sx={{ mb: 4 }} />

            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Product Name"
                  value={product.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  type="number"
                  label="Price (₹)"
                  value={product.price}
                  onChange={(e) => handleChange("price", e.target.value)}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  type="number"
                  label="Stock Quantity"
                  value={product.stock}
                  onChange={(e) => handleChange("stock", e.target.value)}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Origin"
                  value={product.origin}
                  onChange={(e) => handleChange("origin", e.target.value)}
                />
              </Grid>

              <Grid item xs={12}>
                <Button
                  variant="outlined"
                  component="label"
                  startIcon={<ImageIcon />}
                >
                  Upload Product Image
                  <input
                    type="file"
                    hidden
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                </Button>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  label="Product Description"
                  value={product.description}
                  onChange={(e) =>
                    handleChange("description", e.target.value)
                  }
                />
              </Grid>
            </Grid>

            <Box display="flex" justifyContent="flex-end" mt={5}>
              <Button
                size="large"
                startIcon={<SaveIcon />}
                onClick={handleSubmit}
                sx={{
                  px: 5,
                  py: 1.4,
                  borderRadius: 3,
                  fontWeight: 800,
                  background:
                    "linear-gradient(135deg,#FFB300,#FFD54F)",
                  color: "#3E2723",
                  "&:hover": {
                    background:
                      "linear-gradient(135deg,#FFA000,#FFCA28)",
                  },
                }}
              >
                Save Product
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default AddProduct;
