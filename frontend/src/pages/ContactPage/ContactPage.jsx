import React, { useEffect, useState, useMemo } from "react";
import { Box, Typography, Grid2, Button, Icon, CircularProgress, Container } from "@mui/material";
import { getLoremIpsum } from "../../utils/loremIpsumGenerator";
import image from '../../assets/cema_contacto3.jpg'

const contactInfo = `Universidad de San Carlos de Guatemala Centro de Estudios del Mar y Acuicultura, -CEMA-

Ciudad Universitaria zona 12, Edificio T-14

Horario de atención de Lunes a Viernes de 07:00 a 15:00 horas.

Tel. (502) 2418-8381

e-mail: cema@usac.edu.gt

Whatsapp: (502) 4123-2024

Facebook: Centro de Estudios del Mar y Acuicultura -CEMA-`

export const ContactPage = () => {
  
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
              Contáctenos
            </Typography>
          </Box>
        </Grid2>

        <Grid2 item size={{ xs: 12, md: 7 }}>
          <Box sx={{ alignContent:"flex-start", pr:5, whiteSpace: "pre-wrap", textAlign:"left"}}>
           {contactInfo}
          </Box>
        </Grid2>
        <Grid2 item size={{ xs: 12, md: 5 }}>
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
