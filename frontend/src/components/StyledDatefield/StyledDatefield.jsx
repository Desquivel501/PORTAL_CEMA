import React from 'react';
import { DateField } from '@mui/x-date-pickers/DateField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useTheme } from "../../context/ThemeContext";

const StyledDatefield = ({sx, ...props}) => {
    const { colors } = useTheme();

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateField 
                format="DD-MM-YYYY"
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
                    ...sx
                }}
                {...props}
            />
        </LocalizationProvider>
    )
};

export default StyledDatefield;