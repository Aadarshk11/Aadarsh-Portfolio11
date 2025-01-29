// src/app/components/Projects.js
import React from "react";
import { Box, Typography, Grid, Card, CardContent, Button } from "@mui/material";

const Projects = () => {
  const projects = [
    { title: "Project 1", description: "This is a description of project 1.", link: "#" },
    { title: "Project 2", description: "This is a description of project 2.", link: "#" },
    { title: "Project 3", description: "This is a description of project 3.", link: "#" },
  ];

  return (
    <Box sx={{ padding: "60px 20px", textAlign: "center" }} id="projects">
      <Typography variant="h4" sx={{ fontWeight: 600, marginBottom: 5 }}>
        My Projects
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ boxShadow: 3, "&:hover": { transform: "scale(1.05)", transition: "0.3s" } }}>
              <CardContent>
                <Typography variant="h6">{project.title}</Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {project.description}
                </Typography>
                <Button variant="contained" color="primary" href={project.link}>
                  View Project
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
