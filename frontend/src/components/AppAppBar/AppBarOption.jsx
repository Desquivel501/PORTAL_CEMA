import * as React from 'react';
import { alpha, styled } from '@mui/material/styles';
import { Box } from '@mui/material';
// import Sitemark from './SitemarkIcon';
import Logo from '../../assets/logo_cema.jpg'
import { useTheme } from "../../context/ThemeContext";
import { Link } from 'react-router-dom';


const AppBarOption = ({ text, icon, onClick, active = false, route = "", sx}) => {
  const { colors } = useTheme();

  return (
    <Link to={route}>
      <Box
      sx={{
        ...sx,
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
      onClick={onClick}
    >
      {icon}
      {text}
    </Box>
    </Link>
  );
}

export default AppBarOption;