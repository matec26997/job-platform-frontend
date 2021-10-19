import Grid from "@mui/material/Grid"
import {Link as RouterLink} from "react-router-dom"

export default function FootLinks(props){
    
    return(
        <Grid container>
          <Grid item xs>
            <RouterLink to={props.leftUrl}>
              {props.leftMessage}
            </RouterLink>
          </Grid>
          <Grid item>
            <RouterLink to={props.rightUrl}>
              {props.rightMessage}
            </RouterLink>
          </Grid>
        </Grid>
    )
}

export const guestLinks={
  login:{
    url:'/login',
    text:'Iniciar Sesión'
  },
  register:{
    url:'/register',
    text:'Aún no tienes una cuenta? Regístrate'
  },
  forgotPassword:{
    url:'/forgot-password',
    text:'Has olvidado tu contraseña?'
  }
}