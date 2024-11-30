import { useEffect, useState } from "react";
import { useGetAccountStatements } from "../../../services/product/getProducts";
import Product from "../Product/Product";
import CircularProgress from "@mui/material/CircularProgress";
import { Typography } from "@mui/material";

import * as styles from "./styles.module.scss";
import Cart from "../Cart/Cart";

export default function Products() {
  const { response, getProducts, loading } = useGetAccountStatements();
  const [products, setProducts] = useState([]);
  const { data, pagination } = response;
  const [query, setQuery] = useState("computer");

  const onChangePage = (payload) => {
    const pagination = { ...payload, query };
    getProducts(pagination);
  };

  useEffect(() => {
    getProducts({ query, page: 1 });
  }, []);

  useEffect(() => {
    setProducts((x) => [...x, ...response.data]);
  }, [response]);

  return (
    <div className={styles.wrapper}>
      <Typography style={{position: "absolute"}}>Total de registros {products.length}</Typography>

      <Cart />

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
