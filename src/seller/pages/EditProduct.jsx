import {
  Box,
  Button,
  TextField,
  Typography,
  Grid,
  Card,
  CardMedia,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: "",
    price: "",
    origin: "",
    description: "",
    image: "",
  });

  // Simulating API call
  useEffect(() => {
    const fetchProduct = async () => {
      // Replace with real API
      const data = {
        name: "Wild Forest Honey",
        price: 550,
        origin: "Wayanad, Kerala",
        description: "Pure, raw forest honey collected sustainably.",
        image: "/assets/images/honey.jpg",
      };
      setProduct(data);
    };

    fetchProduct();
  }, [id]);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProduct({ ...product, image: URL.createObjectURL(file) });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // API call goes here
    console.log("Updated Product:", product);

    navigate("/seller/products");
  };

  return (
    <Box maxWidth="md">
      <Typography variant="h4" fontWeight="bold" mb={3}>
        Edit Product
      </Typography>

      <Grid container spacing={3}>
        {/* Image Preview */}
        <Grid item xs={12} md={4}>
          <Card elevation={3}>
            <CardMedia
              component="img"
              height="200"
              image={product.image}
              alt={product.name}
            />
          </Card>

          <Button
            component="label"
            variant="outlined"
            fullWidth
            sx={{ mt: 2 }}
          >
            Change Image
            <input
              hidden
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
          </Button>
        </Grid>

        {/* Edit Form */}
        <Grid item xs={12} md={8}>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Product Name"
              name="name"
              value={product.name}
              onChange={handleChange}
              margin="normal"
              required
            />

            <TextField
              fullWidth
              label="Price (₹)"
              name="price"
              type="number"
              value={product.price}
              onChange={handleChange}
              margin="normal"
              required
            />

            <TextField
              fullWidth
              label="Origin"
              name="origin"
              value={product.origin}
              onChange={handleChange}
              margin="normal"
            />

            <TextField
              fullWidth
              label="Description"
              name="description"
              multiline
              rows={4}
              value={product.description}
              onChange={handleChange}
              margin="normal"
            />

            <Box mt={3} display="flex" gap={2}>
              <Button type="submit" variant="contained">
                Update Product
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => navigate(-1)}
              >
                Cancel
              </Button>
            </Box>
          </form>
        </Grid>
      </Grid>
    </Box>
  );
};

export default EditProduct;
