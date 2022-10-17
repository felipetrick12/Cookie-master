import { AppBar, IconButton, Link, Toolbar, Typography } from "@mui/material";
import React from "react";
import { MenuOutlined } from "@mui/icons-material";
import NextLink from "next/link";

const Navbar = () => {
  return (
    <AppBar position="sticky" elevation={0}>
      <Toolbar>
        <IconButton size="large" edge={"start"}>
          <MenuOutlined />
        </IconButton>
        <NextLink passHref href={"/"}>
          <Link>
            <Typography variant="h6" color={"white"}>
              CookieMaster
            </Typography>
          </Link>
        </NextLink>
        <NextLink passHref href={"/theme-changed"}>
          <Link>
            <Typography variant="h6" color={"white"}>
              Cambiar Tema
            </Typography>
          </Link>
        </NextLink>
      </Toolbar>
      Navbar
    </AppBar>
  );
};

export default Navbar;
