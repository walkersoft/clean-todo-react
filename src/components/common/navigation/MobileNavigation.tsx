import AdbIcon from "@mui/icons-material/Adb";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, IconButton, Menu, MenuItem, Typography } from "@mui/material";

interface MobileNavigationProps {
  title: string;
  pages: string[];
  navAnchorElement: HTMLElement | null;
  handleOpenNav: (event: React.MouseEvent<HTMLElement>) => void;
  handleCloseNav: (event: React.MouseEvent<HTMLElement>) => void;
}

export function MobileNavigation({
  title,
  pages,
  navAnchorElement,
  handleOpenNav,
  handleCloseNav,
}: MobileNavigationProps) {
  return (
    <>
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
        {title}
      </Typography>
    </>
  );
}
