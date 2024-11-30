import React from "react";
import { Typography } from "@mui/material";
import * as styles from "./styles.module.scss";

export default function Spinner({ hide = false, description = "Cargando" }) {
  if (hide) return null;

  return (
    <div className={styles.container}>
      <div className={styles.loading_spinner} />
      <Typography variant="body2" className={styles.label}>
        {description}
      </Typography>
    </div>
  );
}
