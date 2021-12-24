import { useState, Fragment } from 'react';
import { NavLink, Link, useLocation } from "react-router-dom";
import Stack from '@mui/material/Stack';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Badge from '@mui/material/Badge';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Button from '@mui/material/Button';

const Navbar = ({mainLinks, presaleLink, bridgeLink, moreMenuLinks, comingSoonLink, handleClickContracts}) => {
  const { pathname } = useLocation();
  const [anchorMoreEl, setAnchorMoreEl] = useState(null);
  const openMoreMenu = Boolean(anchorMoreEl);

  const handleClickMoreMenu = (event) => {
    setAnchorMoreEl(event.currentTarget);
  };

  const handleCloseMoreMenu = () => {
    setAnchorMoreEl(null);
  };

  const handleClickContractsItem = () => {
    handleCloseMoreMenu()
    handleClickContracts()
  }

  return (
    <Fragment>
      <Stack direction="row" spacing={3} alignItems="center">
        {mainLinks.map(link => (
          <Button 
            key={link.href}
            component={NavLink}
            activeClassName="activeNavLink"
            to={link.href} 
            exact
            color="inherit"
            size="large"
            sx={{fontWeight: 500, borderRadius: 5}}
          >
            {link.label}
          </Button>
        ))}
        <Button
          component={NavLink}
          activeClassName="activeNavLink"
          to={presaleLink.href} 
          exact
          color="inherit"
          size="large"
          sx={{fontWeight: 500, borderRadius: 5}}
        >
          <Badge
            badgeContent="LIVE" 
            color="error"
            sx={{fontWeight: 500, letterSpacing: 1}}
          >
            {presaleLink.label}
          </Badge>
        </Button>
        <Button
          component="a"
          href={bridgeLink.href}
          target="_blank" 
          rel="noopener noreferrer"
          color="inherit"
          size="large"
          sx={{fontWeight: 500, borderRadius: 5}}
        >
          <Badge
            badgeContent="NEW" 
            color="primary"
            sx={{fontWeight: 500, letterSpacing: 1}}
          >
            {bridgeLink.label}
          </Badge>
        </Button>
        {comingSoonLink.map(link => (
          <Button
            key={link}
            disabled
            color="inherit"
            size="large"
            sx={{fontWeight: 500, borderRadius: 5}}
          >
            <Badge
              key={link} 
              badgeContent="SOON" 
              color="primary"
              sx={{fontWeight: 500, letterSpacing: 1}}
            >
              {link}
            </Badge>
          </Button>
        ))}
        <Fragment>
          <Button 
            color="inherit"
            size="large"
            onClick={handleClickMoreMenu}
            endIcon={<KeyboardArrowDownIcon />}
            sx={{fontWeight: 500, borderRadius: 5}}
          >
            More
          </Button>
          <Menu
            id="more-menu"
            anchorEl={anchorMoreEl}
            open={openMoreMenu}
            onClose={handleCloseMoreMenu}
            MenuListProps={{
              'aria-labelledby': 'more-menu',
            }}
            PaperProps={{
              elevation: 0,
              sx: {
                boxShadow: "0 4px 14px 0 rgb(0 0 0 / 10%)",
                borderRadius: '15px'
              }
             }}
          >
            {moreMenuLinks.map(link => (
              <MenuItem 
                key={link.href}
                onClick={handleCloseMoreMenu}
                component={Link}
                to={link.href}
                selected={pathname === link.href}
              >
                {link.label}
              </MenuItem>
            ))}
            <MenuItem 
              onClick={handleCloseMoreMenu}
              component="a"
              href={process.env.REACT_APP_AXL_WHITEPAPER_URL}
              target="_blank" 
              rel="noopener noreferrer"
            >
              AXL whitepaper
            </MenuItem>
            <MenuItem onClick={handleClickContractsItem}>
              Contracts
            </MenuItem>
          </Menu>
        </Fragment>
      </Stack>
    </Fragment>
  );
}
 
export default Navbar;