import React, { useEffect, useState, useMemo } from "react";
import { Box, Typography, Grid2, Button, Icon, CircularProgress, Container } from "@mui/material";
import { getLoremIpsum } from "../../utils/loremIpsumGenerator";
import image from '../../assets/whale.jpg'

export const HomePage = () => {
  
  return (

    <Container
        maxWidth={false}
        component="main"
        sx={{ display: 'flex', flexDirection: 'column', mt: 10, gap: 4 }}
    >
      <Grid2 container direction={"row"} columns={12}>

        <Grid2 size={{ xs: 12, md: 12 }}>
          <Box sx={{ alignContent:"flex-start", borderBottom: 1, mb: 3 }}>
            <Typography variant="h3" gutterBottom align="left">
              Bienvenido al Portal de Biodiversidad Acúatica
            </Typography>
          </Box>
        </Grid2>

        <Grid2 item size={{ xs: 12, md: 8 }}>
          <Box sx={{ alignContent:"flex-start", pr:5, mb: 2}}>
            <Typography align="left">{getLoremIpsum(2)}</Typography>
          </Box>
        </Grid2>
        <Grid2 item size={{ xs: 12, md: 4, mb: 2 }}>
          <Box
              component="img"
              sx={{
                height: "auto", width: "100%", mr: 2
              }}
              alt="Image_whale"
              src={image}
          />
        </Grid2>
      </Grid2>
    </Container>
  )
};
