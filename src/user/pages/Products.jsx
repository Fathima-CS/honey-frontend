import React, { useState, useEffect } from 'react';
import { Box, Typography, TextField, Grid, Pagination } from '@mui/material';
import UserNavbar from '../components/UserNavbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';

function Products() {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);

  const itemsPerPage = 9;

  const [data, setData] = useState({
    varieties: [],
    delicacies: [],
    skin: [],
    medicine: [],
  });

  useEffect(() => {
  const honeyVarieties = [
  {
    id: 1,
    name: 'Pure Organic Honey',
    price: 350,
    image: 'https://i.pinimg.com/736x/59/9c/73/599c73371b3b4f4ab08cbdbf60b038f7.jpg',
    description: 'Naturally sourced organic honey with no additives',
  },
  {
    id: 2,
    name: 'Sunflower Honey',
    price: 420,
    image: 'https://i.pinimg.com/736x/d2/ff/35/d2ff35b65f35f6cc584ab59e74a764d8.jpg',
    description: 'Light golden honey harvested from sunflower fields',
  },
  {
    id: 3,
    name: 'Forest Honey',
    price: 280,
    image: '/public/honeyhub.png',
    description: 'Wild forest honey collected from natural hives',
  },
  {
    id: 4,
    name: 'Acacia Honey',
    price: 500,
    image: '/public/acacia.jpg',
    description: 'Clear and mild honey with low sugar crystallization',
  },
  {
    id: 5,
    name: 'Sidr / Wild Berry Honey',
    price: 390,
    image: 'https://i.pinimg.com/1200x/88/36/9b/88369bdfe8321b14c966ebd7146c8617.jpg',
    description: 'Premium honey made from wild berry nectar',
  },
  {
    id: 6,
    name: 'Eucalyptus Honey',
    price: 450,
    image: 'https://i.pinimg.com/1200x/1e/1a/45/1e1a45112c03f72aa82792d2302e5055.jpg',
    description: 'Aromatic honey known for respiratory benefits',
  },
  {
    id: 7,
    name: 'Ajwain Honey',
    price: 450,
    image: '/public/ajwain.jpg',
    description: 'Medicinal honey supporting digestion and immunity',
  },
  {
    id: 8,
    name: 'Cotton Honey',
    price: 450,
    image: 'https://i.pinimg.com/1200x/21/03/ae/2103aed42730c2ef78aa59925dfee211.jpg',
    description: 'Mild-flavored honey collected from cotton blossoms',
  },
];


  const honeyDelicacies = [
  {
    id: 101,
    name: 'Honey Ginger Tea',
    price: 290,
    image: 'https://www.thehoneyshopindia.com/wp-content/uploads/2014/12/Honey-Ginger-Tea-266x266.jpg',
    description: 'Warm herbal tea blended with pure honey and ginger',
  },
  {
    id: 102,
    name: 'Honey Orange Tea',
    price: 260,
    image: 'https://www.thehoneyshopindia.com/wp-content/uploads/2014/12/Honey-Orange-Tea-266x266.jpg',
    description: 'Refreshing citrus tea sweetened with natural honey',
  },
  {
    id: 103,
    name: 'Honey Mango Jelly',
    price: 180,
    image: '/public/mango.jpg',
    description: 'Smooth mango jelly made with real honey',
  },
  {
    id: 104,
    name: 'Honey Strawberry Jelly',
    price: 180,
    image: 'https://images.unsplash.com/photo-1598373182133-52452f7691ef',
    description: 'Sweet strawberry jelly blended with honey',
  },
  {
    id: 105,
    name: 'Honey Peanut Butter',
    price: 220,
    image: 'https://www.thehoneyshopindia.com/wp-content/uploads/2013/06/honey-peanut-butter-266x266.jpg',
    description: 'Creamy peanut butter naturally sweetened with honey',
  },
  {
    id: 106,
    name: 'Honey Mango Fruit Spread',
    price: 210,
    image: 'https://www.thehoneyshopindia.com/wp-content/uploads/2021/05/WHITE-MANGO-FRONT-266x266.jpg',
    description: 'Thick mango fruit spread infused with honey',
  },
  {
    id: 107,
    name: 'Honey Blueberry Spread',
    price: 210,
    image: 'https://www.thehoneyshopindia.com/wp-content/uploads/2021/05/WHITE-BLUEBERRY-FRONT-266x266.jpg',
    description: 'Premium blueberry spread with natural honey',
  },

];


  const skinCareProducts = [
  {
    id: 201,
    name: 'Honey Lemongrass Soap',
    price: 220,
    image: 'https://www.thehoneyshopindia.com/wp-content/uploads/2013/06/lemongrass-soap-266x266.jpg',
    description: 'Refreshing herbal soap with honey and lemongrass',
  },
  {
    id: 202,
    name: 'Honey Lavender Soap',
    price: 240,
    image: 'https://www.thehoneyshopindia.com/wp-content/uploads/2015/06/Honey-Lavender-Soap-266x266.jpg',
    description: 'Calming lavender soap enriched with pure honey',
  },
  {
    id: 203,
    name: 'Honey Orange Soap',
    price: 180,
    image: 'https://www.thehoneyshopindia.com/wp-content/uploads/2013/06/Honey-Orange-Soap-266x266.jpg',
    description: 'Citrus-infused soap for fresh and glowing skin',
  },
  {
    id: 204,
    name: 'Honey Charcoal Soap',
    price: 200,
    image: 'https://www.thehoneyshopindia.com/wp-content/uploads/2013/06/Honey-Charcoal-Soap-266x266.jpg',
    description: 'Deep-cleansing charcoal soap with honey extracts',
  },
];


  const honeyMedicines = [
  {
    id: 301,
    name: 'Honey Tonic',
    price: 450,
    image: 'https://www.thehoneyshopindia.com/wp-content/uploads/2013/06/tonic-266x266.jpg',
    description: 'Natural honey tonic to support digestion and immunity',
  },
  {
    id: 302,
    name: 'Honey Brain Tonic',
    price: 470,
    image: 'https://i.pinimg.com/1200x/bb/a5/33/bba5333e5b04c1f29d3f9079bbab3407.jpg',
    description: 'Herbal honey blend that supports memory and focus',
  },
  {
    id: 303,
    name: 'Bee Pollen',
    price: 420,
    image: 'https://i.pinimg.com/1200x/d3/ee/e0/d3eee0f7f60f5f8e58175f3d4f74f58b.jpg',
    description: 'Rich in nutrients to boost energy and immunity',
  },
];


  setData({
    varieties: honeyVarieties,
    delicacies: honeyDelicacies,
    skin: skinCareProducts,
    medicine: honeyMedicines,
  });
}, []);


  const filterProducts = (products) =>
    products.filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase())
    );

  const paginatedVarieties = filterProducts(data.varieties).slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  const footerLinks = [
    { text: 'Home', path: '/' },
    { text: 'Cart', path: '/cart' },
  ];

  return (
    <Box>
      <UserNavbar />

      <Box sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom color="primary">
          Our Products
        </Typography>

        <TextField
          fullWidth
          label="Search Products"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
          sx={{ mb: 4 }}
        />

        {/* Honey Varieties */}
        <Typography variant="h5" gutterBottom>
          Honey Varieties
        </Typography>
        <Grid container spacing={3}>
          {paginatedVarieties.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>

        {/* <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <Pagination
            count={Math.ceil(filterProducts(data.varieties).length / itemsPerPage)}
            page={page}
            onChange={(e, value) => setPage(value)}
            color="primary"
          />
        </Box> */}

        {/* Honey Delicacies */}
        <Typography variant="h5" sx={{ mt: 6 }} gutterBottom>
          Honey Delicacies
        </Typography>
        <Grid container spacing={3}>
          {filterProducts(data.delicacies).map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>

        {/* Skin Care */}
        <Typography variant="h5" sx={{ mt: 6 }} gutterBottom>
          Skin Care
        </Typography>
        <Grid container spacing={3}>
          {filterProducts(data.skin).map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>

        {/* Honey Medicines */}
        <Typography variant="h5" sx={{ mt: 6 }} gutterBottom>
          Honey Medicines
        </Typography>
        <Grid container spacing={3}>
          {filterProducts(data.medicine).map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </Box>

      <Footer links={footerLinks} />
    </Box>
  );
}

export default Products;
