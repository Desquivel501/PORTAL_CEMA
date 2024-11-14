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
import { ListItemIcon, ListItemText } from '@mui/material';
import { hexToRgba } from "../../utils/colorUtils";
import { useTheme } from "../../context/ThemeContext";
import { useLocation } from 'react-router-dom'

const AppAppBar = () => {
  const { colors } = useTheme();
  const location = useLocation();
  const [open, setOpen] = React.useState(false);

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

  const opciones = ["Inicio", "Buscar", "Listado", "Galeria", "Contáctanos"]

  // const [activeOption, setActiveOption] = useState("Inicio")

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
      <Container maxWidth="lg">
        <StyledToolbar variant="dense" disableGutters>
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', px: 0 }}>

            <Box
              component="img"
              sx={{
                height: 40, width: "auto", mr: 2
              }}
              alt="Logo_cema"
              src={Logo}
            />

            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <AppBarOption 
                icon={<HomeIcon fontSize="medium"/>}
                text="Inicio"
                active={checkActive("/")}
                route={"/"}
              />
              <AppBarOption 
                icon={<SearchIcon fontSize="medium"/>}
                text="Buscar"
                active={checkActive("/buscar")}
                route={"/buscar"}
              />
              <AppBarOption 
                icon={<FishIcon fontSize="medium" color={false ? colors.primary: colors.text}/>}
                text="Listado"
                active={checkActive("/listado")}
              />
              <AppBarOption 
                icon={<CollectionsIcon fontSize="medium"/>}
                text="Galería"
                active={checkActive("/galeria")}
                route={"/galeria"}
              />
              <AppBarOption 
                icon={<InfoIcon fontSize="medium"/>}
                text="Contáctanos"
                active={checkActive("/contacto")}
                route={"/contacto"}
              />
            </Box>
          </Box>

          {/* <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              gap: 1,
              alignItems: 'center',
            }}
          >
            <StyledButton color="primary" variant="text" size="small">
              Sign in
            </StyledButton>
            <StyledButton color="primary" variant="contained" size="small">
              Sign up
            </StyledButton>
          </Box> */}
          
          <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: 1 }}>
            {/* <ColorModeIconDropdown size="medium" /> */}
            <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="top"
              open={open}
              onClose={toggleDrawer(false)}
              PaperProps={{
                sx: {
                  top: 'var(--template-frame-height, 0px)',
                },
              }}
            >
              <Box sx={{ p: 2, backgroundColor: 'background.default' }}>
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

                <MenuItem>
                  <ListItemIcon>
                    <HomeIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Inicio</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <SearchIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Buscar</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <FishIcon fontSize="small" color={false ? "#0a4c43": "#5b5b5c"}/>
                  </ListItemIcon>
                  <ListItemText>Listado</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <CollectionsIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Galeria</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <InfoIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Contáctanos</ListItemText>
                </MenuItem>
              </Box>
            </Drawer>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}


export default AppAppBar;