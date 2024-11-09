import * as React from 'react';
import { alpha, styled } from '@mui/material/styles';
import { Box } from '@mui/material';
// import Sitemark from './SitemarkIcon';
import Logo from '../../assets/logo_cema.jpg'


const AppBarOption = ({ text, icon, onClick, active = false}) => {
  const [open, setOpen] = React.useState(false);

  return (
    <Box
      sx={{
        flexGrow: 1, display: 'flex', alignItems: 'center',
        flexDirection: "column",
        fontSize: '1rem',
        fontWeight: 500,
        fontFamily: '"Inter", sans-serif', 
        borderRadius: 2,
        padding: '8px 12px',
        color: active ? "#0a4c43": "#5b5b5c",
        // bgcolor: 'white',
        '&:hover': {
          bgcolor: '#e6edec',
        },  
        gap: 0.3
      }}
      onClick={onClick}
    >
      {icon}
      {text}
    </Box>
  );
}

export default AppBarOption;