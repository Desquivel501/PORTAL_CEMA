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

export const AnimalPage = () => {
  const { id } = useParams();
  const { colors } = useTheme();
  const [ animal, setAnimal ] = useState(aquaticAnimals[id]);
  const [ selected, setSelected ] = useState(registros[0]);

  const [open, setOpen] = useState(false);
  const [modalData, setModalData] = useState({
    common_name: animal.common_name,
    scientific_name: animal.scientific_name,
    image: animal.image,
  });

  const mapStyles = {
    street: {
      name: "Street View",
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    },
    satellite: {
      name: "Satellite View",
      url: "http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}",
      subdomains: ["mt0", "mt1", "mt2", "mt3"],
      attribution: '&copy; <a href="https://www.google.com/help/terms_maps/">Google</a>',
    },
    terrain: {
      name: "Satellite View",
      url: 'http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}',
      subdomains: ["mt0", "mt1", "mt2", "mt3"],
      attribution: '&copy; <a href="https://www.google.com/help/terms_maps/">Google</a>',
    },
  };

  const [currentMap, setCurrentMap] = useState("satellite");

  const toggleMapStyle = () => {
    setCurrentMap((prev) => (prev === "street" ? "satellite" : prev === "satellite" ? "terrain" : "street"));
  };


  const createClusterCustomIcon = (cluster) => {
    const count = cluster.getChildCount();
    let color = colors.cluster;
  
    return L.divIcon({
      html: `<div style="
        background-color: ${color};
        color: white;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        font-weight: bold;
       
        ">
        ${count}
      </div>`,
      className: "custom-cluster-icon",
      iconSize: [30, 30],
    });
  };

  const clickImage = (registro) => {
    setModalData(registro);
    setOpen(true);
  }

  return (

    <Container
        maxWidth={"xl"}
        component="main"
        sx={{ display: 'flex', flexDirection: 'column', my: 10, gap: 4 }}
    >
      <Grid2 container direction={"row"} columns={12}>

        <Grid2 size={{ xs: 12, md: 12 }}>
          <Box sx={{ alignContent:"flex-start", borderBottom: 1, mb: 3 }}>
            <Typography variant="h3" gutterBottom align="left" fontWeight="bold" mb={0}>
              {`${animal.common_name}`}
            </Typography>
            <Typography variant="h5" gutterBottom align="left" color={colors.secondary} mb={2}>
              {`${animal.scientific_name}`}
            </Typography>
          </Box>
        </Grid2>

        <Grid2 container size={{ xs: 12, md: 12 }} spacing={2}>

          <Grid2 container size={{ xs: 3, md: 3 }} flexDirection={"column"} spacing={1}>
            <Grid2
                item
                size={{ xs: 12, md: 12 }}
                p={1}
            >
              <Box
                component="img"
                sx={{ height: "auto", width: "100%", mr: 2, borderRadius: 5 }}
                alt={`Imagen ${animal.common_name}`}
                src={animal.image}
              />

            </Grid2>

            <Divider  sx={{ bgcolor: colors.textSecondary, my: 0.5, mx: 1 }}/>

            <Grid2 item size={{ xs: 12, md: 12 }} ml={1}>
              <Typography align="left" fontWeight="bold" pb={0.5}>Grupo: Lorem ipsum</Typography>
              <Typography align="left" fontWeight="bold" pb={0.5}>Clase: Lorem ipsum</Typography>
              <Typography align="left" fontWeight="bold" pb={0.5}>Orden: Lorem ipsum</Typography>
              <Typography align="left" fontWeight="bold" pb={0.5}>Familia: Lorem ipsum</Typography>
            </Grid2>
          </Grid2>


          <Grid2 container size={{ xs: 5, md: 5 }} maxHeight={"90vh"} overflow={"auto"} position={"relative"}>

            <MapContainer
              center={[16.1052, -90.3160]}
              zoom={7.4}
              style={{ height: "70vh", width: "100%" }}
              onClick={() => console.log("Map clicked")}
            >
              <TileLayer 
                key={currentMap}
                {...mapStyles[currentMap]}
              />
              <MarkerClusterGroup iconCreateFunction={createClusterCustomIcon}>
                {registros.map((marker, i) => (
                  <Marker
                    key={i}
                    icon={L.divIcon({
                      className: "custom-marker",
                      html: `<div style="background-color: ${marker.id == selected.id ? colors.selected : colors.marker}; width: 20px; height: 20px; border-radius: 50%; border: 2px solid white;"></div>`,
                      iconSize: [20, 20],
                      iconAnchor: [10, 10],
                    })}
                    position={marker.coordinates}
                    eventHandlers={{
                      click: (e) => setSelected(marker)
                    }}
                  >
                    <Popup>
                      <p>Colector: {marker.name_of_collector}</p>
                      <p>Fecha: {marker.date}</p>
                    </Popup>
                  </Marker>
                ))}
              </MarkerClusterGroup>

            </MapContainer>
            <IconButton
              onClick={toggleMapStyle}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                zIndex: 1000,
                padding: 10,
                backgroundColor: "#fff",
                borderRadius: 5,
                cursor: "pointer",
                fontWeight: "bold",
                color: "rgba(74, 74, 74, 0.7)",
                border: "none",
              }}
            >
              <LayersIcon />
            </IconButton>

          </Grid2>

          <Grid2 container size={{ xs: 4, md: 4 }} flexDirection={"column"}>
              <Grid2 item size={{ xs: 12, md: 12 }}>
                <Typography variant="h6" align="left" fontWeight="bold">Información del Avistamiento</Typography>
              </Grid2>
              <Grid2 item size={{ xs: 12, md: 12 }}>
                <Typography align="left">Colector: {selected.name_of_collector}</Typography>
                <Typography align="left">Fecha: {selected.date}</Typography>
                <Typography align="left">Localidad: Guatemala, Suchitepequez</Typography>
                <Typography align="left">Coordenadas: {selected.coordinates[0]}, {selected.coordinates[1]}</Typography>
                <Typography align="left">Elevación: 1459-1459 metros</Typography>
              </Grid2>

              <Divider  sx={{ bgcolor: colors.textSecondary, my: 0.5, mx: 1 }}/>

              <Grid2 item size={{ xs: 12, md: 12 }}>
                <Typography variant="h6" align="left" fontWeight="bold">Fotografias</Typography>
              </Grid2>
              <Grid2 container size={{ xs: 12, md: 12 }} maxHeight={"35vh"} overflow={"auto"} px={1}>
                {
                  Array.from({ length: 10 }).map((_, index) => (
                    <Grid2 item size={{ xs: 4, md: 4 }} 
                      position={"relative"}
                      sx={{
                        "&:hover .hoverIcon": {
                          opacity: 1,
                        },
                      }}
                      onClick={() => clickImage({
                        common_name:  `${animal.common_name} ${index}`,
                        scientific_name: `${animal.scientific_name}`,
                        image: animal.image,
                        collector: "John Smith",
                        date: "12/12/2025",
                      })}
                    >
                      <Box
                        component="img"
                        sx={{ height: "auto", width: "100%", borderRadius: 5 }}
                        alt={`Imagen ${animal.common_name}`}
                        src={animal.image}
                      />
                      <SearchIcon
                        className="hoverIcon"
                        fontSize="medium"
                        sx={{
                          padding: 0.5,
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                          backgroundColor: "rgba(0, 0, 0, 0.7)",
                          color: "white",
                          opacity: 0,
                          transition: "opacity 0.3s",
                          borderRadius: 50,
                        }}
                      />
                    </Grid2>
                  ))
                }
              </Grid2>
          </Grid2>
          <GaleryModal open={open} setOpen={setOpen} data={modalData} showData={false}/>
        </Grid2>
      </Grid2>
    </Container>
  )
};
