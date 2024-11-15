import React, { useEffect, useState, useMemo } from "react";
import { Box, Typography, Grid2, Button, Icon, CircularProgress, Container } from "@mui/material";
import { getLoremIpsum } from "../../utils/loremIpsumGenerator";
import { aquaticAnimals } from "./MockData";
import { GaleryResult } from "../../components/GaleryResult/GaleryResult";

export const GaleryPage = () => {
  
  return (

    <Container
        maxWidth="lg"
        component="main"
        sx={{ display: 'flex', flexDirection: 'column', mt: 10, gap: 4 }}
    >
      <Grid2 container direction={"row"} columns={12}>

        <Grid2 size={{ xs: 12, md: 12 }}>
          <Box sx={{ alignContent:"flex-start", borderBottom: 1, mb: 3 }}>
            <Typography variant="h4" gutterBottom align="left">
              Galería
            </Typography>
          </Box>
        </Grid2>

        <Grid2 container spacing={2}
        >
          {
            aquaticAnimals.map((item, i) => (
              <GaleryResult
                image={item.image}
                common_name={item.common_name}
                data={item}
              />
            ))
          }
        </Grid2>
      </Grid2>
    </Container>
  )
};
