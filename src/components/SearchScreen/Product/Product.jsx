import { Typography } from "@mui/material";

export default function Product({ data }) {
  const { imgUrl, name, price, description } = data;
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt={description}
        height="140"
        image={imgUrl}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}

// export default function Product({ data }) {
//   const {imgUrl, name, price, description } = data;
//   return (
//     <div className={styles.card}>
//       <img src={imgUrl} alt={description} />

//       <Typography>{name}</Typography>
//       <Typography>{description}</Typography>
//       <Typography>{price}</Typography>
//     </div>
//   )
// }
