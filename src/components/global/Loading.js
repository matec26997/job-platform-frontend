import {useState} from "react"
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const Loading = () => {
    const [open, setOpen] = useState(true);
    const handleToggle = () => {
        setOpen(!open);
    }
  return (
    <Backdrop
      sx={{ color: "primary.light", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={open}
      onClick={handleToggle}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default Loading;
