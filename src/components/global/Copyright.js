import Typography from "@mui/material/Typography";
import { Link as RouterLink } from "react-router-dom";
const Copyright = (props) => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <RouterLink to="/">KU JOBPLAT</RouterLink>
      {` ${new Date().getFullYear()}.`}
    </Typography>
  );
};

export default Copyright;
