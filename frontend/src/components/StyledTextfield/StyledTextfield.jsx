import React from 'react';
import { TextField } from '@mui/material';
import { useTheme } from "../../context/ThemeContext";

const StyledTextField = ({sx, ...props}) => {
    const { colors } = useTheme();

    return (
        <TextField
            sx={{
                
                '& .MuiInputBase-root': {
                    borderRadius: '8px',
                    // backgroundColor: colors.surface, 
                },
                '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                        borderColor: colors.primary,
                    },
                    '&:hover fieldset': {
                        borderColor: colors.primaryLight, 
                    },
                    '&.Mui-focused fieldset': {
                        borderColor: colors.primary, 
                    },
                },
                '& .MuiInputLabel-root': {
                    color: colors.text,
                },
                '& .MuiInputLabel-root.Mui-focused': {
                    color: colors.primary,
                },
                '& .MuiInputBase-input': {
                    color: colors.text,
                },
                '& .MuiFormHelperText-root': {
                    color: colors.text,
                },
                ...sx
            }}
            {...props}
        />
    )
};

export default StyledTextField;