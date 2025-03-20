import React from "react";
import { styled } from '@mui/material/styles';
import { Button} from "@mui/material";
import { useTheme } from "../../context/ThemeContext";

export const StyledButton = (props) => {
    const { colors } = useTheme();

    const CustomButton = styled(Button)(({ theme }) => ({
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
        <CustomButton {...props}>
            {props.children}
        </CustomButton>
    )
    
}