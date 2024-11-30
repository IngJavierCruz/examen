import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { routes } from "../../router/routes";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div>
      <Typography variant="h6">Página no encontrada</Typography>

      <Button variant="contained" color="primary" onClick={() => navigate(routes.home)}>Ir al buscador</Button>
    </div>
  );
}
