import Product from "../Product/Product";

export default function Products() {
  const data = [];
  return data.map((x) => <Product data={data} />);
}
