import { AppBar, Toolbar } from "@mui/material";
import { Container } from "@mui/system";
import { MouseEvent, useState } from "react";
import { DesktopNavigation } from "./DesktopNavigation";
import { MobileNavigation } from "./MobileNavigation";

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
          <MobileNavigation
            title={title}
            pages={pages}
            navAnchorElement={navAnchorElement}
            handleOpenNav={handleOpenNav}
            handleCloseNav={handleCloseNav}
          />
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
