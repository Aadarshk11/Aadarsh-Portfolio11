// src/app/components/Header.js
import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, Box, useScrollTrigger } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { createTheme, ThemeProvider } from "@mui/material/styles";

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
        <AppBar position="sticky" sx={{ background: "linear-gradient(45deg, #1a1a1a, #333)" }}>
          <Toolbar>
            {/* Logo or Branding */}
            <Typography variant="h6" sx={{ flexGrow: 1, color: theme.palette.secondary.main }}>
              <Box component="span" sx={{ fontWeight: 700, letterSpacing: 1.5 }}>
                My Portfolio
              </Box>
            </Typography>

            {/* Desktop Navigation (hidden on mobile) */}
            {!isMobile && (
              <Box sx={{ display: "flex", gap: 2 }}>
                <Button color="inherit" href="#about" sx={{ fontWeight: 600 }}>
                  About Me
                </Button>
                <Button color="inherit" href="#skills" sx={{ fontWeight: 600 }}>
                  Skills
                </Button>
                <Button color="inherit" href="#projects" sx={{ fontWeight: 600 }}>
                  Projects
                </Button>
                <Button color="inherit" href="#contact" sx={{ fontWeight: 600 }}>
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
              },
              marginBottom: 1,
              fontWeight: 600,
            }}
          >
            About Me
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
              },
              marginBottom: 1,
              fontWeight: 600,
            }}
          >
            Skills
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
              },
              marginBottom: 1,
              fontWeight: 600,
            }}
          >
            Projects
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
              },
              marginBottom: 1,
              fontWeight: 600,
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