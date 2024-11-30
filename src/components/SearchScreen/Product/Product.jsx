import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import * as styles from "./styles.module.scss";

export default function Product({ data }) {
  const { image, imageName, name, priceInfo, description } = data;
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt={imageName}
        height="140"
        image={image}
        className={styles.img}
      />
      <CardContent>
        <div className={styles.title}>
          <Typography lineHeight="1" variant="body2">{name}</Typography>
          <Typography variant="h6" color="primary">{priceInfo?.linePrice || ""}</Typography>
        </div>
      </CardContent>
    </Card>
  );
}