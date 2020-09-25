/*
 * @Author: Aiden
 * @Date: 2020-09-25 11:31:20
 * @LastEditTime: 2020-09-25 16:03:13
 * @LastEditors: Please set LastEditors
 * @Description: create an appbar
 * @FilePath: /shopping-cart-app/src/header.js
 */
import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import { Toolbar, IconButton, Typography } from "@material-ui/core";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function Header() {
  const classes = useStyles();
  return (
    <div className="header">
      <header></header>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuRoundedIcon fontSize="large" />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Shopping Cart App
          </Typography>
          <IconButton
            edge="end"
            className={classes.menuButton}
            color="inherit"
            aria-label="account"
          >
            <AccountCircleRoundedIcon fontSize="large" />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
