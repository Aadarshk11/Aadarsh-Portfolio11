"use client"; // Ensure it runs on the client side (for Next.js)

import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, Box, useScrollTrigger } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { blue } from "@mui/material/colors";

// Custom theme
const theme = createTheme({
  palette: {
    primary: { main: "#1a1a1a" }, 
    secondary: { main: "#ffffff" },
  },
  typography: {
    fontFamily: '"Poppins", "Helvetica", "Arial", sans-serif',
    h6: { fontWeight: 600 },
  },
});

// Add elevation on scroll
function ElevationScroll({ children }) {
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 0 });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
    sx: {
      transition: "all 0.3s ease-in-out",
      background: trigger
        ? "linear-gradient(45deg, #1a1a1a, #333)"
        : "linear-gradient(45deg, #1a1a1a, #1a1a1a)",
    },
  });
}

const Header = () => {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Set `isMobile` after mounting
    const updateSize = () => setIsMobile(window.innerWidth < 768);
    updateSize(); // Initial check
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <ElevationScroll>
        <AppBar position="sticky" sx={{ background: "linear-gradient(45deg, #1a1a1a, #333)", boxShadow: "0 4px 12px rgba(0, 0, 0, 0.5)", transition: "all 0.3s ease-in-out" }}>
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1, color: theme.palette.secondary.main }}>
              <Box component="span" sx={{ fontWeight: 700, letterSpacing: 1.5, display: "flex", alignItems: "center" }}>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Avatar sx={{ bgcolor: blue[900], fontWeight: 700 }}>AK</Avatar>
                  Aadarsh Kasturey
                </Stack>
              </Box>
            </Typography>

            {/* Desktop Navigation */}
            {!isMobile && (
              <Box sx={{ display: "flex", gap: 2 }}>
                {["About Me", "Projects", "Skills", "Contact Me"].map((item, index) => (
                  <Button key={index} color="inherit" href={`#${item.toLowerCase().replace(" ", "")}`} sx={{ fontWeight: 600, transition: "0.3s ease-in-out", "&:hover": { transform: "scale(1.05)", color: "#1976d2" } }}>
                    {item}
                  </Button>
                ))}
              </Box>
            )}

            {/* Mobile Menu Button */}
            {isMobile && <IconButton color="inherit" edge="end" onClick={() => setOpen(!open)}><MenuIcon /></IconButton>}
          </Toolbar>
        </AppBar>
      </ElevationScroll>

      {/* Mobile Drawer */}
      <Drawer open={open} onClose={() => setOpen(false)} sx={{ "& .MuiDrawer-paper": { backgroundColor: theme.palette.primary.main, color: theme.palette.secondary.main, width: 250, boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)" } }}>
        <Box sx={{ padding: 2 }}>
          {["About Me", "Projects", "Skills", "Contact Me"].map((item, index) => (
            <Button key={index} fullWidth variant="text" href={`#${item.toLowerCase().replace(" ", "")}`} onClick={() => setOpen(false)} sx={{ color: theme.palette.secondary.main, "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.1)", transform: "scale(1.05)", color: "#1976d2" }, marginBottom: 1, fontWeight: 600, transition: "0.3s ease-in-out" }}>
              {item}
            </Button>
          ))}
        </Box>
      </Drawer>
    </ThemeProvider>
  );
};

export default Header;
