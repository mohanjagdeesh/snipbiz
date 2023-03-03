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
      >
        <Container maxWidth="xl" className="navBar-container">
          <Toolbar disableGutters style={{ gap: 60 }}>
            <img src={snip} alt="logo" style={{ width: 200 }} />
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="black"
              >
                <MenuIcon sx={{ color: "white" }} />
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
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <LaptopIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
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
         
                <button
                class="btn"
                >
                  How It Works
                </button>
              <button
                href="partners"
                class="btn"
               
              >
              <a href="partners">
                Partners
                </a>
              </button>

       
                <button
                  class="btn"
                >
                  Tracking
                </button>
           
                <button
                  class="btn"
                >
                  FAQ
                </button>
             
              <button
                class="btn"
              >
                Us Debit Card
              </button>
                
              <button
                class="btn"
              >
                <a href="contact">

                Contact
                </a>
              </button>

                  <button class="login">
                    <SignInButton />
                  </button>
                <IconButton>
                  <LocalGroceryStoreOutlined />
                </IconButton>
                <Button
                  sx={{
                    "&:hover": { backgroundColor: "white" },
                    color: "black",
                  }}
                >
                  EN
                </Button>
                <IconButton>
                  <SearchOutlined />
                </IconButton>
              
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};
export default Navbar;
