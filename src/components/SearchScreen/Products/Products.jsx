import { useEffect, useState } from "react";
import { useGetAccountStatements } from "../../../services/product/getProducts";
import Product from "../Product/Product";
import { Button, IconButton, TextField, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Cart from "../Cart/Cart";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { useForm } from "../../../redux/useForm";
import Spinner from "../../../shared/Spinner/Spinner";
import Snackbar from "@mui/material/Snackbar";
import * as styles from "./styles.module.scss";

export default function Products() {
  const { response, getProducts, loading } = useGetAccountStatements();
  const [values, handleInputChange, reset] = useForm({ search: "" });
  const [products, setProducts] = useState([]);
  const [productsCart, setProductsCart] = useState([]);
  const hasMore = true; // LIGAR CON MAXIMO NUMERO DE PAGINAS
  const [showMessage, setShowMessage] = useState(false);

  const { data, pagination } = response;

  const onChangePage = (payload) => {
    const pagination = { ...payload, query: values.search };
    getProducts(pagination);
  };

  const handleDragStart = (event, product) => {
    event.dataTransfer.setData("card", JSON.stringify(product));
  };

  const finishAddProduct = (product) => {
    const newProducts = products.filter((x) => x.id !== product.id);
    setProducts(newProducts);
    setProductsCart((x) => [...x, product.id]);
    setShowMessage(true);
  };

  const initSearch = () => {
    setProducts([]);
    getProducts({ query: values.search, page: 1 });
  };

  const resetTest = () => {
    setProducts([]);
    setProductsCart([]);
    reset();
  };

  const handleScroll = (event) => {
    const { scrollTop, scrollHeight, clientHeight } = event.target;
    if (scrollTop + clientHeight >= scrollHeight - 5 && hasMore && !loading) {
      onChangePage({ page: pagination.page + 1 });
    }
  };

  useEffect(() => {
    const uniquesProducts = data.filter((x) => !productsCart.includes(x.id));
    setProducts((x) => [...x, ...uniquesProducts]);
  }, [response]);

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <Typography>Total de registros {products.length}</Typography>
        <Cart finishAddProduct={finishAddProduct} productsCart={productsCart} />

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

          <Button
            variant="outlined"
            size="small"
            startIcon={<RestartAltIcon />}
            onClick={() => resetTest()}
          >
            Reiniciar prueba
          </Button>
        </div>
      </header>

      <div className={styles.products} onScroll={handleScroll}>
        {products.map((x, index) => (
          <Product key={index} data={x} handleDragStart={handleDragStart} />
        ))}
      </div>

      {loading && <Spinner />}

      <Snackbar
        open={showMessage}
        autoHideDuration={6000}
        onClose={() => setShowMessage(false)}
        message="Producto agregado"
        anchorOrigin={{horizontal: "center", vertical: "top"}}
      />
    </div>
  );
}
