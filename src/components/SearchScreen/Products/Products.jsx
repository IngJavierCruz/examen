import { useEffect, useState } from "react";
import { useGetAccountStatements } from "../../../services/product/getProducts";
import Product from "../Product/Product";
import CircularProgress from '@mui/material/CircularProgress';

import * as styles from "./styles.module.scss";
import { Typography } from "@mui/material";


export default function Products() {
  const { response, getProducts, loading } = useGetAccountStatements();
  const [products, setProducts] = useState([]);
  const { data, pagination } = response;
  debugger
  const [query, setQuery] = useState("computer");

  const onChangePage = (payload) => {
    const pagination = { ...payload, query };
    getProducts(pagination);
  };

  useEffect(() => {
    getProducts({ query, page: 1 });
  }, []);

  useEffect(() => {
    setProducts((x => [...x, ...response.data]));
  }, [response]);

  return (
    <div className={styles.wrapper}>
      <Typography>Total registros {products.length}</Typography>
      <div className={styles.products}>
        {products.map((x, index) => (
          <Product key={index} data={x} />
        ))}
      </div>

      {loading && <CircularProgress /> }

      <button onClick={() => onChangePage({ page: pagination.page + 1 })}>Más</button>
    </div>
  );
}
