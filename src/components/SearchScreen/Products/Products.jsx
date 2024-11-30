import { useEffect, useState } from "react";
import { useGetAccountStatements } from "../../../services/product/getProducts";
import Product from "../Product/Product";
import CircularProgress from "@mui/material/CircularProgress";
import { IconButton, TextField, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import * as styles from "./styles.module.scss";
import Cart from "../Cart/Cart";
import { useForm } from "../../../redux/useForm";

export default function Products() {
  const { response, getProducts, loading } = useGetAccountStatements();
  const [values, handleInputChange] = useForm({ search: "" });
  const [products, setProducts] = useState([]);
  const { data, pagination } = response;

  const onChangePage = (payload) => {
    const pagination = { ...payload, query };
    getProducts(pagination);
  };

  const initSearch = () => {
    setProducts([]);
    getProducts({ query: values.search, page: 1 });
  }

  useEffect(() => {
    setProducts((x) => [...x, ...data]);
  }, [response]);

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <Typography>Total de registros {products.length}</Typography>
        <Cart />

        <div className={styles.search}>
          <TextField
            label="Buscador"
            name="search"
            value={values.search}
            onChange={handleInputChange}
          />

          <IconButton onClick={() => initSearch()}>
            <SearchIcon />
          </IconButton>
        </div>
      </header>

      <div className={styles.products}>
        {products.map((x, index) => (
          <Product key={index} data={x} />
        ))}
      </div>

      {loading && (
        <div className={styles.loading}>
          <CircularProgress />
        </div>
      )}

      <button onClick={() => onChangePage({ page: pagination.page + 1 })}>
        Más
      </button>
    </div>
  );
}
