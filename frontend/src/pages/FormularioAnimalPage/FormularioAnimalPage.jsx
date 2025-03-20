import React, { useState } from "react";
import { alpha, styled } from '@mui/material/styles';
import { Container, TextField, Button, Typography, Box, Autocomplete, Divider, Chip } from "@mui/material";

import { familias, filos, grupos, clases, ordenes } from "../../assets/MockData";
import FileUploadComponent from "../../components/FileUploadComponent/FileUploadComponent";
import { useTheme } from "../../context/ThemeContext";
import { StyledButton } from "../../components/SyledButton/StyledButton";
import StyledTextField from "../../components/StyledTextfield/StyledTextfield";
import StyledAutocomplete from "../../components/StyledAutocomplete/StyledAutocomplete";



const FormularioAnimalPage = () => {
    const { colors } = useTheme();

    const [formData, setFormData] = useState({ 
        group: null,
        phylum: null,
        class: null,
        order: null,
        family: null,
    });
    const [errors, setErrors] = useState({});

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

  return (
    <Container
        maxWidth={false}
        component="main"
        sx={{ display: 'flex', flexDirection: 'column', mt: 10, gap: 4, mb: 4, alignItems: 'center' }}
    >
        <Box width="80%">
            <Typography variant="h4" fontWeight="bold" color={colors.primary}>Formulario</Typography>
            <Typography variant="h5">Nueva Especie</Typography>
            <Box component="form" onSubmit={handleSubmit}>

                <Divider sx={{ mt: 2}}>
                    <Typography fontWeight="bold">
                        Ingrese los datos de la especie
                    </Typography>
                </Divider>

                <StyledTextField
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
                </Divider>

                <StyledAutocomplete
                    freeSolo
                    options={grupos}
                    name="group"
                    value={formData.group}
                    onChange={(event, newValue) => handleChange(event, newValue, "group")}
                    label="Grupos"
                    helperText={errors.group}
                    error={!!errors.group}
                />
                <StyledAutocomplete
                    freeSolo
                    options={filos}
                    name="phylum"
                    getOptionLabel={(option) => (typeof option === "string" ? option : option.label)}
                    value={formData.phylum}
                    onChange={(event, newValue) => handleChange(event, newValue, "phylum")}
                    label="Filo"
                    error={!!errors.selection}
                    helperText={errors.selection}
                />
                <StyledAutocomplete
                    freeSolo
                    options={clases}
                    name="class"
                    getOptionLabel={(option) => (typeof option === "string" ? option : option.label)}
                    value={formData.class}
                    onChange={(event, newValue) => handleChange(event, newValue, "class")}
                    label="Clase"
                    error={!!errors.class}
                    helperText={errors.class}
                />
                <StyledAutocomplete
                    freeSolo
                    options={ordenes}
                    name="order"
                    getOptionLabel={(option) => (typeof option === "string" ? option : option.label)}
                    value={formData.order}
                    onChange={(event, newValue) => handleChange(event, newValue, "order")}
                    label="Orden"
                    error={!!errors.order}
                    helperText={errors.order}
                />
                <StyledAutocomplete
                    freeSolo
                    options={familias}
                    name="family"
                    getOptionLabel={(option) => (typeof option === "string" ? option : option.label)}
                    value={formData.family}
                    onChange={(event, newValue) => handleChange(event, newValue, "family")}
                    label="Familia"
                    error={!!errors.family}
                    helperText={errors.family}
                />

                <Divider sx={{ mt: 2 }}>
                    <Typography fontWeight="bold">
                        Seleccione la imagen a ser mostrada
                    </Typography>
                </Divider>

                <FileUploadComponent name="picture"/>
                
                <StyledButton variant="contained" type="submit" fullWidth sx={{ mt: 2 }}>
                    Registrar nueva especie
                </StyledButton>
            </Box>
        </Box>
    </Container>

  );
};

export default FormularioAnimalPage;
