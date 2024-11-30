import { useEffect } from "react";
import { useGetAccountStatements } from "../../../services/product/getProducts";
import Product from "../Product/Product";
import * as styles from "./styles.module.scss";

export default function Products() {
  const { response, getProducts } = useGetAccountStatements();

  useEffect(() => {
    getProducts({ query: "computer", page: 1 });
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.products}>
        {response.map((x, index) => (
          <Product key={index} data={x} />
        ))}
      </div>
    </div>
  );
}
