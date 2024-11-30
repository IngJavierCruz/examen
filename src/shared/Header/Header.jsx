import Logo from "../../assets/logo.png";
import { IconButton, Typography } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import * as styles from "./styles.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={Logo} alt="Logo Img" className={styles.img} />
        <Typography color="textSecondary" className={styles.name} variant="h4">e-Commerce Gapsi</Typography>
      </div>

      <IconButton aria-label="Menu" color="primary">
        <MoreVertIcon fontSize="large" />
      </IconButton>
    </header>
  );
}
