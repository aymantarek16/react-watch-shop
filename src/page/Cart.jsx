import React from "react";
import { Helmet } from "react-helmet";
import CartItems from "../components/cart-items/CartItems";
import CartTitle from "../components/cart-title/CartTitle";
import Footer from "../components/footer/Footer";

const Cart = () => {
  return (
    <>
       <Helmet>
        <title>Cart | eCommers</title>
      </Helmet>
      <CartTitle />
      <CartItems />
      <Footer />
    </>
  );
};

export default Cart;
