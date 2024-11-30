import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { Badge, Typography } from "@mui/material";
import * as styles from "./styles.module.scss";

export default function Cart({ products = [] }) {
  return (
    <div className={styles.cart}>
      <Badge badgeContent={products.length} color="success">
        <ShoppingCartCheckoutIcon color="info" className={styles.icon} />
      </Badge>
      <Typography>Arrastra aquí tus productos</Typography>
    </div>
  );
}
