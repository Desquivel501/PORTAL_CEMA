import * as React from 'react';
import {Box, Button, Typography, Modal, Grid2 } from '@mui/material';
import { borderRadius } from '@mui/system';
import { useTheme } from "../../context/ThemeContext";
import { alpha, styled } from '@mui/material/styles';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "60vw",
//   height: "60vh",
  bgcolor: 'background.paper',
//   boxShadow: 24,
  p: 4,
  borderRadius: 6
};

export const GaleryModal = ({open, setOpen, data, route }) => {
    const { colors } = useTheme();
  const handleClose = () => setOpen(false);

  const StyledButton = styled(Button)(({ theme }) => ({
    borderRadius: "8px",
    padding: '8px 12px',
    textTransform: 'none',
    // color: 'black',
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
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <Grid2 container direction={"row"} columns={12}>
                <Grid2
                    item
                    size={{ xs: 8, md: 8 }}
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
                    size={{ xs: 4, md: 4 }}
                    sx={{py:1}}
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
                            Tomada por: John Smith
                        </Typography>
                        <Typography variant="text" color={colors.primary}>
                            Fecha: DD/MM/YYYY
                        </Typography>
                        <StyledButton color="primary" variant="contained"
                            sx={{
                                my: 2, alignSelf:"center"
                            }}
                        >
                            Ir al avistamiento
                        </StyledButton>
                    </Box>
                </Grid2>
            </Grid2>
        </Box>
      </Modal>
    </div>
  );
}
