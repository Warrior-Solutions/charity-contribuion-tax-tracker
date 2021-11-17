import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { Component } from "react";
import { Redirect } from "react-router";
import { removeUserId, saveUserId } from "../services/UserThingyRenameThis";

const theme = createTheme();

class Login extends Component {
  constructor(props) {
    super(props);

    this.loginAttempt = this.loginAttempt.bind(this);

    this.state = {
      loggedIn: false,
    };

    /*
     * Every time the user navigates to this page, it assumes that he has
     * logged out, so we remove the user id from local storage.
     */
    removeUserId();
  }

  loginAttempt() {
    let email = document.getElementById("email").value;

    let password = document.getElementById("password").value;

    fetch("http://localhost:3000/loginAttempt", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((res) => {

        saveUserId(res.userId);

        if (res.userId !== undefined) {
          this.setState({ loggedIn: true });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {

    if (this.state.loggedIn) {
      return <Redirect to="/dashboard" />;
    } else {
      <Redirect to="/" />
    }

    return (
      <ThemeProvider theme={theme}>
        <Grid container component="main" sx={{ height: "100vh" }}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage:
                "url(https://images2.alphacoders.com/969/969165.jpg)",
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
          >
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar> */}
              <Link
                to="/home"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {/* <img src={Utensils}></img> */}
              </Link>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <Box component="form" noValidate sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <Button
                  onClick={this.loginAttempt}
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="/auth/google" variant="body2">
                      Sign in with Google
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="/signup" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    );
  }
}

export default Login;
