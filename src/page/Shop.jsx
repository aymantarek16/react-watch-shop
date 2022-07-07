import React from "react";
import { Helmet } from "react-helmet";
import OurItems from "../components/Our-Items/OurItems";

const Shop = () => {
  return (
    <>
      <Helmet>
        <title>Shop | eCommers</title>
      </Helmet>
      <OurItems />
    </>
  );
};

export default Shop;
