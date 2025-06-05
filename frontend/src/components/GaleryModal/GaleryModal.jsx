import * as React from 'react';
import {Box, Button, Typography, Modal, Grid2, IconButton } from '@mui/material';
import { borderRadius } from '@mui/system';
import { useTheme } from "../../context/ThemeContext";
import { alpha, styled } from '@mui/material/styles';
import CancelIcon from '@mui/icons-material/Cancel';


export const GaleryModal = ({open, setOpen, data, showData = true, route }) => {
    const { colors } = useTheme();
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "60vw",
  //   height: "60vh",
    bgcolor: colors.backgroundSecondary,
    boxShadow: 24,
    p: 4,
    borderRadius: 6,
    outline: 'none'
  };

  const StyledButton = styled(Button)(({ theme }) => ({
    borderRadius: "8px",
    padding: '8px 12px',
    textTransform: 'none',
    fontSize: '1rem',
    fontWeight: 500,
    fontFamily: '"Inter", sans-serif', 
    '&.MuiButton-contained': {  
      background: colors.primary, 
      color: "white",  
      '&:hover': {
        background: colors.primaryLight,  
      },
    },
    '&.MuiButton-text': {  
      color: colors.text,  
      '&:hover': {
        background: colors.surface,  
      },
    },
    '&.MuiButton-outlined': {  
      borderColor: colors.primary,
    },
  }));

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-fotografia"
      >
        <Box sx={style}>
            <IconButton aria-label="close"
                sx={{ position: "fixed", top: 3, right: 3, zIndex: 2000, color: colors.text }}
                onClick={handleClose}

            >
                <CancelIcon />
            </IconButton>

            <Grid2 container direction={"row"} columns={12}>
                <Grid2
                    item
                    size={{ md: 8, xs: 12 }}
                    sx={{}}
                >
                    <Box
                        component="img"
                        sx={{ height: "auto", width: "100%", mr: 2, borderRadius: 5 }}
                        alt={`Imagen ${data.common_name}`}
                        src={data.image}
                    />
                </Grid2>
                <Grid2
                  item
                  size={{ md: 4, xs: 12}}
                  sx={{py:1}}
                  pl={{ md: 2, xs: 0}}
                >
                  <Box
                    sx={{alignItems:"flex-start", display:"flex", flexDirection:"column", 
                        justifyContent:"center", height:"100%", px: 2, textAlign:"left"
                    }}
                  >
                    <Typography variant="h5" color={colors.text} >
                        {data.common_name}
                    </Typography>
                    <Typography variant="h6" color={colors.textSecondary} fontStyle='italic'>
                        {data.scientific_name}
                    </Typography>
                    <Typography variant="text" color={colors.primary} sx={{pt:3}}>
                        {data.collector || "Tomada por: John Smith"}
                    </Typography>
                    <Typography variant="text" color={colors.primary}>
                        Fecha: {data.date || "DD/MM/YYYY"}
                    </Typography>
                    
                    { showData && (
                      <StyledButton color="primary" variant="contained"
                          sx={{
                              my: 2, alignSelf:"center"
                          }}
                      >
                          Ir al avistamiento
                      </StyledButton>
                    )}
                  </Box>
                </Grid2>

            </Grid2>
        </Box>
      </Modal>
    </div>
  );
}
