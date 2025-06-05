import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { Grid2, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "../../context/ThemeContext";
import { Link, useLocation } from "react-router-dom";
import { routes as routesData } from "../../routes/index_routes";
// import DrawerOption from "./DrawerOption";

import Logos from '../../assets/logos_combined.png'
import LogoUsac from '../../assets/logo-usac-byempacharte.png'

const BottomBar = () => {
  const { colors } = useTheme();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:600px)");

  const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
    backdropFilter: "blur(24px)",
    border: "1px solid",
    borderColor: (theme.vars || theme).palette.divider,
    backgroundColor: colors.surface,
    boxShadow: (theme.vars || theme).shadows[4],
    padding: "8px 12px",
  }));

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <Container maxWidth={"xl"}>
      <StyledToolbar>
        <Grid2 container direction={"row"} columns={12} width="100%" spacing={2}>
          <Grid2 item size={{ xs: 4, md: 4 }}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"left"}
            flexDirection={"column"}
          >
            <Typography
              // variant="h6"
              color={colors.text}
              align="left"
              fontSize={{ xs: 12, md: 16 }}
            >
              Universidad de San Carlos de Guatemala
            </Typography>
            <Typography
              fontSize={{ xs: 12, md: 16 }}
              color={colors.text}
              align="left"
            >
              Centro de Estudios del Mar y Acuicultura -CEMA-
            </Typography>
          </Grid2>

          <Grid2 item size={{ xs: 4, md: 4 }}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"left"}
            flexDirection={"column"}
          >
            <Typography
               fontSize={{ xs: 12, md: 16 }}
              color={colors.text}
              align="left"
            >
              Ciudad Universitaria zona 12, Edificio T-14
            </Typography>
            <Typography
               fontSize={{ xs: 12, md: 16 }}
              color={colors.text}
              align="left"
            >
              Tel. (502) 2418-8381
            </Typography>
            <Typography
               fontSize={{ xs: 12, md: 16 }}
              color={colors.text}
              align="left"
            >
              E-mail: cema@usac.edu.gt
            </Typography>
          </Grid2>

          {/* <Grid2 size="grow"></Grid2> */}

          <Grid2 item size={{ xs: 4, md: 4 }}
            display={"flex"}
            justifyContent={"flex-end"}
            alignItems={"center"}
            flexDirection={"row"}
          >
            <Box
              component="img"
              sx={{
                height: "auto",
                width: "50%",
              }}
              alt="Logos_usac_cema"
              src={Logos}
            />
          
          </Grid2>
          
        </Grid2>  
              
      </StyledToolbar>
    </Container>
  );
};

export default BottomBar;