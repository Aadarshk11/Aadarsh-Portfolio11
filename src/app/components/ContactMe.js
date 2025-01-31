import React from "react";
import { Box, Typography, Container, Grid, IconButton, Paper } from "@mui/material";
import { Email, Phone, LocationOn, LinkedIn, GitHub, Instagram } from "@mui/icons-material";
import { FaDiscord } from 'react-icons/fa';  // Import Discord icon from react-icons
import { SiLeetcode } from 'react-icons/si'; // Import LeetCode icon from react-icons
import { blue } from "@mui/material/colors"; 

const ContactMe = () => {
  return (
    <Container sx={{ py: 5 }} id="contactme">
      <Typography variant="h4" sx={{ fontWeight: 600, marginBottom: 5, color: blue[900], textAlign: "center" }}>
        Contact Me
      </Typography>

      <Paper
        elevation={3}
        sx={{
          p: 4,
          borderRadius: 3,
          backgroundColor: "#28282B", 
          transition: "all 0.3s ease", // Smooth transition for hover effect
          "&:hover": {
            transform: "translateY(-5px)", // Uplift effect on hover
            boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)", // Increased shadow on hover
          },
        }}
      >
        <Grid container spacing={4} alignItems="center">
          {/* Contact Info Section */}
          <Grid item xs={12} md={5}>
            <Box sx={{ textAlign: "center" }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
                <Email color="primary" /> <Typography variant="body1" color="White">aadarshkasturey@gmail.com</Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 3 }}>
                <LocationOn color="primary" /> <Typography variant="body1" color="white">Indore City, India</Typography>
              </Box>

              {/* Social Icons */}
              <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
                <IconButton href="https://www.linkedin.com/in/aadarshhistory/" target="_blank" sx={{ color: "#0077b5" }}>
                  <LinkedIn fontSize="large" />
                </IconButton>
                <IconButton href="https://github.com/Aadarshk11" target="_blank" sx={{ color: "#000" }}>
                  <GitHub fontSize="large" />
                </IconButton>
                <IconButton href="https://github.com/Aadarshk11" target="_blank" sx={{ color: "#f1f1f1" }}>
                  <SiLeetcode fontSize="large" />
                </IconButton>
                <IconButton href="https://www.instagram.com/aadarsh_kasturey1128" target="_blank" sx={{ color: "#E4405F" }}>
                  <Instagram fontSize="large" />
                </IconButton>
                <IconButton href="discordapp.com/users/aadarsh2648" target="_blank" sx={{ color: "#7289da" }}>
                  <FaDiscord fontSize="large" />
                </IconButton>
              </Box>
            </Box>
          </Grid>

          {/* Additional Section */}
          <Grid item xs={12} md={7}>
            <Box sx={{ textAlign: "center" }}>
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 , color:"white"}} >
                Let's Connect
              </Typography>
              <Typography variant="body1" sx={{ color: "white", mb: 2 }} >
                Feel free to reach out via any of the platforms provided here.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default ContactMe;
