import React, { useState } from "react";
import { alpha, styled } from '@mui/material/styles';
import { Container, TextField, Button, Typography, Box, Autocomplete, Divider, Chip } from "@mui/material";

import { familias, filos, grupos, clases, ordenes } from "../../assets/MockData";
import FileUploadComponent from "../../components/FileUploadComponent/FileUploadComponent";
import { useTheme } from "../../context/ThemeContext";
import { StyledButton } from "../../components/SyledButton/StyledButton";
import StyledTextField from "../../components/StyledTextfield/StyledTextfield";
import StyledAutocomplete from "../../components/StyledAutocomplete/StyledAutocomplete";



const LoginPage = () => {
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
        maxWidth="xl"
        component="main"
        sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '80vh',
            pt: 10,
            gap: 4,
            mb: 4,
            alignItems: 'center',
            
        }}
    >
        <Box width="80%" sx={{flexGrow: 1,
            justifyContent: 'center',
            alignContent: 'center'
        }}>
            <Typography variant="h4" fontWeight="bold" color={colors.primary}>Iniciar Sesion</Typography>
            <Box component="form" onSubmit={handleSubmit}>


                <StyledTextField
                    fullWidth
                    multiline
                    label="Correo Electrónico*"
                    name="email"
                    error={!!errors.message}
                    helperText={errors.message}
                    margin="normal"
                />
                <StyledTextField
                    fullWidth
                    label="Contraseña*"
                    type="password"
                    name="password"
                    error={!!errors.message}
                    helperText={errors.message}
                    margin="normal" 
                />

                
            </Box>
            <StyledButton
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2, width: "100%" }}
                color="primary"
            >
                Registrarse
            </StyledButton>
        </Box>
    </Container>

  );
};

export default LoginPage;
