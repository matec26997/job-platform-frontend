import { Fragment } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import FootLinks, { guestLinks } from "./FootLinks";
import { useForm } from "react-hook-form";
const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const nameError = undefined;
  const lastNError = undefined;
  const emailHelper = undefined;
  const passwordError = undefined;

  return (
    <Fragment>
      <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
        <AppRegistrationIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Regístrate
      </Typography>
      <Box component="form" nonValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
        <Grid container sx={{ m: 0, p: 0 }}>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            sx={{ pr: { xs: 0, sm: 0, md: 1 } }}
          >
            <TextField
              margin="normal"
              fullWidth
              required
              autoFocus
              autoComplete="name"
              variant="filled"
              type="text"
              id="name"
              {...register("name", {
                required: { value: true, message: "El nombre es requerido" },
                pattern: { value: "asdas", message: "" },
              })}
              label="Nombres"
              error={false}
              helperText={nameError || "Ingresa tus nombres."}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            sx={{ pl: { xs: 0, sm: 0, md: 1 } }}
          >
            <TextField
              margin="normal"
              fullWidth
              required
              variant="filled"
              type="text"
              autoComplete="last_name"
              id="last_name"
              name="last_name"
              label="Apellidos"
              error={false}
              helperText={lastNError || "Ingresa tus apellidos."}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <TextField
              margin="normal"
              fullWidth
              required
              variant="filled"
              autoComplete="email"
              type="email"
              id="email"
              name="email"
              label="Correo Electrónico"
              error={false}
              helperText={
                emailHelper || "Ingresa tu correo electrónico personal."
              }
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            sx={{ pr: { xs: 0, sm: 0, md: 1 } }}
          >
            <TextField
              margin="normal"
              fullWidth
              required
              variant="filled"
              autoComplete="current-password"
              type="password"
              id="password"
              name="password"
              label="Contraseña"
              error={false}
              helperText={passwordError || "Ingresa una contraseña."}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            sx={{ pl: { xs: 0, sm: 0, md: 1 } }}
          >
            <TextField
              margin="normal"
              fullWidth
              required
              variant="filled"
              autoComplete="current-password"
              type="password_confirm"
              id="password_confirm"
              name="password_confirm"
              label="Confirmar Contraseña"
              error={false}
              helperText={passwordError || "Ingresa tu contraseña nuevamente."}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <Button type="submit" fullWidth variant="contained">
              Regístrarse
            </Button>
          </Grid>
        </Grid>
        <FootLinks
          leftUrl={guestLinks.forgotPassword.url}
          leftMessage={guestLinks.forgotPassword.text}
          rightUrl={guestLinks.login.url}
          rightMessage={guestLinks.login.text}
        />
      </Box>
    </Fragment>
  );
};

export default Register;
