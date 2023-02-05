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
import { useState, MouseEvent } from "react";
import Button from "@mui/material/Button";

export function NavigationBar() {
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
      <Toolbar disableGutters>
        <Typography
          variant="h6"
          noWrap
          sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
        >
          Clean TODO
        </Typography>
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
        <Typography
          variant="h5"
          noWrap
          sx={{
            mr: 2,
            display: { sx: "flex", md: "none", flexGrow: 1, color: "inherit" },
          }}
        >
          Clean TODO
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          {pages.map((page) => (
            <Button
              key={page}
              onClick={handleCloseNav}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              {page}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
