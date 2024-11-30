import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { Badge, Typography } from "@mui/material";
import * as styles from "./styles.module.scss";

export default function Cart({ finishAddProduct, productsCart}) {

  const handleDragOver = (event) => {

    event.preventDefault();
  }

  const handleDrop = (event) => {
    event.preventDefault();
    const product = JSON.parse(event.dataTransfer.getData("card"));
    finishAddProduct(product)
  }

  return (
    <div className={styles.cart} onDrop={handleDrop} onDragOver={handleDragOver}>
      <Badge badgeContent={productsCart.length} color="success">
        <ShoppingCartCheckoutIcon color="info" className={styles.icon} />
      </Badge>
      <Typography>Arrastra aquí tus productos</Typography>
    </div>
  );
}
