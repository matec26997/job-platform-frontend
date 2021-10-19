/**
 * Import all dependencies
 */
import {Switch, Route, Redirect } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Copyright from "../global/Copyright";
import Ku_Img from "../../images/keiser_image.jpg";
/**
 *
 * @returns import all pages concerning this phase
 */
import Login from "./Login";
import Register from "./Register";
import PasswordReset from "./PasswordReset";
import PasswordConfirm from "./PasswordConfirm";
/**
 * This section contains all publicly available pages
 * Additionally, these pages cannot be visible when the user is authenticated
 */
const GuestMain = () => {
  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: `url(${Ku_Img})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Switch>
            <Route excat path="/login" children={Login} />
            <Route exact path="/register" children={Register} />
            <Route exact path="/forgot-password" children={PasswordReset} />
            <Route exact path="/confirm-password/" children={PasswordConfirm} />
            <Redirect to="/Login" />
          </Switch>
          <Copyright sx={{mt: 4}}/>
        </Box>
      </Grid>
    </Grid>
  );
};

export default GuestMain;
