import { useState } from 'react'
import './style.css'
import DeleteIcon from '@mui/icons-material/Delete';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Box, IconButton, Typography } from '@mui/material'
import { useTheme } from '../../context/ThemeContext';


const FileUploadComponent = ({name}) => {
    const { colors } = useTheme();
    const [image, setImage] = useState(null)
    const [fileName, setFileName] = useState("No se ha seleccionado ningun archivo")

    const handleFileChange = ({ target: { files } }) => {
        if (files[0]) {
            setFileName(files[0].name);
            setImage(URL.createObjectURL(files[0]));
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const files = e.dataTransfer.files;
        if (files[0]) {
            setFileName(files[0].name);
            setImage(URL.createObjectURL(files[0]));
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
    };


  return (
    <Box className='container'>
        <Box  
            className='file-upload'
            sx={{border: `2px dashed`, borderColor: colors.primary}}
            onClick={() => document.querySelector(".input-field").click()}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
        >
            <input
                name={name}
                type="file"
                accept="image/*"
                className="input-field"
                hidden
                onChange={handleFileChange}
                style={{ cursor: 'pointer' }}
            />
            {
                image ?
                    <Box
                        component="img"
                        src={image}
                        height="auto"
                        width="40%"
                        alt={fileName}
                    />
                :
                <Box>
                    <CloudUploadIcon sx={{ fontSize: 50, color: colors.primary}} />
                    <Typography variant='h6' color={colors.primary}>Busca o arrastra un archivo</Typography>
                </Box>
            }
        </Box>
        <Box
            className='uploaded-row'
            sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: colors.backgroundSecondary}}
        >
            <Box className='upload-content'>
                {fileName} 
                {
                    image &&
                    <IconButton onClick={() => {
                        setFileName("No se ha seleccionado ningun archivo")
                        setImage(null)
                    }}>
                        <DeleteIcon />
                    </IconButton>
                }
            </Box>
        </Box>
    </Box>
  )
}

export default FileUploadComponent
