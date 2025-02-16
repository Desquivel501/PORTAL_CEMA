import * as React from 'react';
import { alpha, styled } from '@mui/material/styles';
import { Box, Drawer } from '@mui/material';
// import Sitemark from './SitemarkIcon';
import Logo from '../../assets/logo_cema.jpg'
import { useTheme } from "../../context/ThemeContext";
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

import { MenuItem, ListItemIcon, ListItemText, useMediaQuery } from '@mui/material';


const DrawerOption = ({ text, icon, onClick, active = false, route = "", toggleDrawer}) => {
  const { colors } = useTheme();

  return (
    // <Link to={route}>
    //   <Box

    //   onClick={onClick}
    // >
    //   {icon}
    //   {text}
    // </Box>
    // </Link>

    <MenuItem
        component={Link}
        onClick={toggleDrawer(false)}
        to={route}
        sx={{
            flexGrow: 1, display: 'flex', alignItems: 'center',
            // flexDirection: "column",
            fontSize: '1rem',
            fontWeight: 500,
            fontFamily: '"Inter", sans-serif', 
            borderRadius: 2,
            padding: '8px 12px',
            color: active ? colors.primary: colors.text,
            '&:hover': {
              bgcolor: colors.primaryLighter,
              color: colors.text
            },  
            gap: 0.6
        }}
    >
        <ListItemIcon sx={{color: active ? colors.primary: colors.text}}>
            {icon}
        </ListItemIcon>
        <ListItemText>{text}</ListItemText>
    </MenuItem>
  );
}

export default DrawerOption;