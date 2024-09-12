import { Filters, PaginationContainer, ProductsContainer } from "../components";
import { customFetch } from "../utils";

const url = "/products";

export async function loader({request}) {
  const response = await customFetch(url);
  console.log(response);
  const { data: products, meta } = response.data;
  console.log(meta, products);

  return { products, meta };
}

function Products() {
  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </>
  );
}

export default Products;
