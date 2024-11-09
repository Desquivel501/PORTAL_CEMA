import React, { useEffect, useState, useMemo } from "react";
import { Box, Typography, Grid2, Button, Icon, CircularProgress } from "@mui/material";

export const VistaActividades = () => {
  
  return (
    <Box sx={{ px: 2, m: 0 }}>

      <Grid2 container columns={{ xs: 4, md: 8 }}>
        <Grid2 size="grow" sx={{my: 2}}>
          <Typography m={0} p={0} variant="h4">
            HOME
          </Typography>
        </Grid2>
      </Grid2>
    </Box>
  )
};
