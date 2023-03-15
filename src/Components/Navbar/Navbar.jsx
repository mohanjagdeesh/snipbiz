import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import LaptopIcon from "@mui/icons-material/Laptop";
import snip from "./snip.png";
import "./Navbar.css";
import { LocalGroceryStoreOutlined, SearchOutlined } from "@mui/icons-material";
import { SignInButton } from "../../Auth/LoginButton";

const pages = ["What We Do", "About Us ", "Careers", "Blog", "Contact Us"];


export const Navbar = (props) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        className="navbar"
        sx={{ background: "white", color: "black" }}
        data-testid="navbar"
      >
        <Container
          maxWidth="xl"
          className="navBar-container"
          data-testid="navbar-container"
        >
          <Toolbar
            disableGutters
            style={{ gap: 60 }}
            data-testid="navbar-toolbar"
          >
            <img
              src={snip}
              alt="logo"
              style={{ width: 200 }}
              data-testid="navbar-logo"
            />
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
              }}
              data-testid="navbar-box"
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="black"
                data-testid="navbar-icon-button"
              >
                <MenuIcon sx={{ color: "white" }} data-testid="navbar-menu-icon" />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
                data-testid="navbar-menu"
              >
                {pages.map((page) => (
                  <MenuItem
                    key={page}
                    onClick={handleCloseNavMenu}
                    data-testid={`navbar-menu-item-${page}`}
                  >
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <LaptopIcon
              sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
              data-testid="navbar-laptop-icon"
            />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "black",
                textDecoration: "none",
              }}
              data-testid="navbar-typography"
            >
              SNIPBIZ
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                gap: "16px",
                padding: "0 16px",
              }}
            >

              <button className="btn" data-testid="how-it-works-btn">
                How It Works
              </button>

              <button className="btn" href="partners" data-testid="partners-btn">
                <a href="partners">
                  Partners
                </a>
              </button>

              <button className="btn" data-testid="tracking-btn">
                Tracking
              </button>

              <button className="btn" data-testid="faq-btn">
                FAQ
              </button>

              <button className="btn" data-testid="us-debit-card-btn">
                Us Debit Card
              </button>

              <button className="btn" data-testid="contact-btn">
                <a href="contact">
                  Contact
                </a>
              </button>

              <button className="login" data-testid="signin-btn">
                <SignInButton />
              </button>

              <IconButton data-testid="grocery-store-icon-btn">
                <LocalGroceryStoreOutlined data-testid="grocery-store-icon" />
              </IconButton>

              <Button
                sx={{
                  "&:hover": { backgroundColor: "white" },
                  color: "black",
                }}
                data-testid="en-btn"
              >
                EN
              </Button>

              <IconButton data-testid="search-icon-btn">
                <SearchOutlined data-testid="search-icon" />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};
export default Navbar;
