import * as React from 'react';
import { alpha, styled } from '@mui/material/styles';
import { Box, Grid2, Typography } from '@mui/material';
// import Sitemark from './SitemarkIcon';
import Logo from '../../assets/logo_cema.jpg'
import { useTheme } from "../../context/ThemeContext";


export const SearchResult = ({ image, common_name, scientific_name, no_results = false}) => {
  const { colors } = useTheme();

  return (
    <Grid2
        item
        size={{ xs: 12, md: 12, }}
        // width= "-webkit-fill-available"
        // minWidth="100%"
        
        sx={{
            flexGrow: 1, display: 'flex', alignItems: 'flex-start',
            border: no_results ? 0: 1, 
            borderRadius: 5, 
            p: 1, mb: 1, 
            borderColor:colors.textSecondary
        }}
    >
        <Grid2
            container
            direction={"row"}
            columns={12}
            width={"100%"}
            sx={{
                display: 'flex', alignItems: 'center', justifyContent: 'flex-start',
            }}
        >
            {
                !no_results && 
                <Grid2
                    item
                    size={{ xs: 12, md: 2 }}
                    sx={{}}
                >
                    <Box
                        component="img"
                        sx={{ height: "auto", width: "100%", mr: 2, borderRadius: 5 }}
                        alt={`Imagen ${common_name}`}
                        src={image}
                />
                </Grid2>
            }
            <Grid2
                item
                size={{ xs: 12, md: 10 }}
                sx={{py:3}}
            >
                <Box
                    sx={{alignItems:"flex-start", display:"flex", flexDirection:"column", 
                        justifyContent:"flex-start", height:"100%", pl: 3
                    }}
                >
                    <Typography variant="h5" color={colors.text}>
                        {common_name}
                    </Typography>

                    <Typography variant="h6"  fontStyle='italic' color={colors.textSecondary}>
                        {scientific_name}
                    </Typography>
                </Box>
            </Grid2>
        </Grid2>
    </Grid2>
  );
}