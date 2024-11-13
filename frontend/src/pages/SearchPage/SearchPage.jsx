import React, { useEffect, useState, useMemo } from "react";
import { Box, Typography, Grid2, TextField, Container, Button, InputAdornment   } from "@mui/material";
import { alpha, styled } from '@mui/material/styles';
import { getLoremIpsum } from "../../utils/loremIpsumGenerator";
import image from '../../assets/whale.jpg'
import { useSearchParams } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import { useTheme } from "../../context/ThemeContext"
import { aquaticAnimals } from "./MockData";
import { SearchResult } from "../../components/SearchResult/SearchResult";
import Fuse from 'fuse.js'


export const SearchPage = () => {

  const { colors } = useTheme();
  const [searchParams, setSearchParams] = useSearchParams();
  const myParam = searchParams.get('filter');
  const [search, setSearch] = useState(myParam ? decodeURIComponent(myParam) : "")
  const [results, setResults] = useState([])

  const fuseOptions = {
    threshold: 0.35,
    shouldSort: true,
    isCaseSensitive: false,
    keys: [
      {
        name: "common_name",
        weight: 0.6
      },
      {
        name: "scientific_name",
        weight: 0.4
      }
    ]
  };

  const fuse = new Fuse(aquaticAnimals, fuseOptions);

  // const StyledSearchBar = styled(TextField)(({ theme }) => ({
  //   color: colors.text,
  //   size: "small",
  //   id: "search",
  //   placeholder: "Buscar...", 
  //   borderColor: 'white !important',
  //   '& .MuiOutlinedInput-root': {
  //     '& fieldset': {
  //       borderColor: colors.textSecondary,
  //     },
  //     '&:hover fieldset': {
  //       borderColor: colors.primary,
  //     },
  //     '&.Mui-focused fieldset': {
  //       borderColor: colors.primary,
  //     },
  //   },
  //   input: {
  //     color: colors.text,
  //   },
  // }));

  useEffect(() => {
    console.log(fuse.search(search))
    setResults(fuse.search(search).map((match) => match?.item))
  }, [search])

  
  return (

    <Container
        maxWidth="lg"
        component="main"
        sx={{ display: 'flex', flexDirection: 'column', mt: 8, gap: 4 }}
    >
      <Grid2 container direction={"row"} columns={12} >
        {/* <span>{myParam}</span> */}

        <Grid2 size={{ xs: 12, md: 12 }} >
          <Box sx={{ mb: 2, mt:2, display: 'flex', alignItems:"flex-start"}}>
            
            <TextField 
              sx={{ 
                flexGrow: 0.5, borderRadius: 5,
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: colors.textSecondary,
                  },
                  '&:hover fieldset': {
                    borderColor: colors.primary,
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: colors.primary,
                  },
                },
                input: {
                  color: colors.text,
                },
              }}

              value={search}
              onChange={(e) => setSearch(e.target.value)}
              
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start" sx={{color: colors.text}}>
                      <SearchIcon />
                    </InputAdornment>
                  ),
                },
              }}
            />

          </Box>
        </Grid2>

        <Grid2 item size={{ xs: 12, md: 12 }}
          sx={{
            overflowY:"auto",
            maxHeight: "70vh",
            width: "-webkit-fill-available",
            pr: 2,
          }}
        >
          {
            results.length == 0 ?
              <SearchResult
                image="https://png.pngtree.com/png-vector/20220816/ourmid/pngtree-no-results-found-rgb-color-icon-line-cartoon-icon-vector-png-image_33253632.jpg"
                common_name={"No se encontraron resultados."}
                // scientific_name={"No se encontraron resultados."}
                no_results={true}
              />
  
            :
            results.map((animal, i) => (
              <SearchResult
                key={i}
                image={animal.image}
                common_name={animal.common_name}
                scientific_name={animal.scientific_name}
              />
            ))
          }
        </Grid2>
        
      </Grid2>
    </Container>
  )
};
