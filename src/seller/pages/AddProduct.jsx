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



const AddProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    origin: "",
    stock: "",
    image: "",
    description: "",
  });

  const handleChange = (field, value) => {
    setProduct({ ...product, [field]: value });
  };

  const handleSubmit = () => {
    // Frontend-only submit
    console.log("Product Added:", product);
    alert("Product added successfully (frontend demo)");
  };

  return (
    <>
     

      {/* PAGE BACKGROUND */}
      <Box
        sx={{
          minHeight: "100vh",
          background:
            "linear-gradient(135deg, #FFF8E1 0%, #F3E5AB 100%)",
          py: 6,
        }}
      >
        <Container maxWidth="md">
          <Card elevation={5} sx={{ borderRadius: 4 }}>
            <CardContent sx={{ p: 4 }}>
              {/* HEADER */}
              <Stack direction="row" spacing={1.5} alignItems="center" mb={3}>
                <InventoryIcon color="primary" />
                <Typography variant="h4" fontWeight={700}>
                  Add New Product
                </Typography>
              </Stack>

              <Divider sx={{ mb: 3 }} />

              <Grid container spacing={3}>
                {/* Product Name */}
                <Grid size={{ xs: 12 }}>
                  <TextField
                    fullWidth
                    label="Product Name"
                    placeholder="Wild Forest Honey"
                    value={product.name}
                    onChange={(e) =>
                      handleChange("name", e.target.value)
                    }
                    InputProps={{
                      startAdornment: <InventoryIcon sx={{ mr: 1 }} />,
                    }}
                  />
                </Grid>

                {/* Price */}
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    fullWidth
                    label="Price (₹)"
                    type="number"
                    value={product.price}
                    onChange={(e) =>
                      handleChange("price", e.target.value)
                    }
                    InputProps={{
                      startAdornment: <CurrencyRupeeIcon sx={{ mr: 1 }} />,
                    }}
                  />
                </Grid>

                {/* Stock */}
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    fullWidth
                    label="Stock Quantity"
                    type="number"
                    value={product.stock}
                    onChange={(e) =>
                      handleChange("stock", e.target.value)
                    }
                    InputProps={{
                      startAdornment: <NumbersIcon sx={{ mr: 1 }} />,
                    }}
                  />
                </Grid>

                {/* Origin */}
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    fullWidth
                    label="Origin"
                    placeholder="Western Ghats"
                    value={product.origin}
                    onChange={(e) =>
                      handleChange("origin", e.target.value)
                    }
                    InputProps={{
                      startAdornment: <PublicIcon sx={{ mr: 1 }} />,
                    }}
                  />
                </Grid>

                {/* Image URL */}
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    fullWidth
                    label="Image URL"
                    placeholder="https://..."
                    value={product.image}
                    onChange={(e) =>
                      handleChange("image", e.target.value)
                    }
                    InputProps={{
                      startAdornment: <ImageIcon sx={{ mr: 1 }} />,
                    }}
                  />
                </Grid>

                {/* Description */}
                <Grid size={{ xs: 12 }}>
                  <TextField
                    fullWidth
                    label="Product Description"
                    multiline
                    rows={4}
                    value={product.description}
                    onChange={(e) =>
                      handleChange("description", e.target.value)
                    }
                    InputProps={{
                      startAdornment: (
                        <DescriptionIcon sx={{ mr: 1, mt: 1 }} />
                      ),
                    }}
                  />
                </Grid>
              </Grid>

              {/* IMAGE PREVIEW */}
              {product.image && (
                <Box
                  mt={3}
                  sx={{
                    borderRadius: 3,
                    overflow: "hidden",
                    boxShadow: 3,
                  }}
                >
                  <img
                    src={product.image}
                    alt="Preview"
                    style={{
                      width: "100%",
                      maxHeight: 260,
                      objectFit: "cover",
                    }}
                  />
                </Box>
              )}

              {/* SUBMIT */}
              <Box display="flex" justifyContent="flex-end" mt={4}>
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<SaveIcon />}
                  onClick={handleSubmit}
                  sx={{ px: 4, borderRadius: 2 }}
                >
                  Save Product
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Container>
      </Box>

      
    </>
  );
};

export default AddProduct;
