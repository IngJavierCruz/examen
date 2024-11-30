import Logo from "../../assets/logo.png";
import { IconButton } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import * as styles from "./styles.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <img src={Logo} alt="Logo" className={styles.logo} />
      <IconButton aria-label="Menu" color="primary">
        <MoreVertIcon fontSize="large" />
      </IconButton>
    </header>
  );
}
