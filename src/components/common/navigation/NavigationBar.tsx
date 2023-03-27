import { AppBar, Toolbar } from "@mui/material";
import { Container } from "@mui/system";
import { MouseEvent, useState } from "react";
import { DesktopNavigation } from "./DesktopNavigation";
import { MobileNavigation } from "./MobileNavigation";

export type LinkItem = {
  title: string,
  href: string
};

export function NavigationBar() {
  const title = "CLEAN TODO";
  const links = [
    { title: "Home", href: "/" }, 
    { title: "Tags Management", href: "/Tags" },
  ];

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
            links={links}
            navAnchorElement={navAnchorElement}
            handleOpenNav={handleOpenNav}
            handleCloseNav={handleCloseNav}
          />
          <DesktopNavigation
            title={title}
            links={links}
            handleCloseNav={handleCloseNav}
          />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
