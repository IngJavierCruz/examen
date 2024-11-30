import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { Badge, Typography } from "@mui/material";
import * as styles from "./styles.module.scss";
import { useState } from "react";

export default function Cart({ finishAddProduct}) {

  const [products, setProducts] = useState([]);

  const handleDragOver = (event) => {

    event.preventDefault();
  }

  const handleDrop = (event) => {
    event.preventDefault();
    const product = JSON.parse(event.dataTransfer.getData("card"));
    setProducts(x => [...x, product]);
    finishAddProduct(product)
  }

  return (
    <div className={styles.cart} onDrop={handleDrop} onDragOver={handleDragOver}>
      <Badge badgeContent={products.length} color="success">
        <ShoppingCartCheckoutIcon color="info" className={styles.icon} />
      </Badge>
      <Typography>Arrastra aquí tus productos</Typography>
    </div>
  );
}
