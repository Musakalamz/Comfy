import { FeaturedProducts, Hero } from "../components";
import { customFetch } from "../utils";

const url = "/products?featured=true";

// export const loader = async () => {
//   const response = await customFetch(url);
//   console.log(response);
//   const products = response.data.data;
//   console.log(products);
//   return { products };
// };

const featuredProductsQuery = {
  queryKey: ["featuredProducts"],
  queryFn: () => customFetch(url),
};

export const loader = (queryClient) => async () => {
  const response = await queryClient.ensureQueryData(featuredProductsQuery);
  console.log(response);
  const products = response.data.data;
  return { products };
};

function Landing() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  );
}

export default Landing;
