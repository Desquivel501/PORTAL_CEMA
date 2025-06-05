import React, { useState } from "react";
import { alpha, styled } from '@mui/material/styles';
import { Container, TextField, Button, Typography, Box, Autocomplete, Divider, Chip, Grid2, Modal, IconButton } from "@mui/material";

import { aquaticAnimals } from "../../assets/MockData";
import FileUploadComponent from "../../components/FileUploadComponent/FileUploadComponent";
import { useTheme } from "../../context/ThemeContext";
import { StyledButton } from "../../components/SyledButton/StyledButton";
import StyledTextField from "../../components/StyledTextfield/StyledTextfield";
import StyledAutocomplete from "../../components/StyledAutocomplete/StyledAutocomplete";
import StyledDatefield from "../../components/StyledDatefield/StyledDatefield";
import LayersIcon from '@mui/icons-material/Layers';

import { MapContainer, Marker, Popup, TileLayer, useMap, useMapEvents } from "react-leaflet";

const FormularioRegistroPage = () => {
    const { colors } = useTheme();

    const [formData, setFormData] = useState({ 
        group: null,
        phylum: null,
        class: null,
        order: null,
        family: null,
    });
    const [errors, setErrors] = useState({});
    const [open, setOpen] = useState(false);

    const [currCoodinates, setCurrCoordinates] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const values = {... Object.fromEntries(data.entries()), ...formData};
        console.log("values", values);

    };

    const handleChange = (event, newValue, field) => {
        if (typeof newValue === 'string') {
            setFormData({ ...formData, [field]: newValue });
          } else if (newValue && newValue.inputValue) {
            setFormData({ ...formData, [field]: {id: -1, label: newValue.inputValue} });
          } else {
            setFormData({ ...formData, [field]: newValue });
          }
    };
    
    const toggleMapStyle = () => {
        setCurrentMap((prev) => (prev === "street" ? "satellite" : prev === "satellite" ? "terrain" : "street"));
    };


    const MapEvents = () => {
        useMapEvents({
          click(e) {
            // console.log(e.latlng);
            setCurrCoordinates(e.latlng);
          },
        });
        return false;
    }

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

  return (
    <Container
        maxWidth={"xl"}
        component="main"
        sx={{ display: 'flex', flexDirection: 'column', mt: 10, gap: 4, mb: 4, alignItems: 'center' }}
    >
        <Box width="80%">
            <Typography variant="h4" fontWeight="bold" color={colors.primary}>Formulario</Typography>
            <Typography variant="h5">Nuevo Registro</Typography>
            <Box component="form" onSubmit={handleSubmit}>

                {/* <Divider sx={{ mt: 2}}>
                    <Typography fontWeight="bold">
                        Ingrese los datos de la especie
                    </Typography>
                </Divider> */}

                {/* <StyledTextField
                    fullWidth
                    label="Nombre Común"
                    name="common_name"
                    error={!!errors.name}
                    helperText={errors.name}
                    margin="normal"
                    colors={colors}
                />
                
                <StyledTextField
                    fullWidth
                    label="Nombre Científico"
                    name="scientific_name"
                    error={!!errors.email}
                    helperText={errors.email}
                    margin="normal"
                />
                <StyledTextField
                    fullWidth
                    multiline
                    label="Descripción"
                    name="description"
                    error={!!errors.message}
                    helperText={errors.message}
                    margin="normal"
                />
                <StyledTextField
                    fullWidth
                    label="Ecosistema"
                    name="ecosystem"
                    error={!!errors.message}
                    helperText={errors.message}
                    margin="normal" 
                />

                <Divider sx={{ mt: 2 }}>
                    <Typography fontWeight="bold">
                        Ingrese la Información taxonómica de la especie
                    </Typography>
                    <Typography>
                        (Puede seleccionar de la lista o ingresar un nuevo valor)
                    </Typography>
                </Divider> */}

                <StyledAutocomplete
                    freeSolo
                    options={
                        aquaticAnimals.map((animal, i) => {
                            return {id: i, label: `${animal.common_name} (${animal.scientific_name})`};
                        })
                    }
                    name="species"
                    value={formData.group}
                    onChange={(event, newValue) => handleChange(event, newValue, "group")}
                    label="Especie"
                    helperText={errors.group}
                    error={!!errors.group}
                    disableCreate
                    sx={{mt: 2}}
                />
                <StyledTextField
                    fullWidth
                    label="Colector"
                    name="collector"
                    error={!!errors.message}
                    helperText={errors.message}
                    margin="normal" 
                />

                <StyledDatefield
                    fullWidth
                    sx={{ minWidth: 250 }}
                    label="Fecha de registro"
                    name="date"
                    error={!!errors.message}
                    helperText={errors.message}
                    margin="normal" 
                />

                <Divider sx={{ mt: 2}}>
                    <Typography fontWeight="bold">
                        Ingrese los datos geograficos del registro
                    </Typography>
                </Divider>

                <StyledTextField
                    fullWidth
                    label="Nombre de la localidad"
                    name="locale"
                    error={!!errors.message}
                    helperText={"Ejemplo: Municipio, Departamento"}
                    margin="normal" 
                />

                <Grid2 container>
                    <Grid2 size={6} pr={1}>
                        <StyledTextField
                            fullWidth
                            type="number"
                            label="Latitud"
                            name="locale"
                            error={!!errors.message}
                            helperText={errors.message}
                            margin="normal" 
                        />
                    </Grid2>
                    <Grid2 size={6} pl={1}>
                        <StyledTextField
                            fullWidth
                            type="number"
                            label="Longitud"
                            name="locale"
                            error={!!errors.message}
                            helperText={errors.message}
                            margin="normal" 
                        />
                    </Grid2>
                    <Grid2 size={6} pr={1}>
                        <StyledTextField
                            fullWidth
                            type="number"
                            label="Elevacion"
                            name="locale"
                            error={!!errors.message}
                            helperText={errors.message}
                            margin="normal" 
                        />
                    </Grid2>
                    <Grid2 size={6} pl={1} display={"flex"} alignContent={"center"} justifyContent={"center"}>
                        <StyledButton variant="contained" fullWidth sx={{ mt: 2, mb: 1 }} onClick={() => setOpen(true)}>
                            Seleccionar en mapa
                        </StyledButton>
                    </Grid2>

                </Grid2>
                <Divider sx={{ mt: 2 }}>
                    <Typography fontWeight="bold">
                        Seleccione una imagen del ejemplar
                    </Typography>
                </Divider>

                <FileUploadComponent name="picture"/>
                
                <StyledButton variant="contained" type="submit" fullWidth sx={{ mt: 2 }}>
                    Crear Registro
                </StyledButton>
            </Box>
        </Box>
        <Modal
            open={open}
            onClose={() => setOpen(false)}
            sx={{
                // display: 'flex',
                // justifyContent: 'center',
                // alignItems: 'center',
                margin: 'auto',
                width: '60%',
                height: "80vh",
                borderRadius: 2,
                boxShadow: 24,
                bgcolor: 'background.paper',
            }}
        >


           <Grid2 container size={{ xs: 12, md: 12 }}>
                <Grid2 container size={12} maxHeight={"73vh"} overflow={"auto"} position={"relative"}
                    sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
                >
                    <MapContainer
                        center={[16.1052, -90.3160]}
                        zoom={7.4}
                        style={{ width: "100%", height: "73vh" }}
                        onClick={() => console.log("Map clicked")}
                    >
                        <TileLayer 
                            key={currentMap}
                            {...mapStyles[currentMap]}
                        />
                        <MapEvents />
                        {
                            currCoodinates && (
                                <Marker position={currCoodinates}>
                                    <Popup>
                                        <Typography>
                                            {`Lat: ${currCoodinates.lat.toFixed(4)}, Lng: ${currCoodinates.lng.toFixed(4)}`}
                                        </Typography>
                                    </Popup>
                                </Marker>
                            )
                        }

                    </MapContainer>
                </Grid2>

                <Grid2 container size={12} height={"8vh"}
                    sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
                >
                    <StyledButton variant="contained" fullWidth onClick={() => setOpen(false)} sx={{height: "100%", borderRadius: 0, fonttSize: 20}}>
                        Seleccionar Ubicacion
                    </StyledButton>
                </Grid2>
               
            </Grid2>
        </Modal>
    </Container>

  );
};



export default FormularioRegistroPage;
