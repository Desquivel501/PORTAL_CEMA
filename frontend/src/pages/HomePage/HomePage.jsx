import React, { useEffect, useState, useMemo } from "react";
import { Box, Typography, Grid2, Button, Icon, CircularProgress, Container, Divider } from "@mui/material";
import { getLoremIpsum } from "../../utils/loremIpsumGenerator";
import { useTheme } from "../../context/ThemeContext";
import image from '../../assets/whale.jpg'
import image2 from '../../assets/report.jpg'
import { StyledButton } from "../../components/SyledButton/StyledButton";

import crab from '../../assets/crab.jpg'
import frog from '../../assets/frog.jpg'
import turtle from '../../assets/turtle.jpg'

export const HomePage = () => {
  const { colors } = useTheme();
  
  return (

    <Container
        maxWidth={"xl"}
        component="main"
        sx={{ display: 'flex', flexDirection: 'column', pb: 7}}
    >

      <Grid2 container direction={"row"} columns={12} pt={{xs: 0, md: 7}} px={5}>

        <Grid2 maxWidth={"xl"} container direction={"row"} columns={12} pt={{xs: 5, md: 7}} px={{xs: 0, md: 5}} mt={10} my= {5}  display={"flex"} justifyContent={"center"} alignItems={"center"}>
          
          <Grid2 item size={{ xs: 12, md: 7 }} 
            justifyContent={"center"} 
            // alignItems={"center"}
            display={"flex"}
            flexDirection={"column"}
          >
            <Box sx={{ alignContent:"flex-start", borderBottom: 1, mb: 3, mr: 4 }}>
              <Typography gutterBottom align="left" fontSize={{ xs: 30, md: 50 }} fontWeight="bold" color={colors.primary}>
                Bienvenido al Portal de Biodiversidad Acúatica
              </Typography>
            </Box>
            <Box sx={{ alignContent:"flex-start",  mb: 2}} pr={{xs: 0, md: 5}}>
              <Typography align="left">{getLoremIpsum(1)}</Typography>
            </Box>
          </Grid2>
          
          <Grid2 item size={{ xs: 12, md: 5}} justifyContent={"center"}>
            <Box
                component="img"
                sx={{
                  mr: 2,
                  borderRadius: 5, boxShadow: 5,
                }}
                height={"auto"}
                width={{ xs: "80%", md: "100%" }}
                // height: "auto", width: "100%", 
                alt="Image_whale"
                src={image}
            />
          </Grid2>
        </Grid2>
      </Grid2>

      <Divider/>

      <Grid2 container direction={"row"} columns={12} py={{xs: 4, md: 7}} px={{xs: 0, md: 5}}>
        <Grid2 maxWidth={"xl"} container direction={"row"} columns={12} pt={{xs: 1, md: 2}} px={5}>
          
        <Grid2 item size={{ xs: 12, md: 5}}>
            <Box
                component="img"
                sx={{
                  height: "auto", width: "100%",
                  borderRadius: 5, boxShadow: 5,
                }}
                alt="Image_report"
                src={image2}
            />
          </Grid2>
          
          <Grid2 item size={{ xs: 12, md: 7 }} 
            justifyContent={"center"} 
            // alignItems={"center"}
            display={"flex"}
            flexDirection={"column"}
            pl={{xs: 0, md: 5}}
          >
            <Box sx={{ alignContent:"flex-start", borderBottom: 1, mb: 3 }}>
              <Typography gutterBottom align="left" fontSize={{ xs: 30, md: 50 }} fontWeight="bold" color={colors.primary}>
               Articulo
              </Typography>
            </Box>
            <Box sx={{ alignContent:"flex-start", mb: 2}}>
              <Typography align="left">{getLoremIpsum(1)}</Typography>
            </Box>
            <Box sx={{ alignContent:"flex-start", mb: 2}}>
              <StyledButton variant="contained" sx={{ mt: 2, px: 6, fontSize: 18, fontWeight: 500 }} >
                  Leer Articulo
              </StyledButton>
            </Box>
          </Grid2>
        </Grid2>
      </Grid2>

      <Divider/>

      <Grid2 container direction={"row"} columns={12} pt={{xs: 0, md: 7}} px={{xs: 0, md: 5}}>

        <Grid2 maxWidth={"xl"} container direction={"row"} columns={12} pt={{xs: 1, md: 2}} px={5} spacing={2} height="fit-content">
          
          <Grid2 item size={{ xs: 12, md: 12}} >
            <Typography variant="h2" gutterBottom align="center">
              Fotografias Destacadas
            </Typography>
         

          <Grid2 container spacing={2} size={{ xs: 12, md: 12}} sx={{borderRadius: 5}} height={"fit-content"} >


            <Grid2 item size={{ xs: 12, md: 4}} backgroundColor={colors.backgroundSecondary} sx={{borderRadius: 5, flex: 1, display: 'flex', flexDirection: 'column'}}>
              <Box
                  component="img"
                  sx={{
                    height: "70%", width: "100%",
                    borderRadius: 5, boxShadow: 3,
                  }}
                  alt="Image_report"
                  src={crab}
              />
              <Box sx={{ alignContent:"flex-start", px:2}} py={{xs: 1, md: 3}}>
                <Typography align="left" fontSize={{ xs: 20, md: 28 }} variant="h4" mb={1}>Barytelphusa cunicularis</Typography>
                <Typography align="left" fontSize={{ xs: 18, md: 22 }} variant="h5">Tomada por: Luis Vargas</Typography>
              </Box>
            </Grid2>
            <Grid2 item size={{ xs: 12, md: 4}} backgroundColor={colors.backgroundSecondary} sx={{borderRadius: 5, flex: 1, display: 'flex', flexDirection: 'column'}}>
              <Box
                  component="img"
                  sx={{
                    height: "70%", width: "100%",
                    borderRadius: 5, boxShadow: 3,
                  }}
                  alt="Image_report"
                  src={turtle}
              />
              <Box sx={{ alignContent:"flex-start", px:2}} py={{xs: 1, md: 3}}>
                <Typography align="left" fontSize={{ xs: 20, md: 28 }} variant="h4" mb={1}>Chelonia mydas</Typography>
                <Typography align="left" fontSize={{ xs: 18, md: 22 }} variant="h5">Tomada por: Federico Luna</Typography>
              </Box>
            </Grid2>
            <Grid2 item size={{ xs: 12, md: 4}} backgroundColor={colors.backgroundSecondary} sx={{borderRadius: 5, flex: 1, display: 'flex', flexDirection: 'column'}}>
              <Box
                  component="img"
                  sx={{
                    height: "70%", width: "100%",
                    borderRadius: 5, boxShadow: 3,
                  }}
                  alt="Image_report"
                  src={frog}
              />
              <Box sx={{ alignContent:"flex-start", px:2}} py={{xs: 1, md: 3}}>
                <Typography align="left" fontSize={{ xs: 20, md: 28 }} variant="h4" mb={1}>Agalychnis callidryas</Typography>
                <Typography align="left" fontSize={{ xs: 18, md: 22 }}>Tomada por: Fatima Cruz</Typography>
              </Box>
            </Grid2>

          </Grid2>
          </Grid2>
       
        </Grid2>
      </Grid2>
    </Container>
  )
};
