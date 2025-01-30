// src/app/components/Footer.js
import React from "react";
import { Box, Typography, Grid } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#28282B", color: "white", textAlign: "center", }}>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <Typography
            variant="body2"
            paragraph
            sx={{
              fontWeight: 500, // Adjust weight for emphasis
              fontSize: "1.0rem", // Increase the font size
              lineHeight: 1.3, // Set line height for better readability
              display: 'inline' ,
            }}
          >
            Designed and developed by <strong>Aadarsh Kasturey</strong><a 
              href="https://your-link.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ 
                color: "#00A9E0", 
                textDecoration: "none", 
                fontWeight: 600, 
                marginLeft: "8px" 
              }}
            >
              Source_code
            </a>
          </Typography>

        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
