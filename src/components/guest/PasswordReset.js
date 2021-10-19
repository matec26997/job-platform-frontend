import { Fragment } from "react";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import Box from "@mui/material/Box";
import Textfield from "@mui/material/TextField";
import Button from "@mui/material/Button"
import FootLinks, {guestLinks} from "./FootLinks";
const PasswordReset = () => {
  const emailHelper = undefined;
  function handleSubmit(e) {
      e.preventDefault();
    console.log(e.target.value);
  }
  return (
    <Fragment>
      <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
        <RestartAltIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Cambiar Contraseña
      </Typography>
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
        <Textfield
          margin="normal"
          fullWidth
          required
          autoFocus
          type="email"
          id="email"
          name="email"
          autoComplete="email"
          label="Correo Electrónico"
          variant="filled"
          error={false}
          helperText={
            emailHelper ||
            "Ingresa el correo electrónico de la cuenta que necesitas recuperar."
          }
        />
        <Button type="submit" variant="contained" fullWidth sx={{mt:3, mb:2}}>
            Enviar Enlace
        </Button>
        <FootLinks
          leftUrl={guestLinks.login.url}
          leftMessage={guestLinks.login.text}
          rightUrl={guestLinks.register.url}
          rightMessage={guestLinks.register.text}
        />
      </Box>
    </Fragment>
  );
};

export default PasswordReset;
