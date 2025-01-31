import { Typography, Box, CardMedia, CardActionArea } from '@mui/material';
import { blue } from "@mui/material/colors"; 
import * as React from 'react';

const Skills = () => {
  return (
    <Box sx={{ textAlign: 'center', padding: 3 }}id="skills">
      {/* Title */}
      <Typography variant="h4" sx={{ fontWeight: 600, marginBottom: 5, color: blue[900] }}>
        My Skills
      </Typography>

      <CardActionArea 
  sx={{ 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    
    padding: 2 // Adds some spacing
  }}
>
  <Box 
    sx={{
      width: '80%',
      maxWidth: 600,
      backgroundColor: "#28282B", // Force black background behind image
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 2, 
      padding: 1 // Optional padding to avoid tight edges
    }}
  >
    <CardMedia
      component="img"
      image="/Picture2.png"
      alt="Skills Overview"
      sx={{
        width: '100%',
        height: 'auto',
        borderRadius: 2,
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
        backgroundColor: "#28282B" // Ensures the image area itself has a black background
      }}
    />
  </Box>
</CardActionArea>

    </Box>
  );
};

export default Skills;
