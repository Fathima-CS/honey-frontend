import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
  TextField,
  Paper,
} from '@mui/material';

import { Link } from 'react-router-dom';
import UserNavbar from '../components/UserNavbar';
import Footer from '../components/Footer';
const products = [
  {
    id: 1,
    name: "CINNAMON HONEY",
    description: "A comforting mix of warm cinnamon and pure honey",
    image: "https://i.pinimg.com/1200x/4f/1a/87/4f1a87204407179b9d319915fc4dcfb3.jpg",
  },
  {
    id: 2,
    name: "GINGER HONEY",
    description: "A warm fusion of pure honey and ginger",
    image: "https://i.pinimg.com/1200x/6d/8b/cf/6d8bcf8ba0d18048ac26757841736581.jpg",
  },
  {
    id: 4,
    name: "LEMON HONEY",
    description: "A zesty blend of fresh lemon and honey",
    image: "https://i.pinimg.com/1200x/4f/aa/0b/4faa0b902d1f25a411c8c1b3f4a8777a.jpg",
  },
  {
    id: 5,
    name: "MULTIFLORA HONEY",
    description: "A rich and aromatic blend of nectar",
    image: "https://i.pinimg.com/1200x/74/b2/44/74b2449db4a095799aa1ced9a4893365.jpg",
  },
];
function Home() {
  return (
    <Box>
      {/* NAVBAR */}
      <UserNavbar />

      {/* HERO SECTION */}
      <Box
        sx={{
          backgroundImage:
            "url('/public/banner.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '80vh',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Container>
          <Typography
            variant="h2"
            sx={{ color: '#E9AB17', fontWeight: 'bold', mb: 2 }}
          >
            HoneyHub
          </Typography>

          <Typography
            variant="h5"
            sx={{ color: '#E9AB17', mb: 4, maxWidth: 600 }}
          >
            A trusted marketplace for pure, traceable, farm-fresh honey directly
            from verified beekeepers.
          </Typography>

          <Button
            component={Link}
            to="/products"
            variant="contained"
            size="large"
            sx={{ mr: 2 }}
          >
            Explore Honey
          </Button>

          <Button
            component={Link}
            to="/login"
            variant="outlined"
            size="large"
            sx={{ color: '#fff', borderColor: '#fff' }}
          >
            Login
          </Button>
        </Container>
      </Box>

      {/* FEATURES SECTION */}
      <Container sx={{ py: 8 }}>
  <Typography
    variant="h4"
    align="center"
    gutterBottom
    sx={{ fontWeight: 600, color: '#6b4f1d' }}
  >
    Why Choose HoneyHub?
  </Typography>

  <Grid
    container
    spacing={4}
    sx={{
      mt: 2,
      justifyContent: 'center',
    }}
  >
    {[
      {
        title: '100% Pure Honey',
        desc: 'Our honey is sourced directly from verified farmers with no additives or chemicals.',
      },
      {
        title: 'Direct From Farmers',
        desc: 'Support local beekeepers and farmers by buying directly from them.',
      },
      {
        title: 'Quality Assured',
        desc: 'Every product goes through admin verification before reaching customers.',
      },
    ].map((item, index) => (
      <Grid
        item
        xs={12}
        md={4}
        key={index}
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Card
          sx={{
            height: 260,
            maxWidth: 300,
            width: '100%',
            backgroundColor: '#FFF3CD', // honey light yellow
            borderRadius: 3,
            boxShadow: '0 6px 20px rgba(193, 154, 25, 0.35)',
            border: '1px solid #f0c14b',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <CardContent sx={{ textAlign: 'center' }}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ fontWeight: 600, color: '#8b5e00' }}
            >
              {item.title}
            </Typography>

            <Typography
              variant="body2"
              sx={{ color: '#5f4b32' }}
            >
              {item.desc}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    ))}
  </Grid>
</Container>

       {/* SECTION TITLE */}
      <Box sx={{ textAlign: "center", py: 6,backgroundColor:'#FEEE91' }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{ color: "#5A3E2B" }}
        >
          Explore Our Infused Honey Range
        </Typography>
      </Box>

      {/* PRODUCTS GRID */}
      <Box
  sx={{
    px: { xs: 2, md: 8 },
    pb: 6,
    backgroundColor: '#FEEE91',
  }}
>

        <Grid container spacing={4} justifyContent="center">
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={2.4} key={product.id}>
              <Card
                elevation={0}
                sx={{
                  backgroundColor: "transparent",
                  textAlign: "center",
                }}
              >
                <CardMedia
                  component="img"
                  image={product.image}
                  alt={product.name}
                  sx={{
                    height: 220,
                    objectFit: "contain",
                    mb: 2,
                  }}
                />

                <CardContent>
                  <Typography
                    variant="subtitle1"
                    fontWeight="bold"
                    gutterBottom
                  >
                    {product.name}
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 2 }}
                  >
                    {product.description}
                  </Typography>

                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#5A3E2B",
                      "&:hover": { backgroundColor: "#4A3323" },
                      borderRadius: 0,
                      px: 3,
                    }}
                  >
                    VIEW PRODUCTS
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* POPULAR PRODUCTS SECTION */}
      {/* <Box sx={{ backgroundColor: '#fff', py: 8 }}>
        <Container>
          <Typography variant="h4" align="center" gutterBottom>
            Popular Honey Types
          </Typography>

          <Grid container spacing={4} sx={{ mt: 2 }}>
            <Grid item xs={12} md={3}>
              <Card>
                <CardMedia
                  component="img"
                  height="180"
                  image="https://images.unsplash.com/photo-1615486363869-b6f6c0d68a30"
                  alt="Wild Honey"
                />
                <CardContent>
                  <Typography variant="h6">Wild Forest Honey</Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={3}>
              <Card>
                <CardMedia
                  component="img"
                  height="180"
                  image="https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2"
                  alt="Organic Honey"
                />
                <CardContent>
                  <Typography variant="h6">Organic Honey</Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={3}>
              <Card>
                <CardMedia
                  component="img"
                  height="180"
                  image="https://images.unsplash.com/photo-1506806732259-39c2d0268443"
                  alt="Raw Honey"
                />
                <CardContent>
                  <Typography variant="h6">Raw Honey</Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={3}>
              <Card>
                <CardMedia
                  component="img"
                  height="180"
                  image="https://images.unsplash.com/photo-1578985545062-69928b1d9587"
                  alt="Flavoured Honey"
                />
                <CardContent>
                  <Typography variant="h6">Flavoured Honey</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box> */}

      {/* CALL TO ACTION */}
    <Box sx={{ backgroundColor: '#EBD5AB', width: '100%' }}>
      <Container
  sx={{
    py: 8,
    textAlign: 'center',
    
  }}
