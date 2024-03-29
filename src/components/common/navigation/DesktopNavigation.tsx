import AdbIcon from "@mui/icons-material/Adb";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { LinkItem } from "./NavigationBar";

interface DesktopNavigationProps {
  title: string;
  links: LinkItem[];
  handleCloseNav: (event: React.MouseEvent<HTMLElement>) => void;
}

export function DesktopNavigation({
  title,
  links,
  handleCloseNav,
}: DesktopNavigationProps) {
  const navigate = useNavigate();

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
        {links.map((link) => (
          <Button
            key={link.title}
            onClick={(e) => {
              handleCloseNav(e);
              navigate(link.href);
            }}
            sx={{ my: 2, color: "white", display: "block" }}
          >
            {link.title}
          </Button>
        ))}
      </Box>
    </>
  );
}
