import AdbIcon from "@mui/icons-material/Adb";
import { Box, Button, Typography } from "@mui/material";

interface DesktopNavigationProps {
  title: string;
  pages: string[];
  handleCloseNav: (event: React.MouseEvent<HTMLElement>) => void;
}

export function DesktopNavigation({
  title,
  pages,
  handleCloseNav,
}: DesktopNavigationProps) {
  return (
    <>
      <AdbIcon sx={{ mr: 1, display: { xs: "none", md: "flex" } }} />
      <Typography
        variant="h6"
        noWrap
        sx={{
          mr: 2,
          display: { xs: "none", md: "flex" },
          color: "inherit",
          textDecoration: "none",
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".2rem",
        }}
      >
        {title}
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
    </>
  );
}
