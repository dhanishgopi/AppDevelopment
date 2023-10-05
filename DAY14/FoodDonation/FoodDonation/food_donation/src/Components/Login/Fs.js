import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import "../Login/navbar.css";


function Navbar() {
  const [click, setClick] = useState(false);
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const navigate = useNavigate();

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setOpenDrawer(open);
  };

  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className="new-navbar">
        <div className="nav-container">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <div className="nav-icon" onClick={handleClick}>
            <FontAwesomeIcon icon={click ? faTimes : faBars} />
          </div>
          <Link to="/" className="nav-logo">
            <h3>Food Donations</h3>
          </Link>
          <div className={click ? "nav-menu active" : "nav-menu"}>
            <Link
              to="/about"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              ABOUT
            </Link>
            <Link
              to="/contact"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              CONTACT
            </Link>
            <Link
              to="/privacy"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              PRIVACY POLICY
            </Link>
            <Link
              to="/login"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              LOGOUT
            </Link>
            <Link
              to="/dashboard"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              DASHBOARD
            </Link>
          </div>
        </div>
      </nav>
      <Drawer anchor="left" open={openDrawer} onClose={toggleDrawer(false)}>
        <div style={{ width: '250px' }}>
          <List>
            <center>Hello Again!<br /></center>

            <ListItem button onClick={toggleDrawer(false)}>
              <Link to="/about" style={{ textDecoration: "none" }}>
                <ListItemText primary=" About Us" />
              </Link>
            </ListItem>
            <ListItem button onClick={toggleDrawer(false)}>
              <Link to="/privacy" style={{ textDecoration: "none" }}>
                <ListItemText primary="Privacy Policy" />
              </Link>
            </ListItem>

            <ListItem button onClick={toggleDrawer(false)}>
              <Link to="/faq" style={{ textDecoration: "none" }}>
                <ListItemText primary="FAQ" />
              </Link>
            </ListItem>
            <ListItem button onClick={toggleDrawer(false)}>
              <Link to="/contact" style={{ textDecoration: "none" }}>
                <ListItemText primary="Contact Us" />
              </Link>
            </ListItem>
          </List>
        </div>
      </Drawer>
    </>
  );
}

export default Navbar;
