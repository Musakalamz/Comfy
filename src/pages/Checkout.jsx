import { useSelector } from "react-redux";
import { CartTotals, CheckoutForm, SectionTitle } from "../components";

function Checkout() {
  const cartTotal = useSelector((state) => state.cartState.cartTotal);
  if (cartTotal.length === 0) {
    return <SectionTitle text="Your cart is empty" />;
  }
  return (
    <>
      <SectionTitle text="Place your order" />
      <div className="mt-8 grid gap-8  md:grid-cols-2 items-start">
        <CheckoutForm />
        <CartTotals />
      </div>
    </>
  );
}

export default Checkout;
