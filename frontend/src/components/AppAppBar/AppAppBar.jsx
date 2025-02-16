import React, { useState, useEffect, useMemo } from "react";
import { alpha, styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
// import Sitemark from './SitemarkIcon';
import Logo from '../../assets/logo_cema2.png'
import AppBarOption from './AppBarOption';
import SearchIcon from '@mui/icons-material/Search';
import FishIcon from '../../assets/Icons/Fish';
import HomeIcon from '@mui/icons-material/Home';
import CollectionsIcon from '@mui/icons-material/Collections';
import InfoIcon from '@mui/icons-material/Info';
import { ListItemIcon, ListItemText, useMediaQuery } from '@mui/material';
import { hexToRgba } from "../../utils/colorUtils";
import { useTheme } from "../../context/ThemeContext";
import { Link, useLocation } from 'react-router-dom'

import { routes as routesData } from "../../routes/index_routes";
import DrawerOption from "./DrawerOption";


const AppAppBar = () => {
  const { colors } = useTheme();
  const location = useLocation();
  const [open, setOpen] = React.useState(false);
  const isMobile = useMediaQuery('(max-width:600px)');

  const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexShrink: 0,
    borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
    backdropFilter: 'blur(24px)',
    border: '1px solid',
    borderColor: (theme.vars || theme).palette.divider,
    backgroundColor: hexToRgba(colors.surface, 0.8),
    boxShadow: (theme.vars || theme).shadows[1],
    padding: '8px 12px',
  }));

  const StyledDrawer = styled(Drawer)(({ theme }) => ({
    '& .MuiDrawer-paper': {
      top: 'var(--template-frame-height, 0px)',
      backgroundColor: colors.surface,
      color: colors.text,
    },
  }));

  const StyledButton = styled(Button)(({ theme }) => ({
    borderRadius: "8px",
    padding: '8px 12px',
    textTransform: 'none',
    // color: 'black',
    fontSize: '1rem',
    fontWeight: 500,
    fontFamily: '"Inter", sans-serif', 
    
    '&.MuiButton-contained': {  
      background: colors.primary, 
      color: "white",  
      '&:hover': {
        background: colors.primaryLight,  
      },
    },
    '&.MuiButton-text': {  
      color: colors.text,  
      '&:hover': {
        background: colors.surface,  
      },
    },
    '&.MuiButton-outlined': {  
      borderColor: colors.primary,
    },
  }));

  const checkActive = (option) => {
    return location.pathname == option
  }

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <AppBar
      position="fixed"
      // enableColorOnDark
      sx={{
        boxShadow: 0,
        bgcolor: 'transparent',
        backgroundImage: 'none',
        mt: 'calc(var(--template-frame-height, 0px) + 15px)',
      }}
    >
      <Container maxWidth={false}>
        <StyledToolbar variant="dense" disableGutters>
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', px: 0 }}>

            <Link to="/">
              <Box
                component="img"
                sx={{
                  height: 40, width: "auto", mr: 2
                }}
                alt="Logo_cema"
                src={Logo}
              />
            </Link>

            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              {routesData.map((route, index) => (
                <AppBarOption 
                  key={index}
                  icon={route.icon}
                  text={route.text}
                  active={checkActive(route.route)}
                  route={route.route}
                />
              ))}
            </Box>
          </Box>

          <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: 1 }} >
            <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <StyledDrawer
              anchor="top"
              open={open}
              onClose={toggleDrawer(false)}
            >
              <Box sx={{ p: 2 }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                  }}
                >
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>
                
                <Divider />
                {
                  routesData.map((route, index) => (
                    <DrawerOption 
                      key={index}
                      icon={route.icon}
                      text={route.text}
                      active={checkActive(route.route)}
                      route={route.route}
                      toggleDrawer={toggleDrawer}
                    />
                  ))
                }
              </Box>
            </StyledDrawer>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}


export default AppAppBar;