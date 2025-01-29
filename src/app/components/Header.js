// src/app/components/Header.js
import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, Box, useScrollTrigger } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { blue } from "@mui/material/colors";

// Custom theme with gradient and custom font
const theme = createTheme({
  palette: {
    primary: {
      main: "#1a1a1a", // Dark background
    },
    secondary: {
      main: "#ffffff", // White text
    },
  },
  typography: {
    fontFamily: '"Poppins", "Helvetica", "Arial", sans-serif', // Custom font
    h6: {
      fontWeight: 600,
    },
  },
});

// Function to add elevation on scroll
function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
    sx: {
      transition: "all 0.3s ease-in-out",
      background: trigger
        ? "linear-gradient(45deg, #1a1a1a, #333)" // Gradient on scroll
        : "linear-gradient(45deg, #1a1a1a, #1a1a1a)", // Solid gradient
    },
  });
}

const Header = () => {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const toggleDrawer = () => setOpen(!open);
  const closeDrawer = () => setOpen(false);

  // Handle window resize for responsiveness
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <ElevationScroll>
        <AppBar
          position="sticky"
          sx={{
            background: "linear-gradient(45deg, #1a1a1a, #333)",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.5)", // Subtle shadow effect
            transition: "all 0.3s ease-in-out", // Smooth transition for background change
          }}
        >
          <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, color: theme.palette.secondary.main }}>
  <Box component="span" sx={{ fontWeight: 700, letterSpacing: 1.5, display: 'flex', alignItems: 'center' }}>
    <Stack direction="row" spacing={1} alignItems="center">
      <Avatar sx={{ bgcolor: blue[900], fontWeight: 700 }}>AK</Avatar>
      Aadarsh Kasturey
    </Stack>
  </Box>
</Typography>

            {/* Desktop Navigation (hidden on mobile) */}
            {!isMobile && (
              <Box sx={{ display: "flex", gap: 2 }}>
                <Button
                  color="inherit"
                  href="#about"
                  sx={{
                    fontWeight: 600,
                    transition: "0.3s ease-in-out",
                    "&:hover": {
                      transform: "scale(1.05)",
                      color: "#1976d2", // Add hover color effect
                    },
                  }}
                >
                  About Me
                </Button>
                <Button
                  color="inherit"
                  href="#projects"
                  sx={{
                    fontWeight: 600,
                    transition: "0.3s ease-in-out",
                    "&:hover": {
                      transform: "scale(1.05)",
                      color: "#1976d2", // Add hover color effect
                    },
                  }}
                >
                  Projects
                </Button>
                <Button
                  color="inherit"
                  href="#skills"
                  sx={{
                    fontWeight: 600,
                    transition: "0.3s ease-in-out",
                    "&:hover": {
                      transform: "scale(1.05)",
                      color: "#1976d2", // Add hover color effect
                    },
                  }}
                >
                  Skills
                </Button>
                <Button
                  color="inherit"
                  href="#contact"
                  sx={{
                    fontWeight: 600,
                    transition: "0.3s ease-in-out",
                    "&:hover": {
                      transform: "scale(1.05)",
                      color: "#1976d2", // Add hover color effect
                    },
                  }}
                >
                  Contact Me
                </Button>
              </Box>
            )}

            {/* Mobile Menu Button (hidden on desktop) */}
            {isMobile && (
              <IconButton color="inherit" edge="end" onClick={toggleDrawer}>
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </AppBar>
      </ElevationScroll>

      {/* Mobile Drawer */}
      <Drawer
        open={open}
        onClose={closeDrawer}
        sx={{
          "& .MuiDrawer-paper": {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.secondary.main,
            width: 250,
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)", // Drawer shadow effect
          },
        }}
      >
        <Box sx={{ padding: 2 }}>
          <Button
            fullWidth
            variant="text"
            href="#about"
            onClick={closeDrawer}
            sx={{
              color: theme.palette.secondary.main,
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                transform: "scale(1.05)",
                color: "#1976d2", // Hover effect with color change
              },
              marginBottom: 1,
              fontWeight: 600,
              transition: "0.3s ease-in-out",
            }}
          >
            About Me
          </Button>
          <Button
            fullWidth
            variant="text"
            href="#projects"
            onClick={closeDrawer}
            sx={{
              color: theme.palette.secondary.main,
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                transform: "scale(1.05)",
                color: "#1976d2", // Hover effect with color change
              },
              marginBottom: 1,
              fontWeight: 600,
              transition: "0.3s ease-in-out",
            }}
          >
            Projects
          </Button>
          <Button
            fullWidth
            variant="text"
            href="#skills"
            onClick={closeDrawer}
            sx={{
              color: theme.palette.secondary.main,
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                transform: "scale(1.05)",
                color: "#1976d2", // Hover effect with color change
              },
              marginBottom: 1,
              fontWeight: 600,
              transition: "0.3s ease-in-out",
            }}
          >
            Skills
          </Button>
          <Button
            fullWidth
            variant="text"
            href="#contact"
            onClick={closeDrawer}
            sx={{
              color: theme.palette.secondary.main,
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                transform: "scale(1.05)",
                color: "#1976d2", // Hover effect with color change
              },
              marginBottom: 1,
              fontWeight: 600,
              transition: "0.3s ease-in-out",
            }}
          >
            Contact Me
          </Button>
        </Box>
      </Drawer>
    </ThemeProvider>
  );
};

export default Header;
