import {
  AppBar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AdbIcon from "@mui/icons-material/Adb";
import { useState, MouseEvent } from "react";
import Button from "@mui/material/Button";
import { Container } from "@mui/system";
import { DesktopNavigation } from "./DesktopNavigation";

export function NavigationBar() {
  const title = "CLEAN TODO";
  const pages = ["Home", "Create New List"];

  const [navAnchorElement, setNavAnchorElement] = useState<HTMLElement | null>(
    null
  );

  const handleOpenNav = (event: MouseEvent<HTMLElement>) => {
    setNavAnchorElement(event.currentTarget);
  };

  const handleCloseNav = (event: MouseEvent<HTMLElement>) => {
    setNavAnchorElement(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ ml: 2 }}>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-controls="app-menu"
              aria-haspopup="true"
              onClick={handleOpenNav}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="app-menu"
              keepMounted
              open={navAnchorElement != null}
              onClose={handleCloseNav}
              anchorEl={navAnchorElement}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              transformOrigin={{ vertical: "top", horizontal: "left" }}
              sx={{ display: { sx: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={() => {}}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ mr: 1, display: { xs: "flex", md: "none" } }} />
          <Typography
            variant="h5"
            noWrap
            sx={{
              mr: 2,
              display: {
                xs: "flex",
                md: "none",
              },
              flexGrow: 1,
              color: "inherit",
              textDecoration: "none",
              fontFamily: "monospace",
              letterSpacing: ".2rem",
            }}
          >
            CLEAN TODO
          </Typography>
          <DesktopNavigation
            title={title}
            pages={pages}
            handleCloseNav={handleCloseNav}
          />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
