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
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import LaptopIcon from "@mui/icons-material/Laptop";
import { styled } from "@mui/material";
import snip from "./snip.png"
import vector from "./Vector.png"
import './Navbaar.css'
import { LocalGroceryStoreOutlined, SearchOutlined } from "@mui/icons-material";

const pages = ["What We Do", "About Us ", "Careers", "Blog", "Contact Us"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const CustomButton = styled(Button)`
  color: #fff;
  backgroud: #20262e;
  &:hover {
    color: #0f00ff;
  }
`;
function Navbaar(props) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

 
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <>
      <AppBar position="sticky" className="navbar" sx={{ background: "white", color: "black" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>

           
              <img src={snip} alt="logo" style={{width:"230px",height:'135px'}} />

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
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" },gap:'10px' }}>
                <Box>
              <IconButton  onClick={handleOpenUserMenu} sx={{p:0}}>

              <Button
               
                sx={{ my: 2, color: "black", display: "block" }}
                >
                How It Works <img src={vector} alt="vector" />
              </Button>
                    </IconButton>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
                >
                {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
                </Box>
                <Button href="partners"
               
                  sx={{"&:hover": {backgroundColor: "white"}, my: 2, color: "black", display: "block", }}
                  >Partners</Button>
                <Box>
              <IconButton  onClick={handleOpenUserMenu} sx={{p:0}}>

              <Button
               
                sx={{"&:hover": {backgroundColor: "white"}, my: 2, color: "black", display: "block" }}
                >
                Tracking <img src={vector} alt="vector" />
              </Button>
                    </IconButton>
              <Menu
                sx={{"&:hover": {backgroundColor: "white"}, mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
                >
                {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
                </Box>
                <Box>
              <IconButton  onClick={handleOpenUserMenu} sx={{p:0}}>

              <Button
               
                sx={{"&:hover": {backgroundColor: "white"}, my: 2, color: "black", display: "block" }}
                >
                FaQ <img src={vector} alt="vector" />
              </Button>
                    </IconButton>
              <Menu
                sx={{"&:hover": {backgroundColor: "white"}, mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
                >
                {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
              </Box>

              <Button
                onClick={handleCloseNavMenu}
                sx={{"&:hover": {backgroundColor: "white"}, my: 2, color: "black", display: "block" }}
              >
                Us Debit Card
              </Button>
             
                <Button
                  onClick={handleCloseNavMenu}
                  href="contact"
                  sx={{"&:hover": {backgroundColor: "white"}, my: 2, color: "black", display: "block" }}
                >
                  Contact
                </Button>
             
                

            <Box sx={{display:'flex',justifyContent:"center",alignItems:'center'}}>
              <Tooltip title="Login">
                <IconButton onClick={handleOpenUserMenu} class="login">
                  <CustomButton>Login/Register</CustomButton>
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
              <IconButton>
                <LocalGroceryStoreOutlined/>
              </IconButton>
              <Button sx={{color:"black"}}>
                EM <img src={vector} alt="vector" />
              </Button>
              <IconButton>
                <SearchOutlined/>
              </IconButton>
            </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
export default Navbaar;
