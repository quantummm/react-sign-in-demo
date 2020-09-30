/*
 * @Author: Aiden
 * @Date: 2020-09-25 11:41:03
 * @LastEditTime: 2020-09-30 11:11:37
 * @LastEditors: Please set LastEditors
 * @Description: Sign in Page
 * @FilePath: /shopping-cart-app/src/signin.js
 */

import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(5),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },

  submit: {
    marginTop: theme.spacing(3),
  },
}));

function Signin() {
  const classes = useStyles();
  const [names, setNames] = useState("");
  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });

  const onClickSignin = () => {
    if (names == "" || values.password == "") {
      alert("Please fill in the field");
    }
  };

  const handleChange = (prop) => (e) => {
    setValues({ ...values, [prop]: e.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const userNameChange = (e) => {
    setNames(e.target.value);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form}>
          <TextField
            id="outlined-username-input"
            label="Username"
            type="username"
            autoComplete="current-username"
            variant="outlined"
            margin="normal"
            onChange={userNameChange}
            required
            fullWidth
          />
          <FormControl variant="outlined" required fullWidth margin="normal">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              labelWidth={70}
            />
          </FormControl>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            size="large"
            onClick={onClickSignin}
            className={classes.submit}
          >
            Sign in
          </Button>
          {/* <Typography component="p" variant="h5">
            Username:
            {names}
          </Typography>
          <Typography component="p" variant="h5">
            Password:
            {values.password}
          </Typography> */}
        </form>
      </div>
    </Container>
  );
}

export default Signin;
