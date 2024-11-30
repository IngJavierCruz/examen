import { useState } from "react";
import { GLOBAL } from "../../config/global";
import { HttpClient } from "../httpClient";

const http = HttpClient();

const initialState = { data: [], pagination: { query: "", page: 1 }};

export const getProductsPromise = ({query = "", page = 1}) => {
  const url = `${GLOBAL.HOST}/walmart-search-by-keyword?keyword=${query}&page=${page}&sortBy=best_match`;
  return http.get(url);
};

export const useGetAccountStatements = () => {
  const [response, setResponse] = useState(initialState);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const getProducts = (payload) => {
    setLoading(true);
    setError("");
    setResponse(initialState);
    getProductsPromise(payload)
      .then(({data}) => {
        const result = data.item.props.pageProps.initialData.searchResult.itemStacks[0]?.items || []
        console.log("response", response);
        const products = result.filter(x => x.canAddToCart && x.availabilityStatusDisplayValue === "In stock");
        console.log("products", products);
        setResponse({data: products, pagination: payload});
      })
      .catch((err) => {
        console.log(err);
        setError(err);
      })
      .finally(() => setLoading(false));
  };

  return { response, loading, error, getProducts };
};
