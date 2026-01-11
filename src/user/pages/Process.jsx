import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import UserNavbar from "../components/UserNavbar";

/* ================= DATA ================= */

const processSteps = [
  {
    // https://cdn.shopify.com/s/files/1/0863/0521/0666/files/IMG_20191112_162911_1.jpg?v=1746278657
    title: "Choosing the location",
    desc:
      "We carefully select the site from where our little friends, the honeybees, will nectar.",
    image: "/public/farm.png",
  },
  {
    title: "Setting up the colonies",
    desc:
      "Honeybee colonies are wooden houses where bees deposit nectar.",
    image: "/public/vandi.png",
  },
  {
    title: "Timing everything right",
    desc:
      "We wait and let bees take their time converting nectar into honey.",
    image: "https://i.pinimg.com/1200x/79/f7/7f/79f77f2c5afc872cbcf4ae575baabafb.jpg",
  },
  {
    title: "Keeping it fully natural",
    desc:
      "No heating, no processing — raw honey just as nature intended.",
    image: "https://i.pinimg.com/1200x/04/c5/6c/04c56c9de14c829a41dced8b47e7775a.jpg",
  },
  {
    title: "Filtering as should be",
    desc:
      "Simple gravity filtering removes unwanted particles.",
    image: "/public/box.png",
  },
  {
    title: "Carrying the Honeyhub promise",
    desc:
      "Ethical, sustainable, and honest from hive to home.",
    image: "/public/people.png",
  },
];

/* ================= COMPONENT ================= */

export default function ProcessPage() {
  return (
    <>
      <UserNavbar />

      <Box sx={{ backgroundColor: "#FFF7EC" }}>
        {/* ================= HERO SECTION ================= */}
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
             src="https://i.pinimg.com/736x/58/49/82/584982a316a5f7029677c53890fd7fe5.jpg"
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
HoneyHub Ecosystem
             </Typography>
       
             <Typography
               variant="body1"
               sx={{
                 color: "#3E2A1F",
                 lineHeight: 1.8,
                 mb: 3,
               }}
             >
               At Honeyhub, we go beyond just bottling honey — we nurture an entire
        bee-ecosystem. From supporting local beekeepers and protecting native
        bee species to educating communities and promoting sustainable
        pollination, our mission is to help bees thrive.
             </Typography>
       
            
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
             src="https://i.pinimg.com/736x/51/81/11/518111f4ffae0615dff7c732e9ca7c24.jpg"
             alt="Honey Jar"
             sx={{
               width: "100%",
               height: "100%",
               objectFit: "cover",
             }}
           />
         </Box>
       </Box>


        {/* ================= BEE ECOSYSTEM IMPACT ================= */}
        <Box sx={{ backgroundColor: "#FFF4E3", py: 10 }}>
          <Container maxWidth="lg">
            <Typography
              variant="h4"
              align="center"
              sx={{ fontWeight: 700, mb: 6 }}
            >
              Bee-Ecosystem Impact
            </Typography>

            <Grid
              container
              spacing={6}
              alignItems="center"
              justifyContent="space-between"
            >
              <Grid item xs={12} md={5}>
                <Typography sx={{ lineHeight: 1.9 }}>
                  At Honeyhub, we believe that when bees thrive, the world
                  blooms. With every hive we nurture, over 11,000 acres of
                  farmland are pollinated, crop yields rise, and local flora
                  flourishes again.
                </Typography>

                <Button
                  variant="outlined"
                  sx={{
                    mt: 4,
                    borderColor: "#E7A33E",
                    color: "#2E1A0F",
                    px: 4,
                    py: 1.2,
                    borderRadius: 2,
                    fontWeight: 600,
                  }}
                >
                  Learn more About Us →
                </Button>
              </Grid>

              <Grid item xs={12} md={7}>
                <Box
                  component="img"
                  src="https://cdn.dribbble.com/users/251873/screenshots/14648544/media/bee-farm.png"
                  sx={{ width: "100%" }}
                />
              </Grid>
            </Grid>
          </Container>
        </Box>

        
    
{/* ================= PROCESS STEPS ================= */}
<Box sx={{ backgroundColor: "#dbab69ff" }}>
  <Container maxWidth="lg" sx={{ py: 10 }}>
    <Grid container spacing={4}>
      {processSteps.map((step, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card
            elevation={0}
            sx={{
              height: 420,
              display: "flex",
              flexDirection: "column",
              borderRadius: 3,
              backgroundColor: "#FFFFFF",
              border: "1px solid #E8DCC5",
              boxShadow: "0px 4px 10px rgba(0,0,0,0.05)",
            }}
          >
            {/* IMAGE */}
            <Box sx={{ height: 200, overflow: "hidden" }}>
              <CardMedia
                component="img"
                image={step.image}
                alt={step.title}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>

            {/* CONTENT */}
            <CardContent sx={{ p: 3, flexGrow: 1 }}>
              <Typography
                variant="h6"
                fontWeight={600}
                sx={{ color: "#2E1A0F", mb: 1 }}
              >
                {index + 1}. {step.title}
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  color: "#6B5A3E",
                  lineHeight: 1.7,
                  fontSize: "14px",
                  display: "-webkit-box",
                  WebkitLineClamp: 4,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {step.desc}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
</Box>


 
    {/* Button */}
    <Box textAlign="center" mt={8}>
      <Button
        variant="outlined"
        sx={{
          borderColor: "#E7A33E",
          color: "#2E1A0F",
          px: 6,
          py: 1.6,
          borderRadius: 3,
          fontWeight: 600,
          fontSize: "15px",
          transition: "all 0.3s ease",
          "&:hover": {
            backgroundColor: "#E7A33E",
            color: "#fff",
          },
        }}
      >
        Contact Us →
      </Button>
   
</Box>




        {/* ================= FOOTER ================= */}
        <Box sx={{ py: 8, backgroundColor: "#FFF4E3" }}>
          <Container maxWidth="lg">
            <Grid
              container
              spacing={4}
              alignItems="center"
              justifyContent="space-between"
            >
              <Grid item xs={12} md={6}>
                <Typography fontWeight={700} fontSize={24}>
                  Honeyhub
                </Typography>
                <Typography>Pure • Raw • Natural</Typography>
              </Grid>

              <Grid item xs={12} md={6}>
                <Typography color="text.secondary">
                  Honeyhub’s ethical beekeeping has won hearts everywhere.
                  From beehive to bottle — pure and raw in its most natural form.
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </>
  );
}
