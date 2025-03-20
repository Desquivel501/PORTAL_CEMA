import React from 'react';
import { Autocomplete, TextField } from '@mui/material';
import { useTheme } from "../../context/ThemeContext";
import { createFilterOptions } from '@mui/material/Autocomplete';

const filter = createFilterOptions();

const StyledAutocomplete = ({sx, label, helperText, error, disableCreate = false, ...props}) => {
    const { colors } = useTheme();

    return (
        <Autocomplete
            {...props}
            disablePortal
            renderInput={(params) => (
                <TextField
                    {...params}
                    label={label}
                    helperText={helperText}
                    error={error}
                    variant="outlined"
                    sx={{
                        '& .MuiInputBase-root': {
                            borderRadius: '8px',
                            // backgroundColor: colors.surface, // Background color for input
                        },
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: colors.primary, // Default border color
                            },
                            '&:hover fieldset': {
                                borderColor: colors.primaryLight, // Border color on hover
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: colors.primary, // Border color when focused
                            },
                        },
                        '& .MuiInputLabel-root': {
                            color: colors.text, // Label color when not focused
                        },
                        '& .MuiInputLabel-root.Mui-focused': {
                            color: colors.primary, // Label color when focused
                        },
                        '& .MuiInputBase-input': {
                            color: colors.text,
                        },
                    }}
                />
            )}

            sx={{
                py: 1,
                '& .MuiPaper-root': {
                    '& .MuiAutocomplete-option': {
                        backgroundColor: "red", // Background color for dropdown items
                        color: colors.text, // Text color for dropdown items
                        padding: '8px 12px',
                        // borderRadius: '4px',
                    },
                    backgroundColor: "red", // Background color for dropdown
                },
                ...sx,
            }}

            filterOptions={(options, params) => {
                const filtered = filter(options, params);
        
                const { inputValue } = params;
                // Suggest the creation of a new value
                const isExisting = options.some((option) => inputValue === option.label);
                if (inputValue !== '' && !isExisting && !disableCreate) {
                    filtered.push({
                    inputValue,
                    label: `Crear: "${inputValue}"`,
                    });
                }

                return filtered;
            }}

            getOptionLabel={(option) => {
                if (typeof option === 'string') {
                    return option;
                }
                if (option.inputValue) {
                    return option.inputValue;
                }
                return option.label;
                }}
                renderOption={(props, option) => {
                const { key, ...optionProps } = props;
                return (
                    <li key={key} {...optionProps}>
                    {option.label}
                    </li>
                );
            }}

            // slots={{
            //     popper: (props) => (
            //         <div
            //             {...props}
            //             // style={{
            //             //     ...props.style,
            //             //     backgroundColor: colors.primary, // Background color for dropdown
            //             //     color: colors.text, // Text color for dropdown
            //             //     // borderRadius: '8px',
            //             //     // border: `1px solid ${colors.primary}`, // Border for the dropdown
            //             // }}
            //         />
            //     ),

            // }}
            // getOptionLabel={(option) => option.label} // Ensure the options display correctly

            // renderOption={(props, option) => (
            //     <li
            //         {...props}
            //         style={{
            //             backgroundColor: colors.surface, // Background color for dropdown items
            //             color: colors.text, // Text color for dropdown items
            //             padding: '8px 12px',
            //             // borderRadius: '4px',
            //             '&:hover': {
            //                 color: colors.text, // Hover effect for options
            //             },
            //         }}
            //     >
            //         {option.label}
            //     </li>
            // )}

        />
    )
};

export default StyledAutocomplete;