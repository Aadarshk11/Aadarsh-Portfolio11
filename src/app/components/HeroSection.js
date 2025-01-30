// src/app/components/HeroSection.js
import React from "react";
import { Box, Typography, Button } from "@mui/material";

const HeroSection = () => {
  return (
    <Box
      sx={{
        backgroundImage: 'url("/kelly-sikkema-tk9RQCq5eQo-unsplash.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "Bottom",
        backgroundRepeat: "no-repeat",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "105vh",
        textAlign: "center",
        padding: "20px",
        
      }}
    >
      {/* Profile Photo */}
      <Box
        component="img"
        src="/gayatri-malhotra-EJWaKVPB6iI-unsplash.jpg" 
        alt="Profile"
        sx={{
          width: "180px",  // Adjust size as needed
          height: "220px",
          objectFit: "cover", // Ensures it fits well
          border: "3px solid white",
          marginBottom: "15px", // Adds space between image and name
        }}
      />
      <Typography variant="h3" gutterBottom>
        Hello, I'm John Doe!
      </Typography>
      <Typography variant="h5" sx={{ marginBottom: 4 }}>
        A passionate web developer creating amazing user experiences.
      </Typography>
      <Button variant="contained" sx={{ borderRadius: "50px", fontSize: "1.1rem" }} href="#projects">
        View My Work
      </Button>
    </Box>
  );
};

export default HeroSection;
