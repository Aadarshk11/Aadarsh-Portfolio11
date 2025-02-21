import React from "react";
import { Box, Typography, Button } from "@mui/material";

const HeroSection = () => {
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning,";
    if (hour < 18) return "Good Afternoon,";
    return "Good Evening,";
  };

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
      <Typography variant="h5" gutterBottom>
        <span style={{ color: "#1E90FF" }}>{getGreeting()}</span> Welcome to my digital space!
      </Typography>

      {/* Profile Photo */}
      <Box
        component="img"
        src="/IMG_1981.JPG"
        alt="Profile"
        sx={{
          width: "180px",
          height: "220px",
          objectFit: "cover",
          border: "3px solid white",
          marginBottom: "15px",
        }}
      />

      <Typography variant="h4" gutterBottom>
        I'm <span style={{ color: "#1E90FF" }}>Aadarsh Kasturey</span>
      </Typography>
      
      <Typography variant="h5" sx={{ marginBottom: 4 }}>
        Full-Stack Developer | Tech Enthusiast 
        
      </Typography>

      <Button variant="contained" sx={{ borderRadius: "50px", fontSize: "1.1rem" }} href="#projects">
        View My Work
      </Button>
    </Box>
  );
};

export default HeroSection;