>

        <Typography variant="h4" gutterBottom>
          Join HoneyHub Today
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          Whether you are a customer, seller, or admin – HoneyHub connects
          everyone on one trusted platform.
        </Typography>

        <Button
          component={Link}
          to="/register"
          variant="contained"
          size="large"
        >
          Get Started
        </Button>
      </Container>
      </Box>
      {/* HONEY FOR EVERY LIFESTYLE SECTION */}
<Box sx={{ backgroundColor: "#F7F6D0", py: 8 }}>
  <Container maxWidth="lg">
    {/* SECTION TITLE */}
    <Typography
      variant="h4"
      align="center"
      fontWeight="bold"
      sx={{ color: "#5A3E2B", mb: 6 }}
    >
      Honey for Every Lifestyle
    </Typography>

    {/* CARD GRID */}
    <Grid container spacing={4}>
      {[
        {
          title: "Daily Wellness",
          desc: "Support your immunity, energy, and digestion naturally.",
          img: "https://i.pinimg.com/736x/68/e0/9f/68e09f44eb14948b28a853864bcf4614.jpg",
        },
        {
          title: "Gourmet Gifting",
          desc: "Thoughtful and healthy gifts for any occasion.",
          img: "https://i.pinimg.com/1200x/c5/c9/a3/c5c9a3e5d29e77979aa41e46020a1a03.jpg",
        },
        {
          title: "Professional Use",
          desc: "Trusted by wellness centers, cafes, and clinics.",
          img: "https://i.pinimg.com/1200x/66/dc/c0/66dcc0093fe0779e7425287534908ad7.jpg",
        },
        {
          title: "On-the-Go Nutrition",
          desc: "Convenient honey sticks for active lifestyles.",
          img: "https://i.pinimg.com/736x/99/19/fa/9919fa7d5c549c681270450ab7621066.jpg",
        },
      ].map((item, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <Box
            sx={{
              position: "relative",
              height: 360,
              borderRadius: 1,
              overflow: "hidden",
            }}
          >
            {/* IMAGE */}
            <Box
              component="img"
              src={item.img}
              alt={item.title}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />

            {/* OVERLAY */}
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.1))",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                p: 3,
              }}
            >
              <Typography
                variant="h6"
                fontWeight="bold"
                sx={{ color: "#F7F26B" }}
              >
                {item.title}
              </Typography>

              <Typography
                variant="body2"
                sx={{ color: "#fff", mb: 2 }}
              >
                {item.desc}
              </Typography>

              {/* ARROW BUTTON */}
              <Box
                sx={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  backgroundColor: "#F7F26B",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                <Typography
                  sx={{ fontSize: 20, fontWeight: "bold", color: "#5A3E2B" }}
                >
                  →
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  </Container>
</Box>

     
      {/* product grid */}

{/* HONEYVERSE SHOWCASE SECTION */}
{/* HONEYVERSE SECTION – PROPER VERTICAL ALIGN */}
<Box
  sx={{
    width: "100%",
    height: { xs: "auto", md: "500px" }, // ONE HEIGHT FOR ALL
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
  }}
>
  {/* LEFT IMAGE */}
  <Box
    sx={{
      flex: 1,
    }}
  >
    <Box
      component="img"
      src="/public/honeycom.jpg"
      alt="Honeycomb"
      sx={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  </Box>

  {/* CENTER CONTENT */}
  <Box
    sx={{
      flex: 1,
      backgroundColor: "#F3F27D",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      px: 4,
      textAlign: "center",
    }}
  >
    <Box>
      <Typography
        variant="h4"
        fontWeight="bold"
        gutterBottom
        sx={{ color: "#5A3E2B" }}
      >
        Welcome to Honeyverse
      </Typography>

      <Typography
        variant="body1"
        sx={{
          color: "#3E2A1F",
          lineHeight: 1.8,
          mb: 3,
        }}
      >
        At Honeyverse, we go beyond sweetness. Backed by science and powered
        by nature, we bring you multiflora honey and innovative infused
        variants that are 100% pure, nutrient-rich, and elegantly packaged.
        No sugar syrups. No shortcuts. Just nature’s best—straight to your
        table.
      </Typography>

      <Button
        variant="contained"
        sx={{
          backgroundColor: "#5A3E2B",
          px: 4,
          py: 1.2,
          borderRadius: 0,
          "&:hover": { backgroundColor: "#4A3323" },
        }}
      >
        LEARN MORE
      </Button>
    </Box>
  </Box>

  {/* RIGHT IMAGE */}
  <Box
    sx={{
      flex: 1,
    }}
  >
    <Box
      component="img"
      src="/public/rightside.jpg"
      alt="Honey Jar"
      sx={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  </Box>
</Box>


{/* #EBD5AB */}
{/* LAB TESTED PURITY BANNER */}
<Box
  sx={{
    width: "100%",
    backgroundColor: "#EBD5AB",
    py: { xs: 6, md: 8 },
  }}
>
  <Container maxWidth="lg">
    {/* HEADING */}
    <Typography
      variant="h4"
      align="center"
      fontWeight="bold"
      sx={{ color: "#5A3E2B", mb: 6 }}
    >
      Lab-Tested Purity, Always
    </Typography>

    {/* ICON GRID */}
    <Grid container spacing={4} justifyContent="center">
      {/* ITEM 1 */}
      <Grid item xs={12} sm={6} md={3} textAlign="center">
        <Box
          component="img"
          src="/public/Labtested.jpg"
          alt="Lab tested"
          sx={{ width: 64, mb: 2 }}
        />
        <Typography variant="body1" sx={{ color: "#5A3E2B" }}>
          Lab-tested for quality<br />and safety
        </Typography>
      </Grid>

      {/* ITEM 2 */}
      <Grid item xs={12} sm={6} md={3} textAlign="center">
        <Box
          component="img"
          src="/public/nosugar.jpg"
          alt="No sugar"
          sx={{ width: 64, mb: 2 }}
        />
        <Typography variant="body1" sx={{ color: "#5A3E2B" }}>
          Free from sugar syrups
        </Typography>
      </Grid>

      {/* ITEM 3 */}
      <Grid item xs={12} sm={6} md={3} textAlign="center">
        <Box
          component="img"
          src="/public/food.jpg"
          alt="FSSAI"
          sx={{ width: 80, mb: 2 }}
        />
        <Typography variant="body1" sx={{ color: "#5A3E2B" }}>
          Non-GMO certified
        </Typography>
      </Grid>

      {/* ITEM 4 */}
      <Grid item xs={12} sm={6} md={3} textAlign="center">
        <Box
          component="img"
          src="/public/pack.jpg"
          alt="Eco packaging"
          sx={{ width: 64, mb: 2 }}
        />
        <Typography variant="body1" sx={{ color: "#5A3E2B" }}>
          Packaged in eco-<br />conscious materials
        </Typography>
      </Grid>
    </Grid>
  </Container>
</Box>


{/* last portion */}
<Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#FFF6EA",
        position: "relative",
        overflow: "hidden",
        px: { xs: 2, md: 10 },
        pt: 12,
      }}
    >
      {/* Heading */}
      <Typography
        variant="h2"
        sx={{
          fontWeight: 700,
          color: "#1c1c1c",
          lineHeight: 1.1,
        }}
      >
        Our
      </Typography>

      <Typography
        variant="h2"
        sx={{
          fontWeight: 700,
          color: "#F26522",
          mb: 4,
        }}
      >
        Impact
      </Typography>

      {/* Impact Info Card */}
      <Paper
        elevation={0}
        sx={{
          maxWidth: 320,
          p: 3,
          backgroundColor: "#FDEEDB",
          borderRadius: 3,
        }}
      >
        <Typography variant="body2" sx={{ mb: 2, color: "#333" }}>
          <strong>1,120+ Farmers</strong> trained by HoneyHub as Master Beekeepers
        </Typography>

        <Typography variant="body2" sx={{ color: "#333" }}>
          More than <strong>9,999+ acres</strong> of land pollinated, resulting in
          higher crop yields
        </Typography>
      </Paper>

      {/* Right-side Girl Image */}
      <Box
        component="img"
        src="/honeybeegirl.jpg"
        alt="Honey Bee Girl"
        sx={{
          position: "absolute",
          right: { xs: "-30px", md: "60px" },
          bottom: { xs: "110px", md: "140px" },
          width: { xs: "240px", md: "380px" },
          zIndex: 3,
        }}
      />

      {/* 7 Million Bees Badge */}
      <Box
        sx={{
          position: "absolute",
          top: 120,
          right: 90,
          backgroundColor: "#FFD400",
          px: 2.2,
          py: 1.6,
          borderRadius: 2,
          textAlign: "center",
          fontWeight: 700,
          zIndex: 4,
        }}
      >
        <Typography variant="h4" sx={{ lineHeight: 1 }}>
          7
        </Typography>
        <Typography variant="caption">Million+ Bees</Typography>
      </Box>

      {/* Bottom Honey Field */}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: 230,
          background: "linear-gradient(180deg, #F9B55A, #F5A742)",
          borderTopLeftRadius: "100% 40%",
          borderTopRightRadius: "100% 40%",
          zIndex: 1,
        }}
      />

      {/* Bee Cruelty Free Badge */}
      <Box
        sx={{
          position: "absolute",
          bottom: 130,
          left: "50%",
          transform: "translateX(-50%)",
          width: 120,
          height: 120,
          borderRadius: "50%",
          backgroundColor: "#FFFFFF",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: 4,
          zIndex: 4,
        }}
      >
        <Typography
          variant="caption"
          align="center"
          sx={{ fontWeight: 600 }}
        >
          FREE FROM
          <br />
          BEE CRUELTY
        </Typography>
      </Box>
    </Box>


      {/* FOOTER */}
      <Footer
        links={[
          { text: 'Home', path: '/' },
          { text: 'Products', path: '/products' },
          { text: 'Login', path: '/login' },
        ]}
      />
    </Box>
  );
}

export default Home;
