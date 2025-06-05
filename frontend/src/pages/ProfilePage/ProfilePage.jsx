import React, { useEffect, useState, useMemo } from "react";
import { useParams } from 'react-router';
import { Box, Typography, Grid2, Button, Icon, CircularProgress, Container, Divider, List, ListItem, IconButton } from "@mui/material";
import { getLoremIpsum } from "../../utils/loremIpsumGenerator";
import image from '../../assets/whale.jpg'
import { aquaticAnimals } from "../SearchPage/MockData"
import { useTheme } from "../../context/ThemeContext";
import {registros} from "./registros";
import { MapContainer, Marker, Popup, TileLayer, useMap, useMapEvents } from "react-leaflet";
import L from "leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import SearchIcon from '@mui/icons-material/Search';
import LayersIcon from '@mui/icons-material/Layers';
import { GaleryModal } from "../../components/GaleryModal/GaleryModal";
import StyledTextField from "../../components/StyledTextfield/StyledTextfield";
import { StyledButton } from "../../components/SyledButton/StyledButton";
import { GaleryResult } from "../../components/GaleryResult/GaleryResult";

export const ProfilePage = () => {
  const { id } = useParams();
  const { colors } = useTheme();
  const [ animal, setAnimal ] = useState(aquaticAnimals[0]);

  const colorsCircle = ['#FF6B6B', '#6BCB77', '#4D96FF', '#FFD93D', '#A66DD4', '#00B8A9'];

  return (

    <Container
        maxWidth={"xl"}
        component="main"
        sx={{ display: 'flex', flexDirection: 'column', my: 10, gap: 4 }}
    >
      <Grid2 container direction={"row"} columns={12}>

        <Grid2 container size={{ xs: 12, md: 12 }} spacing={2}>
          <Grid2 container size={{ xs: 1.5, md: 1.5 }} flexDirection={"column"} spacing={1}>
            <Grid2
                item
                size={{ xs: 12, md: 12 }}
                p={1}
            >
              <Box
                sx={{
                   height: '100%',
                  aspectRatio: '1 / 1',
                  borderRadius: '50%',
                  backgroundColor: colorsCircle[Math.floor(Math.random() * colorsCircle.length)],
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 20,
                  boxShadow: 3,
                }}
              >
                <Typography variant="h3" fontWeight="bold">
                  DE
                </Typography>
              </Box>

            </Grid2>
          </Grid2>
          <Grid2 size={{ xs: 10, md: 10 }} 
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"left"}
          >
            <Box sx={{ alignContent:"flex-start" }}>
              <Typography variant="h3" gutterBottom align="left" fontWeight="bold" mb={0}>
                Derek Esquivel
              </Typography>
              <Typography variant="h5" gutterBottom align="left" color={colors.secondary} mb={2}>
                Estudiante
              </Typography>
            </Box>
          </Grid2>
        </Grid2>

        <Grid2 container size={{ xs: 12, md: 12 }} spacing={2} mt={2} p={2}  
          sx={{border: 1, borderColor: colors.border, borderRadius: 2}}
        >
          <Grid2 size={{ xs: 12, md: 12 }} 
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"left"}
          >
            <Typography variant="h5" gutterBottom align="left" fontWeight="bold" mb={0}>
              Información del usuario
            </Typography>
          </Grid2>

          <Grid2 size={{ xs: 12, md: 12 }} 
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"left"}

          >
            <Grid2 container size={{ xs: 12, md: 12 }} spacing={2} > 
              <Grid2 item size={{ xs: 12, md: 6 }}> 
                <StyledTextField
                  fullWidth
                  label="Nombre"
                  name="name"
                  error={false}
                  margin="normal"
                  colors={colors}
                  value={"Derek "}
                />
              </Grid2>
              <Grid2 item size={{ xs: 12, md: 6 }}> 
                <StyledTextField
                  fullWidth
                  label="Apellido"
                  name="lastname"
                  error={false}
                  margin="normal"
                  colors={colors}
                  value={"Esquivel"}
                />
              </Grid2>
            </Grid2>
            <Grid2 container size={{ xs: 12, md: 12 }} spacing={2} > 
              <Grid2 item size={{ xs: 12, md: 6 }}> 
                <StyledTextField
                  fullWidth
                  label="Correo Electronico"
                  name="email"
                  error={false}
                  margin="normal"
                  colors={colors}
                  value={"test@gmail.com"}
                />
              </Grid2>
              <Grid2 item size={{ xs: 12, md: 6 }}> 
                <StyledTextField
                  fullWidth
                  label="Apellido"
                  name="password"
                  type="password"
                  error={false}
                  margin="normal"
                  colors={colors}
                  value={"password"}
                />
              </Grid2>
            </Grid2>

            <Grid2 container size={{ xs: 12, md: 12 }} spacing={2} >
              <StyledButton
                variant="contained"
                color="primary"
                size="large"
                sx={{ mt: 2, mb: 2, width: '100%' }}
                onClick={() => console.log("Guardar cambios")}
              >
                Guardar Cambios
              </StyledButton>
            </Grid2>
          </Grid2>
        </Grid2>

        <Grid2 container size={{ xs: 12, md: 12 }} spacing={2} mt={2} p={2}  
          sx={{border: 1, borderColor: colors.border, borderRadius: 2}}
        >
          <Grid2 size={{ xs: 12, md: 12 }} 
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"left"}
          >
            <Typography variant="h5" gutterBottom align="left" fontWeight="bold" mb={0}>
              Publicaciones del usuario
            </Typography>
          </Grid2>

          <Grid2 container spacing={2} >
            {
              aquaticAnimals.slice(0, 6).map((item, i) => (
                <GaleryResult
                  image={item.image}
                  common_name={item.common_name}
                  data={item}
                  showData={true}
                />
              ))
            }
          </Grid2>

          
        </Grid2>

      </Grid2>
    </Container>
  )
};
