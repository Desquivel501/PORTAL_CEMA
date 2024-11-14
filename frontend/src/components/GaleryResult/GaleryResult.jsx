import * as React from 'react';
import { alpha, styled } from '@mui/material/styles';
import { Box, Grid2, Typography, Paper  } from '@mui/material';
// import Sitemark from './SitemarkIcon';
import Logo from '../../assets/logo_cema.jpg'
import { useTheme } from "../../context/ThemeContext";


export const GaleryResult = ({ image, common_name, scientific_name, no_results = false}) => {
  const { colors } = useTheme();

  return (
    <Grid2
        item
        size={{ xs: 12, sm: 4, md: 3}}
        sx={{
            flexGrow: 1, display: 'flex', alignItems: 'flex-start',  flexDirection: "column",
            gap: 0.6, border: no_results ? 0: 1, boxShadow: 2,
            borderRadius: 5, p: 1, mb: 1, borderColor:colors.textSecondary
            
        }}
    >
    
        <Grid2
            item
            size={{ xs: 12, md: 12 }}
            sx={{}}
        >
            <Box
            component="img"
            sx={{ height: "auto", width: "100%", mr: 2, borderRadius: 5 }}
            alt={`Imagen ${common_name}`}
            src={image}
        />
        </Grid2>
        <Grid2
            item
            size={{ xs: 12, md: 12 }}
            sx={{py:1}}
        >
            <Box
                sx={{alignItems:"flex-start", display:"flex", flexDirection:"column", 
                    justifyContent:"flex-start", height:"100%", px: 3, textAlign:"left"
                }}
            >
                <Typography variant="h6" color={colors.text} >
                    {common_name}
                </Typography>
                <Typography variant="text"  fontStyle='italic' color={colors.textSecondary}>
                    Tomada por: John Smith
                </Typography>
            </Box>
        </Grid2>
    </Grid2>
  );
}