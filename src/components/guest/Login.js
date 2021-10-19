import { Fragment } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import FootLinks, {guestLinks} from "./FootLinks";

const Login = () => {
  const emailHelper = undefined;
  const passwordHeper = undefined;
  function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target);
  }
  return (
    <Fragment>
      <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Inicia Sesión
      </Typography>
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          fullWidth
          id="email"
          name="email"
          type="email"
          label="Correo Electrónico"
          autoFocus
          autoComplete="email"
          variant="filled"
          required
          error={false}
          helperText={
            emailHelper ||
            "Ingresa el correo electrónico con el que registraste tu usuario."
          }
        />
        <TextField
          margin="normal"
          fullWidth
          id="password"
          name="password"
          type="password"
          label="Contraseña"
          autoComplete="current-password"
          variant="filled"
          required
          error={false}
          helperText={
            passwordHeper ||
            "Ingresa la contraseña que corresponde a tu usuario."
          }
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Recordarme"
        />
        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{ mt: 3, mb: 2 }}
        >
          Iniciar Sesión
        </Button>
        <FootLinks
          leftUrl={guestLinks.forgotPassword.url}
          leftMessage={guestLinks.forgotPassword.text}
          rightUrl={guestLinks.register.url}
          rightMessage={guestLinks.register.text}
        />
      </Box>
    </Fragment>
  );
};

//

export default Login;
